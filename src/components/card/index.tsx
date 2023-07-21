import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  styles?: string;
}

export const Card: React.FC<CardProps> = ({ children, styles }) => {
  return <div className={`bg-white rounded-lg shadow-md p-4 ${styles}`}>{children}</div>;
};
