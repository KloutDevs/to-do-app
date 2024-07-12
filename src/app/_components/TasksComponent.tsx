import React from "react";

interface TaskListProps {
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <div className="max-w-xs bg-gray-800 shadow-md overflow-hidden">
      <div className="px-4 py-2 bg-gray-700 text-white text-xl font-bold">Tareas</div>
      <ul className="divide-y divide-gray-600">
        {tasks.map((task, index) => (
          <li key={index} className="px-4 py-3">
            <span className="text-white">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
