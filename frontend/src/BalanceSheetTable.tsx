// src/components/BalanceSheet.tsx

import React, { useEffect, useState } from "react";
import axios from "axios";

// Define types for the balance sheet data
interface Account {
  accountId: string;
  accountName: string;
  amount: number;
}

interface BalanceSheetData {
  balanceSheet: Account[];
}

const BalanceSheet: React.FC = () => {
  const [data, setData] = useState<BalanceSheetData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const API_URL = "http://localhost:3000/api.xro/2.0/Reports/BalanceSheet";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (err) {
        console.error(err); // Log the error for debugging
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  // Conditional rendering based on state
  if (error) return <div>{error}</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>Balance Sheet</h1>
      <table>
        <thead>
          <tr>
            <th>Account</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.balanceSheet.map((item) => (
            <tr key={item.accountId}>
              <td>{item.accountName}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceSheet;
