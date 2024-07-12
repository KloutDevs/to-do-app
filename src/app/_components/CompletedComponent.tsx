import React from "react";

interface completedListProps {
  completeds: string[];
}

const completedList: React.FC<completedListProps> = ({ completeds }) => {
  return (
    <div className="max-w-xs bg-gray-800 shadow-md overflow-hidden">
      <div className="px-4 py-2 bg-gray-700 text-white text-xl font-bold">Tareas Completadas</div>
      <ul className="divide-y divide-gray-600">
        {completeds.map((completed, index) => (
          <li key={index} className="px-4 py-3">
            <span className="text-white">{completed}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default completedList;
