export interface User {
  id: string;
  name: string;
  email: string;
  role: 'issuer' | 'worker' | 'admin';
  rating: number;
  completedTasks: number;
  profileImage?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  location: string;
  budget: number;
  deadline: string;
  status: 'open' | 'in-progress' | 'completed';
  issuerId: string;
  workerId?: string;
  createdAt: string;
}

export interface Bid {
  id: string;
  taskId: string;
  workerId: string;
  amount: number;
  proposal: string;
  status: 'pending' | 'accepted' | 'rejected';
  createdAt: string;
}