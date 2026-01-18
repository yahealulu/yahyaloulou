interface IntroOverlayProps {
  fadeOut: boolean;
}

const IntroOverlay = ({ fadeOut }: IntroOverlayProps) => {
  return (
    <div className={`intro-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="intro-content">
        <div className="intro-name">Yahya LouLou</div>
        <div className="intro-title">Web Developer</div>
      </div>
    </div>
  );
};

export default IntroOverlay;

