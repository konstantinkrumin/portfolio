import React from 'react';

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-400 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold">HOME</span>
        <span className="text-xl font-semibold">EXPERIENCE</span>
        <span className="text-xl font-semibold">ABOUT ME</span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm">EN/RU</span>
        <span className="text-sm">LI/DR</span>
      </div>
    </nav>
  );
};
