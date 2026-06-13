import React from "react";

export default function ActionBTN({
  children,
  onClick,
  size = "md",
  variant = "brand",
  className = "",
  type = "button",
  disabled = false,
  icon: Icon,
  iconSize = 16,
}) {
  const sizeStyles = {
    xs: " px-1 md:px-3 py-1 text-xs",
    sm: " px-1.5 md:px-4 py-2 text-sm",
    md: " px-3 md:px-6 py-2.5 text-sm",
    lg: " px-4 md:px-8 py-3.5 text-base",
  };

  const variantStyles = {
    brand: "bg-blue-600 text-white",
    brandMix: "bg-gradient-to-tr from-violet-900 to-indigo-500 text-white",
    primary: "bg-white text-slate-800 hover:bg-slate-50",
    secondary:
      "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50",
    outline: "bg-transparent border border-slate-100 text-white",
    ghost: "bg-transparent text-green-500",
    banner: "bg-gradient-to-r from-indigo-500 to-indigo-800 text-white",
    neutral: "bg-slate-950 text-white hover:bg-slate-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-md font-semibold cursor-pointer
        transition-all duration-200
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        ${className}
      `}
    >
      {Icon && <Icon size={iconSize} />}
      <span>{children}</span>
    </button>
  );
}

//Guide Doc:
// 1) How to use ?

{
  /* <ActionBTN 
  size="lg" 
  variant="brand">
  Book An Appointment
</ActionBTN>; */
}

// If you just want to redirect : instead of OnClick, use Link

{
  // good practice :
  /* import Link from "next/link";
    <Link href="/viewalltournament">
  <ActionBTN size="sm" variant="ghost">
    VIEW ALL
  </ActionBTN>
</Link>; */
}
