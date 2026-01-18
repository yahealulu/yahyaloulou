import { contactLinks } from '../../../data/contact';

const getContactIcon = (type: string) => {
  switch (type) {
    case 'email':
      return '📧';
    case 'github':
      return '💻';
    case 'linkedin':
      return '💼';
    case 'whatsapp':
      return '💬';
    default:
      return '📱';
  }
};

const MobileContactSection = () => {
  return (
    <div className="mobile-section">
      <div className="mobile-card">
        <h2 className="mobile-card-title">Get In Touch</h2>
        <p className="mobile-card-text">
          Feel free to reach out through any of these channels
        </p>
      </div>

      <div className="mobile-contact-grid">
        {contactLinks.map((link) => (
          <a
            key={link.type}
            href={link.url}
            target={link.type === 'email' ? undefined : '_blank'}
            rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
            className="mobile-contact-card"
          >
            <div className="mobile-contact-icon">{getContactIcon(link.type)}</div>
            <div className="mobile-contact-info">
              <h3 className="mobile-contact-label">{link.label}</h3>
              <p className="mobile-contact-value">
                {link.type === 'email' 
                  ? 'yahea.loulou@gmail.com'
                  : link.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
                }
              </p>
            </div>
            <div className="mobile-contact-arrow">→</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileContactSection;
