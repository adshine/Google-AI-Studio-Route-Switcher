
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { APP_ROUTES } from '../constants';

const IframeApp: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col h-screen font-sans bg-gray-50 text-gray-800">
        <header className="bg-white shadow-md">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-gray-800">MyWebsite</Link>
                    <div className="hidden md:flex items-center space-x-1">
                        {APP_ROUTES.map(route => (
                            <NavLink key={route.path} to={route.path}>{route.name}</NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
        <main className="flex-grow container mx-auto p-6">
          <Routes>
            {APP_ROUTES.map(route => (
                <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </main>
        <footer className="bg-gray-200 text-center p-4 text-sm text-gray-600">
            © 2024 MyWebsite. All rights reserved.
        </footer>
      </div>
    </HashRouter>
  );
};

const NavLink: React.FC<{ to: string, children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link 
            to={to} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
        >
            {children}
        </Link>
    )
}


export default IframeApp;
