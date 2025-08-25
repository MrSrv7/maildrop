import ThemeToggle from '@/components/ThemeToggle';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header with theme toggle */}
      <header className="flex justify-between items-center p-6">
        <h1 className="text-xl font-semibold">Maildrop</h1>
        <ThemeToggle />
      </header>
      
      {/* Main content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <span className="text-base text-gray-600 dark:text-gray-400 font-normal font-mono">
          Modern email client coming soon...
        </span>
      </div>
    </div>
  );
};

export default Homepage