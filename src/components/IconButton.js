// components/IconButton.jsx
import { IconContext } from 'react-icons';

const IconButton = ({ icon, onClick, color = 'black', size = '1.2em' }) => (
  <IconContext.Provider value={{ color, size }}>
    <button className="button is-white is-small" onClick={onClick}>
      {icon}
    </button>
  </IconContext.Provider>
);

export default IconButton;
