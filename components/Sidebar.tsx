import React from 'react';
import { SparkleIcon, MicrophoneIcon, PlusCircleIcon, ArrowUpCircleIcon, PencilIcon, SettingsIcon } from './Icons';

const SuggestionButton: React.FC<{ children: React.ReactNode, active?: boolean }> = ({ children, active }) => {
    const baseClasses = "rounded-full text-sm px-4 py-2 transition-colors duration-200";
    const activeClasses = "bg-zinc-700 text-white";
    const inactiveClasses = "bg-zinc-800 text-zinc-300 hover:bg-zinc-700";
    return (
        <button className={`${baseClasses} ${active ? activeClasses : inactiveClasses}`}>
            {children}
        </button>
    );
};

const Sidebar: React.FC = () => {
  return (
    <aside className="w-80 bg-zinc-800/50 flex flex-col p-4 border-r border-zinc-700">
      <header className="flex items-center justify-between mb-8 h-8">
        <h1 className="text-white font-semibold">Code assistant</h1>
        <button className="text-zinc-400 hover:text-white">
            <SettingsIcon className="w-5 h-5" />
        </button>
      </header>

      <div className="flex-grow flex flex-col items-center justify-center text-center text-zinc-400">
        <div className="w-20 h-20 border border-zinc-600 rounded-lg flex items-center justify-center mb-4">
            <PencilIcon className="w-10 h-10 text-zinc-600" />
        </div>
        <p className="mb-6 text-sm">
          Add new features or easily modify this app with a prompt or the suggestions below
        </p>

        <div className="grid grid-cols-2 gap-2 w-full">
            <SuggestionButton active>
                <span className="flex items-center justify-center gap-2">
                    <SparkleIcon className="w-4 h-4" /> AI Features
                </span>
            </SuggestionButton>
            <SuggestionButton>Add campaign details</SuggestionButton>
            <SuggestionButton>Improve form validation</SuggestionButton>
            <SuggestionButton>Add campaign templates</SuggestionButton>
            <SuggestionButton>Save draft campaign</SuggestionButton>
            <SuggestionButton>Visual campaign preview</SuggestionButton>
        </div>
      </div>

      <div className="mt-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Make changes, add new features, ask for anything"
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg py-3 pl-4 pr-10 text-sm placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center justify-between mt-2 px-2">
            <div className="flex items-center space-x-2">
                <button className="text-zinc-400 hover:text-white"><MicrophoneIcon className="w-5 h-5" /></button>
                <button className="text-zinc-400 hover:text-white"><PlusCircleIcon className="w-6 h-6" /></button>
            </div>
            <button className="text-zinc-400 hover:text-white"><ArrowUpCircleIcon className="w-7 h-7" /></button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;