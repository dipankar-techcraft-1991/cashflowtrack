import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import expenseData from "../expenseData";
import "./App.css";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");

  const filteredData = expenses.filter((expense) => {
    return expense.category.toLowerCase().includes(category);
  });

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable
            expenses={expenses}
            filteredData={filteredData}
            setCategory={setCategory}
          />
        </div>
      </main>
    </>
  );
};

export default App;
