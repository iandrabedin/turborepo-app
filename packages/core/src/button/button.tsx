interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: "small" | "large";
  label?: string;
}

export function Button({
  variant = 'primary',
  label = "Boop",
  size = "small",
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: variant === 'primary' ? "green" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
}
