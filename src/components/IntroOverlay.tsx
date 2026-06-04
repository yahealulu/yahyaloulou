import { aboutProfile } from '../data/about';

interface IntroOverlayProps {
  fadeOut: boolean;
}

const IntroOverlay = ({ fadeOut }: IntroOverlayProps) => {
  return (
    <div className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className="intro-name">{aboutProfile.name}</div>
        <div className="intro-titles">
          {aboutProfile.introLines.map((line) => (
            <div key={line} className="intro-title">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
