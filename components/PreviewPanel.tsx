import React from 'react';
import type { AppRoute } from '../types';
import RouteSwitcher from './RouteSwitcher';
import { ExpandIcon, DevicePhoneIcon } from './Icons';

interface PreviewPanelProps {
  routes: AppRoute[];
  currentRoute: AppRoute;
  onRouteSelect: (route: AppRoute) => void;
}

const PreviewPanel: React.FC<PreviewPanelProps> = ({ routes, currentRoute, onRouteSelect }) => {
  const iframeSrc = `${window.location.origin}${window.location.pathname}?iframe=true#${currentRoute.path}`;

  return (
    <div className="flex-1 flex flex-col bg-zinc-900">
      <header className="flex items-center p-2 border-b border-zinc-700 text-sm h-[57px]">
        <div className="flex-1">
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1.5 rounded-md bg-zinc-700 text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Preview
            </button>
            <button className="px-3 py-1.5 rounded-md hover:bg-zinc-700 text-zinc-300">
              Code
            </button>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <RouteSwitcher
            routes={routes}
            selectedRoute={currentRoute}
            onSelect={onRouteSelect}
          />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
            <button className="flex items-center space-x-1.5 text-zinc-300 hover:bg-zinc-700 px-3 py-1.5 rounded-md">
                <ExpandIcon className="w-4 h-4" />
                <span>Full screen</span>
            </button>
             <button className="flex items-center space-x-1.5 text-zinc-300 hover:bg-zinc-700 px-3 py-1.5 rounded-md">
                <DevicePhoneIcon className="w-4 h-4" />
                <span>Device</span>
            </button>
        </div>
      </header>

      <div className="flex-1 p-4 bg-white">
        <iframe
          key={iframeSrc}
          src={iframeSrc}
          title="App Preview"
          className="w-full h-full border-2 border-zinc-900 rounded-lg bg-white"
        />
      </div>
       <footer className="p-2 border-t border-zinc-700 text-xs text-zinc-500 flex justify-end items-center">
        <div className="flex items-center gap-2 px-2 py-1 bg-zinc-800 rounded-md">
            <span className="text-red-500">ⓧ</span>
            <span>1</span>
            <span className="text-zinc-400">^</span>
        </div>
      </footer>
    </div>
  );
};

export default PreviewPanel;