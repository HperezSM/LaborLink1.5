import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import { Task } from '@/types';
import { Button } from '@/components/ui/Button';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            {task.category}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2">{task.description}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="mr-1.5 h-4 w-4 flex-shrink-0" />
            {task.location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="mr-1.5 h-4 w-4 flex-shrink-0" />
            {new Date(task.deadline).toLocaleDateString()}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <DollarSign className="mr-1.5 h-4 w-4 flex-shrink-0" />
            ${task.budget}
          </div>
        </div>
        <div className="mt-6">
          <Button variant="primary" className="w-full">
            Submit Bid
          </Button>
        </div>
      </div>
    </div>
  );
};