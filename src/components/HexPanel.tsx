import { ReactNode, useEffect, useRef, useState } from 'react';
import TerminalButtons from './TerminalButtons';

interface HexPanelProps {
  id: string;
  isActive: boolean;
  children: ReactNode;
}

const HexPanel = ({ id, isActive, children }: HexPanelProps) => {
  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      // Small delay for entrance animation
      const timer = setTimeout(() => {
        setContentStyle({ transform: 'translateY(0)' });
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setContentStyle({ transform: 'translateY(-100%)' });
    }
  }, [isActive]);

  return (
    <div
      ref={panelRef}
      className={`hex-panel ${isActive ? 'active' : ''}`}
      id={id}
      style={{ opacity: isActive ? 1 : 0 }}
    >
      <TerminalButtons />
      <div className="hex-content" style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default HexPanel;

