import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ name, description, icon: Icon }) => {
  return (
    <div className="relative">
      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{name}</p>
      <p className="mt-2 ml-16 text-base text-gray-500">{description}</p>
    </div>
  );
};