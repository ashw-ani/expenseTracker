// src/components/ExpensePieChart.tsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface ExpensePieChartProps {
  data: Record<string, number>;
  dataKey: string; // New prop for dataKey
  nameKey: string; // New prop for nameKey
}

const COLORS = [
  "#0088FE", // Blue
  "#607D8B", // Blue Grey
  "#FFBB28", // Yellow
  "#F44336", // Red
  "#FF8042", // Orange
  "#C70039", // Red
  "#00C49F", // Green

  "#3F51B5", // Indigo
  "#FF5722", // Deep Orange
  "#2196F3", // Light Blue
  "#4CAF50", // Green
  "#FFC107", // Amber
  "#900C3F", // Dark Red
  "#795548", // Brown

  "#9E9E9E", // Grey
  "#E91E63", // Pink
  "#8BC34A", // Light Green
  "#FF9800", // Orange
  "#673AB7", // Deep Purple
];

const ExpensePieChart: React.FC<ExpensePieChartProps> = ({
  data,
  dataKey,
  nameKey,
}) => {
  // Convert the data object into an array of objects
  const chartData = Object.entries(data).map(([key, value]) => ({
    [nameKey]: key,
    [dataKey]: value,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart
        margin={{
          top: 20,
          right: 20,
          left: -10,
          bottom: 5,
        }}
      >
        <Tooltip />
        <Legend />
        <Pie
          data={chartData}
          dataKey={dataKey}
          nameKey={nameKey}
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={({ name }) => name}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpensePieChart;
