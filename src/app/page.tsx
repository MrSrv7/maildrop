import ThemeToggle from '@/components/ThemeToggle';
import { Mail } from 'lucide-react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header with theme toggle */}
      <header className="flex justify-between items-center p-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Maildrop</h1>
        </div>
        <ThemeToggle />
      </header>
      
      {/* Main content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <span className="text-base text-slate-600 dark:text-slate-400 font-normal font-mono">
          Modern email client coming soon...
        </span>
      </div>
    </div>
  );
};

export default Homepage