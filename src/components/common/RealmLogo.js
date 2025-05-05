"use client";

export const RealmLogo = ({ isDarkMode }) => {
    return (
      <div className="flex items-center gap-2">
        <div 
          className={`
            w-3 h-3 
            rounded-full 
            border 
            ${isDarkMode ? 'border-white' : 'border-black'}
          `}
        />
        <span className="font-medium text-base">Realm</span>
      </div>
    );
  };