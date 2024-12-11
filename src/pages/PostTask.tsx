import React from 'react';
import { PostTaskForm } from '@/components/tasks/PostTaskForm';

export const PostTask: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-white p-8 shadow">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Post a New Task</h1>
            <p className="mt-2 text-gray-600">
              Fill out the form below to post your task and start receiving bids from workers.
            </p>
          </div>
          <PostTaskForm />
        </div>
      </div>
    </div>
  );
};