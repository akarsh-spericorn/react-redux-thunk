// components/Button.jsx
const Button = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded font-medium shadow-sm focus:outline-none focus:ring ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
