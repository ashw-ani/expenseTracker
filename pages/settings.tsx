// src/pages/SettingsPage.tsx
import React, { useState, useEffect } from "react";
import styles from "@/styles/Settings.module.css";

// Define the shape of the settings state
interface Settings {
  dateRange: string;
  paymentMethods: string[];
  categories: string[];
}

const defaultSettings: Settings = {
  dateRange: "last30days",
  paymentMethods: [],
  categories: [],
};

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings>(defaultSettings);

  useEffect(() => {
    // Load settings from local storage or other source
    const savedSettings = localStorage.getItem("userSettings");
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: checked
          ? [...prevSettings[name], value]
          : prevSettings[name].filter((item: string) => item !== value),
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    // Save settings to local storage or other source
    localStorage.setItem("userSettings", JSON.stringify(settings));
  };

  return (
    <div className={styles.settingsPage}>
      <h2>Dashboard Settings</h2>
      <div className={styles.settingsSection}>
        <label>Date Range:</label>
        <select
          name="dateRange"
          value={settings.dateRange}
          onChange={handleChange}
        >
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
          <option value="custom">Custom</option>
        </select>
      </div>
      <div className={styles.settingsSection}>
        <label>Payment Methods:</label>
        <label>
          <input
            type="checkbox"
            name="paymentMethods"
            value="Credit Card"
            checked={settings.paymentMethods.includes("Credit Card")}
            onChange={handleChange}
          />
          Credit Card
        </label>
        <label>
          <input
            type="checkbox"
            name="paymentMethods"
            value="Debit Card"
            checked={settings.paymentMethods.includes("Debit Card")}
            onChange={handleChange}
          />
          Debit Card
        </label>
        <label>
          <input
            type="checkbox"
            name="paymentMethods"
            value="Cash"
            checked={settings.paymentMethods.includes("Cash")}
            onChange={handleChange}
          />
          Cash
        </label>
      </div>
      <div className={styles.settingsSection}>
        <label>Categories:</label>
        <label>
          <input
            type="checkbox"
            name="categories"
            value="Groceries"
            checked={settings.categories.includes("Groceries")}
            onChange={handleChange}
          />
          Groceries
        </label>
        <label>
          <input
            type="checkbox"
            name="categories"
            value="Entertainment"
            checked={settings.categories.includes("Entertainment")}
            onChange={handleChange}
          />
          Entertainment
        </label>
        {/* Add more categories as needed */}
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPage;
