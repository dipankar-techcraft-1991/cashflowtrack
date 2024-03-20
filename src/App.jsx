import ExpenseForm from "./component/ExpenseForm";
import "./App.css";
import ExpenseTable from "./component/ExpenseTable";

const App = () => {
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm />
          <ExpenseTable />
        </div>
      </main>
    </>
  );
};

export default App;
