import { FrameworkType } from '../../types';

interface FrameworkTabsProps {
  activeFramework: FrameworkType;
  onFrameworkChange: (framework: FrameworkType) => void;
}

const FrameworkTabs = ({ activeFramework, onFrameworkChange }: FrameworkTabsProps) => {
  return (
    <div className="framework-tabs">
      <button
        className={`framework-tab ${activeFramework === 'react' ? 'active' : ''}`}
        data-framework="react"
        onClick={() => onFrameworkChange('react')}
      >
        React.js
      </button>
      <button
        className={`framework-tab ${activeFramework === 'nextjs' ? 'active' : ''}`}
        data-framework="nextjs"
        onClick={() => onFrameworkChange('nextjs')}
      >
        Next.js && javascript
      </button>
    </div>
  );
};

export default FrameworkTabs;

