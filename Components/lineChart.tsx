import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ExpenseData {
  date: string;
  category: string;
  amount: number;
}

interface ExpenseLineChartProps {
  data: ExpenseData[];
}

const ExpenseLineChart: React.FC<ExpenseLineChartProps> = ({ data }) => {
  const CustomTooltip: React.FC<{
    active?: boolean;
    payload?: any;
    label?: string;
  }> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const { date, category, amount } = payload[0].payload;
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <p>{`Date: ${date}`}</p>
          <p>{`Category: ${category}`}</p>
          <p>{`Amount: $${amount}`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 5,
          left: -35,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ExpenseLineChart;
