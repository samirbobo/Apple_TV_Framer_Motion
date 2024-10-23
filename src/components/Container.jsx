export default function Container({ children, className }) {
  return (
    <div className={`px-6 max-w-[980px] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
}
