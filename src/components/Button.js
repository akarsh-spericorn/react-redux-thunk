import { FaSpinner } from 'react-icons/fa';

const Button = ({ children, className = '', loading, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded font-medium shadow-sm focus:outline-none focus:ring ${className}`}
      disabled={loading && props.disabled}
      {...props}
    >
      {loading ? <FaSpinner className="animate-spin mr-2 text-sm" /> : null}
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
