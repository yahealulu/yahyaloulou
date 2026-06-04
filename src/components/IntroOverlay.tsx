import { aboutProfile } from '../data/about';

interface IntroOverlayProps {
  fadeOut: boolean;
}

const IntroOverlay = ({ fadeOut }: IntroOverlayProps) => {
  return (
    <div className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className="intro-name">{aboutProfile.name}</div>
        <div className="intro-title">{aboutProfile.title}</div>
      </div>
    </div>
  );
};

export default IntroOverlay;
