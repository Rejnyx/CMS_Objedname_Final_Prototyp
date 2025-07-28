import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'danger' | 'secondary' | 'ghost' | 'success';
  style?: React.CSSProperties;
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOut?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, onClick, className, variant = 'primary', style, onMouseOver, onMouseOut }: ButtonProps) => {
  const baseClasses = 'flex items-center justify-center px-4 py-3 font-semibold rounded-lg shadow-sm focus:outline-none transition-colors duration-200';

  const variantClasses = {
    primary: 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    danger: 'bg-[#E53935] text-white hover:bg-[#D32F2F] focus:ring-red-500',
    secondary: 'bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:ring-neutral-400',
    ghost: 'bg-transparent text-neutral-600 hover:bg-neutral-100 focus:ring-primary-500 shadow-none',
    success: 'bg-[#28A745] text-white hover:bg-[#218838] focus:ring-green-500',
  };

  const getVariantStyle = () => {
    if (variant === 'primary') {
      return { backgroundColor: '#626262' };
    }
    return {};
  };

  const combinedStyle = { ...getVariantStyle(), ...style };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={combinedStyle}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </button>
  );
};

export default Button;
