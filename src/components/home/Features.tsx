import React from 'react';
import { Shield, Clock, DollarSign } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    name: 'Secure Payments',
    description: 'All payments are held in escrow until the job is completed to your satisfaction.',
    icon: Shield,
  },
  {
    name: 'Quick Turnaround',
    description: 'Find available workers in your area within hours, not days.',
    icon: Clock,
  },
  {
    name: 'Competitive Pricing',
    description: 'Compare bids from multiple workers to find the best value for your project.',
    icon: DollarSign,
  },
] as const;

export const Features: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-lg font-semibold text-blue-600">Why Choose LaborLink</h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            A better way to find skilled labor
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We make it easy to connect with reliable workers and get your tasks done efficiently.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {features.map((feature) => (
              <FeatureCard
                key={feature.name}
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};