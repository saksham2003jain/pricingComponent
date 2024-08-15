// src/Pricing.jsx
import React, { useState } from "react";
import "./index.css"; // Ensure this file exists in the src folder

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen flex flex-col items-center py-10`}
    >
      <button
        className={`mb-4 px-4 py-2 rounded ${
          darkMode
            ? "bg-blue-700 hover:bg-blue-800"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white focus:outline-none`}
        onClick={toggleDarkMode}
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      <div
        className={`max-w-xl w-full p-6 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } rounded-lg shadow-md`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-blue-600">
          API Pricing
        </h2>
        <p className="mb-4 text-center">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>

        <table
          className={`min-w-full ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900"
          } rounded-md`}
        >
          <thead>
            <tr
              className={`bg-blue-500 ${
                darkMode ? "text-gray-200" : "text-gray-900"
              }`}
            >
              <th className="px-4 py-2">API</th>
              <th className="px-4 py-2">Model</th>
              <th className="px-4 py-2">Price per 1K Tokens</th>
            </tr>
          </thead>
          <tbody>
            <tr className={`${darkMode ? "bg-gray-600" : "bg-white"} border-b`}>
              <td className="border px-4 py-2">OpenAI</td>
              <td className="border px-4 py-2">GPT-3.5</td>
              <td className="border px-4 py-2">$0.002</td>
            </tr>
            <tr
              className={`${darkMode ? "bg-gray-600" : "bg-gray-50"} border-b`}
            >
              <td className="border px-4 py-2">OpenAI</td>
              <td className="border px-4 py-2">GPT-4</td>
              <td className="border px-4 py-2">$0.03</td>
            </tr>
            <tr className={`${darkMode ? "bg-gray-600" : "bg-white"} border-b`}>
              <td className="border px-4 py-2">Together AI</td>
              <td className="border px-4 py-2">Llama-2-70b</td>
              <td className="border px-4 py-2">$0.0008</td>
            </tr>
            <tr
              className={`${darkMode ? "bg-gray-600" : "bg-gray-50"} border-b`}
            >
              <td className="border px-4 py-2">Together AI</td>
              <td className="border px-4 py-2">Llama-2-13b</td>
              <td className="border px-4 py-2">$0.0006</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2 text-blue-600">
            Token Estimation
          </h3>
          <p className="mb-4">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-blue-600">Billing</h3>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
