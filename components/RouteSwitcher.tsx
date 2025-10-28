
import React, { useState, useRef, useEffect } from 'react';
import type { AppRoute } from '../types';
import { ChevronDownIcon } from './Icons';

interface RouteSwitcherProps {
  routes: AppRoute[];
  selectedRoute: AppRoute;
  onSelect: (route: AppRoute) => void;
}

const RouteSwitcher: React.FC<RouteSwitcherProps> = ({ routes, selectedRoute, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const handleSelect = (route: AppRoute) => {
    onSelect(route);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={wrapperRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-zinc-700 shadow-sm px-4 py-2 bg-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-800 focus:ring-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedRoute.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-zinc-800 ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 max-h-60 overflow-y-auto" role="menu" aria-orientation="vertical">
            {routes.map((route) => (
              <a
                key={route.path}
                href="#"
                className={`block px-4 py-2 text-sm ${
                  selectedRoute.path === route.path
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-300 hover:bg-zinc-700 hover:text-white'
                }`}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  handleSelect(route);
                }}
              >
                {route.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteSwitcher;
