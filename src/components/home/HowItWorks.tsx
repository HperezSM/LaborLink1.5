import React from 'react';
import { ClipboardList, Users, MessageCircle, Wallet, Star, UserCircle, Search, Send, CheckCircle, TrendingUp } from 'lucide-react';
import { ProcessStep } from './ProcessStep';

const issuerSteps = [
  {
    title: 'Post a Task',
    description: 'Describe the task, set a deadline, and specify your budget. Include details like location and required skills.',
    icon: ClipboardList,
  },
  {
    title: 'Receive Bids',
    description: 'Workers bid on your task, and you can compare profiles, ratings, and prices.',
    icon: Users,
  },
  {
    title: 'Choose and Chat',
    description: 'Select the best worker and start chatting directly to finalize details.',
    icon: MessageCircle,
  },
  {
    title: 'Pay Securely',
    description: 'Payment is held securely until the job is completed and approved.',
    icon: Wallet,
  },
  {
    title: 'Rate and Review',
    description: 'Share your experience to build trust within the community.',
    icon: Star,
  },
] as const;

const workerSteps = [
  {
    title: 'Create Your Profile',
    description: 'Highlight your skills, past jobs, and set your rates.',
    icon: UserCircle,
  },
  {
    title: 'Browse Tasks',
    description: 'Use filters to find jobs that match your skills and preferences.',
    icon: Search,
  },
  {
    title: 'Bid and Connect',
    description: 'Send a bid with your price and message. Once selected, chat directly with the issuer.',
    icon: Send,
  },
  {
    title: 'Complete the Job',
    description: 'Deliver quality work and receive payments instantly after approval.',
    icon: CheckCircle,
  },
  {
    title: 'Build Your Reputation',
    description: 'Earn positive reviews to secure more jobs in the future.',
    icon: TrendingUp,
  },
] as const;

export const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'issuer' | 'worker'>('issuer');

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How LaborLink Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
            Simple steps to get started, whether you're looking for help or ready to work
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center space-x-4 border-b border-gray-200">
            <button
              className={`pb-4 px-4 text-lg font-medium ${
                activeTab === 'issuer'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('issuer')}
            >
              For Task Issuers
            </button>
            <button
              className={`pb-4 px-4 text-lg font-medium ${
                activeTab === 'worker'
                  ? 'border-b-2 border-blue-500 text-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('worker')}
            >
              For Workers
            </button>
          </div>

          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(activeTab === 'issuer' ? issuerSteps : workerSteps).map((step, index) => (
                <ProcessStep
                  key={step.title}
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};