import { Link } from 'react-router-dom';

interface LogoProps {
  size?: number;
  className?: string;
  variant?: 'brown' | 'white' | 'black' | 'yellow';
  linkable?: boolean;
}

const Logo = ({ size = 48, className = "", variant = 'brown', linkable = true }: LogoProps) => {
  const logoSrc = `/logos/logo_${variant}.svg`;
  
  const logoElement = (
    <img 
      src={logoSrc}
      alt="Virtual Assistant Pro Logo" 
      height={size}
      style={{ height: `${size}px` }}
      className={className}
    />
  );

  if (!linkable) {
    return logoElement;
  }

  return (
    <Link 
      to="/" 
      className="hover:scale-105 transition-transform inline-block"
    >
      {logoElement}
    </Link>
  );
};

export default Logo;