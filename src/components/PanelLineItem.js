// components/Panel.jsx
import { useState } from 'react';
import { FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import IconButton from './IconButton';

const PanelLineItem = ({ children, ...item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-800">{item.name}</span>
        <div className="flex space-x-2">
          <IconButton icon={<FaTrash />} />
          <IconButton
            icon={expanded ? <FaChevronUp /> : <FaChevronDown />}
            onClick={() => setExpanded(!expanded)}
          />
        </div>
      </div>
      {expanded && children}
    </div>
  );
};

export default PanelLineItem;
