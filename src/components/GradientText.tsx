
interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientText = ({ 
  children, 
  className = "", 
  gradient = "from-blue-600 via-purple-600 to-indigo-600" 
}: GradientTextProps) => {
  return (
    <span 
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
};
