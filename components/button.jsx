"use client"

export default function Button({ children, variant = 'solid', className = '', ...props }) {
  const baseStyles =
    'px-6 py-2 rounded transition-all duration-300 text-base sm:text-lg cursor-pointer w-full';

  const variants = {
    solid:
      'bg-[var(--foreground)] text-[var(--background)] hover:opacity-80 active:scale-95',
    ghost:
      'bg-transparent text-[var(--foreground)] border border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] active:scale-95',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
