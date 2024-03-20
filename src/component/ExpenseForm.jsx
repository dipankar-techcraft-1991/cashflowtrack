import { useState } from "react";
import Input from "./Input";
import Select from "./Select";

const ExpenseForm = ({ setExpenses }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const categories = ["Grocery", "Clothes", "Bills", "Education", "Medicine"];

  const validate = (formData) => {
    const errorsData = {};
    if (!formData.title) {
      errorsData.title = "Please enter title";
    }

    if (!formData.category) {
      errorsData.category = "Please select category";
    }

    if (!formData.amount) {
      errorsData.amount = "Please enter amount";
    }

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
    setErrors({});
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label="Title"
        id="title"
        name="title"
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />
      <Select
        label="Category"
        id="category"
        name="category"
        value={expense.category}
        onChange={handleChange}
        categories={categories}
        hiddenOption="Select Category"
        error={errors.category}
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        error={errors.amount}
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
