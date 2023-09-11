interface ButtonProps {
  /**
   * @deprecated The prop primary will be remove in version 1.0. Use variant instead.
   */
  primary?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "large";
  label?: string;
}

export function Button({
  primary = false,
  variant = "primary",
  label = "Boop",
  size = "small",
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: primary || variant === "primary" ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
}
