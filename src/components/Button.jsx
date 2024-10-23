export default function Button({ children, size, className = "" }) {
  const sizeButtons = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-5 py-3",
    lg: "text-lg px-8 py-4",
  };
  return (
    <button
      className={`text-textBlack rounded-full bg-white ${sizeButtons[size]} ${className}`}
    >
      {children}
    </button>
  );
}
