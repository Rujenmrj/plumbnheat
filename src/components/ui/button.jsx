import React from "react";

export const Button = ({
  children,
  size = "md",
  variant = "primary",
  className = "",
  ...props
}) => {
  const base =
    "rounded-full font-semibold transition-all duration-200 focus:outline-none";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variants = {
    primary:
      "bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-400)] text-white",
    secondary:
      "bg-white text-[var(--color-primary-500)] border border-[var(--color-primary-400)] hover:bg-[var(--color-primary-100)]",
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
