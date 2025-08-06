// components/Panel.jsx
import { useState } from 'react';
import { FaTrash, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import IconButton from './IconButton';

const PanelLineItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border rounded p-4 shadow-sm bg-white">
      {/* User header */}
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

      {/* Albums when expanded */}
      {expanded && (
        <div className="mt-4 pl-4 space-y-2">
          {item.childItems.map((childItem) => (
            <div
              key={childItem.id}
              className="flex justify-between items-center bg-gray-50 border rounded px-4 py-2 shadow-sm"
            >
              <span className="text-sm font-medium text-gray-800">
                {childItem.title}
              </span>
              <IconButton icon={<FaTrash />} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PanelLineItem;
