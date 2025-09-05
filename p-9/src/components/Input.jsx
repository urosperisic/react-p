import { useId } from "react";

export default function Input({ label, textarea, id, ...props }) {
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
        <textarea id={inputId} {...props} style={styles} />
      ) : (
        <input id={inputId} {...props} style={styles} />
      )}
    </p>
  );
}
