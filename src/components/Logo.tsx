import { Link } from 'react-router-dom';

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo = ({ size = 48, className = "" }: LogoProps) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-2 hover:scale-105 transition-transform ${className}`}
    >
      <img 
        src="/logos/logo_brown.svg" 
        alt="Virtual Assistant Pro Logo" 
        height={size}
        style={{ height: `${size}px` }}
      />
    </Link>
  );
};

export default Logo;