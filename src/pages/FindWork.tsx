import React from 'react';
import { Search, Filter } from 'lucide-react';
import { TaskList } from '@/components/tasks/TaskList';

// Mock data for demonstration
const mockTasks = [
  {
    id: '1',
    title: 'Garden Maintenance',
    description: 'Need help with weekly garden maintenance including mowing, weeding, and pruning.',
    category: 'Gardening',
    location: 'Miami, FL',
    budget: 150,
    deadline: '2024-04-01',
    status: 'open',
    issuerId: 'user1',
    createdAt: '2024-03-15',
  },
  {
    id: '2',
    title: 'House Painting',
    description: 'Looking for experienced painter to paint 3-bedroom house interior.',
    category: 'Painting',
    location: 'Miami, FL',
    budget: 800,
    deadline: '2024-04-15',
    status: 'open',
    issuerId: 'user2',
    createdAt: '2024-03-16',
  },
  // Add more mock tasks as needed
] as const;

export const FindWork: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Find Work</h1>
          <p className="mt-2 text-gray-600">
            Browse available tasks and submit your bids to start earning.
          </p>
        </div>

        <div className="mb-8 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex-1">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-blue-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="Search tasks..."
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">All Categories</option>
              <option value="gardening">Gardening</option>
              <option value="cleaning">Cleaning</option>
              <option value="painting">Painting</option>
              <option value="moving">Moving</option>
              <option value="repair">Repair</option>
            </select>

            <button className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </button>
          </div>
        </div>

        <TaskList tasks={mockTasks} />
      </div>
    </div>
  );
};