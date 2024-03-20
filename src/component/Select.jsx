const Select = ({
  label,
  id,
  name,
  value,
  onChange,
  options,
  defaultOption,
  error,
}) => {
  return (
    <div className="input-container">
      <label htmlFor="category">{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="error-message">{error}</span>
    </div>
  );
};

export default Select;
