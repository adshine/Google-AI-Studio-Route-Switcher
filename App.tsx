
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PreviewPanel from './components/PreviewPanel';
import IframeApp from './iframe-content/IframeApp';
import { APP_ROUTES } from './constants';
import type { AppRoute } from './types';

const App: React.FC = () => {
  const isIframeContent = new URLSearchParams(window.location.search).get('iframe') === 'true';

  const [currentRoute, setCurrentRoute] = useState<AppRoute>(APP_ROUTES[0]);

  const handleRouteChange = (route: AppRoute) => {
    setCurrentRoute(route);
  };

  if (isIframeContent) {
    return <IframeApp />;
  }

  return (
    <div className="flex h-screen w-full bg-zinc-900 text-zinc-300 font-sans">
      <Sidebar />
      <main className="flex flex-1 flex-col">
        <div className="border-b border-zinc-700">
          {/* Top bar can be added here if needed */}
        </div>
        <PreviewPanel
          routes={APP_ROUTES}
          currentRoute={currentRoute}
          onRouteSelect={handleRouteChange}
        />
      </main>
    </div>
  );
};

export default App;
