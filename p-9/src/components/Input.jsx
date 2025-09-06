import { useId, forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea, id, ...props },
  ref
) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const styles = {
    // outline: "none",
    backgroundColor: "#f0f0f0",
  };

  return (
    <p>
      <label htmlFor={inputId}>{label}</label>
      {textarea ? (
        <textarea ref={ref} id={inputId} {...props} style={styles} />
      ) : (
        <input ref={ref} id={inputId} {...props} style={styles} />
      )}
    </p>
  );
});

export default Input;
