import ExpenseForm from "./component/ExpenseForm";
import ExpenseTable from "./component/ExpenseTable";
import "./App.css";
import { useState } from "react";
import expenseData from "../expenseData";

const App = () => {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTable expenses={expenses} />
        </div>
      </main>
    </>
  );
};

export default App;
