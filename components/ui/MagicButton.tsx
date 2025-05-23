import React from "react";

type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses
}: MagicButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`p-[3px] relative ${otherClasses}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex items-center gap-2">
        {position === 'left' && icon}
        {title}
      </div>
    </button>
  );
};

export default MagicButton;