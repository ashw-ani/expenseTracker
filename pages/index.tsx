import React, { useState, useEffect } from "react";
import ExpenseLineChart from "@/Components/lineChart";
import ExpenseBarChart from "@/Components/barChart";
import ExpensePieChart from "@/Components/pieChart";
import expenseData, { ExpenseData } from "../Data/expensedata";
import styles from "@/styles/Home.module.css";

interface ProcessedData {
  weeklySpend: Record<string, number>;
  paymentMethods: Record<string, number>;
  dailySpends: Record<string, number>;
  categorySpends: Record<string, number>;
}

interface Settings {
  dateRange: string;
  paymentMethods: string[];
  categories: string[];
}

const HomePage: React.FC = () => {
  const [processedData, setProcessedData] = useState<ProcessedData | null>(
    null
  );

  const [totalSpends, setTotalSpends] = useState<number>(0);
  const [creditCardSpends, setCreditCardSpends] = useState<number>(0);
  const [settings, setSettings] = useState<Settings | null>(null);

  useEffect(() => {
    processData(expenseData);
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  useEffect(() => {
    if (settings) {
      processData(expenseData);
    }
  }, [settings]);

  const processData = (data: ExpenseData[]) => {
    const weeklySpend: Record<string, number> = {};
    const paymentMethods: Record<string, number> = {};
    const dailySpends: Record<string, number> = {};
    const categorySpends: Record<string, number> = {};

    let totalAmount = 0;
    let creditCardAmount = 0;

    data.forEach((expense) => {
      const { date, amount, paymentMethod, category } = expense;
      const week = getWeek(date);

      if (settings) {
        if (
          (settings.dateRange === "last30days" && !isWithinLast30Days(date)) ||
          (settings.paymentMethods.length > 0 &&
            !settings.paymentMethods.includes(paymentMethod)) ||
          (settings.categories.length > 0 &&
            !settings.categories.includes(category))
        ) {
          return;
        }
      }

      // Process weekly spend
      weeklySpend[week] = (weeklySpend[week] || 0) + amount;

      // Process payment methods
      paymentMethods[paymentMethod] =
        (paymentMethods[paymentMethod] || 0) + amount;

      // Process daily spends
      dailySpends[date] = (dailySpends[date] || 0) + amount;

      // Process category spends
      categorySpends[category] = (categorySpends[category] || 0) + amount;

      // Calculate total and credit card spends
      totalAmount += amount;
      if (paymentMethod === "Credit Card") {
        creditCardAmount += amount;
      }
    });

    setTotalSpends(totalAmount);
    setCreditCardSpends(creditCardAmount);

    setProcessedData({
      weeklySpend,
      paymentMethods,
      dailySpends,
      categorySpends,
    });
  };

  const getWeek = (dateString: string) => {
    const date = new Date(dateString);
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor(
      (date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)
    );
    return `Week ${Math.ceil((date.getDay() + 1 + days) / 7)}`;
  };

  const isWithinLast30Days = (dateString: string) => {
    const today = new Date();
    const date = new Date(dateString);
    const diffDays = Math.floor(
      (today.getTime() - date.getTime()) / (24 * 60 * 60 * 1000)
    );
    return diffDays <= 30;
  };

  return (
    <div className={styles.home}>
      <div className={styles.generalstats}>
        <div className={styles.tabs}>
          <span>Total Spends: ${totalSpends.toFixed(2)}</span>
        </div>
        <div className={styles.tabs}>
          <span>Credit Card Spends: ${creditCardSpends.toFixed(2)}</span>
        </div>
      </div>

      {processedData && (
        <>
          <div className={styles.daystats}>
            <div className={styles.dailyexpenses}>
              <label className={styles.heading}>Weekly Expenses</label>
              <ExpenseLineChart data={expenseData} />
            </div>
            <div className={styles.paymentMethod}>
              <label className={styles.heading}>Payment Method</label>
              <ExpensePieChart
                data={processedData.paymentMethods}
                dataKey="amount"
                nameKey="paymentMethod"
              />
            </div>
          </div>
          <div className={styles.daystats}>
            <div className={styles.monthlyexpenses}>
              <label className={styles.heading}>Weekly Spends</label>
              <ExpenseBarChart data={processedData.weeklySpend} />
            </div>
            <div className={styles.categorySpends}>
              <label className={styles.heading}>Category Spending</label>
              <ExpensePieChart
                data={processedData.categorySpends}
                dataKey="amount"
                nameKey="category"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
