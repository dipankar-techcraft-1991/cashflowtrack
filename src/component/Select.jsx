const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  categories,
  hiddenOption,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="category">{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        <option value="" hidden>
          {hiddenOption}
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <span className="error-message">{error}</span>
    </div>
  );
};

export default Select;
