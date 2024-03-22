import { useState } from "react";
import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import expenseData from "../expenseData";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenses={setExpenses} />
        <ExpenseTable expenses={expenses} setExpenses={setExpenses} />
      </div>
    </main>
  );
}

export default App;
