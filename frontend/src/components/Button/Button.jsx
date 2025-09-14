export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-blue-600 text-white px-6 py-3 rounded-lg
                  font-medium hover:bg-blue-700 transition-colors
                  focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
