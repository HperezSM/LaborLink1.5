import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { User, Settings, Star, Briefcase, DollarSign } from 'lucide-react';

export const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'worker' | 'issuer'>('worker');
  const isPremium = false; // This would come from your auth context

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <div className="relative h-32 bg-blue-600">
            <img
              className="h-32 w-full object-cover"
              src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Profile cover"
            />
          </div>
          <div className="relative px-4 pb-6 pt-16 sm:px-6 lg:px-8">
            <div className="absolute -top-12 left-4 sm:left-6 lg:left-8">
              <div className="flex">
                <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100 ring-4 ring-white">
                  <User className="h-full w-full p-4 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
                <p className="text-sm text-gray-500">Member since March 2024</p>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-sm font-medium text-gray-900">4.8/5 Rating</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Based on 24 reviews</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center">
                  <Briefcase className="h-5 w-5 text-blue-500" />
                  <span className="ml-2 text-sm font-medium text-gray-900">32 Jobs Completed</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Last job: 2 days ago</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <div className="flex items-center">
                  <DollarSign className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-sm font-medium text-gray-900">$2,450 Earned</span>
                </div>
                <p className="mt-1 text-xs text-gray-500">Lifetime earnings</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  <button
                    onClick={() => setActiveTab('worker')}
                    className={`${
                      activeTab === 'worker'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium`}
                  >
                    Worker Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('issuer')}
                    className={`${
                      activeTab === 'issuer'
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium`}
                  >
                    Task Issuer Profile
                  </button>
                </nav>
              </div>

              {activeTab === 'worker' && (
                <div className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Expertise</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {['Gardening', 'Landscaping', 'Lawn Care'].map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Portfolio</h3>
                      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {!isPremium && (
                          <div className="relative aspect-square">
                            <img
                              src="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                              alt="Work sample"
                              className="h-full w-full rounded-lg object-cover blur-sm"
                            />
                            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/50">
                              <Link
                                to="/premium"
                                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                              >
                                Upgrade to Premium
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Reviews</h3>
                      <div className="mt-2 space-y-4">
                        {!isPremium && (
                          <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-sm text-gray-500">
                              Upgrade to premium to view detailed reviews and ratings.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'issuer' && (
                <div className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">Posted Tasks</h3>
                      <div className="mt-2 space-y-4">
                        {/* Task history would go here */}
                        <div className="rounded-lg border border-gray-200 p-4">
                          <p className="text-sm text-gray-500">No tasks posted yet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};