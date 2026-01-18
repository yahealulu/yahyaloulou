import { contactLinks } from '../../data/contact';

const ContactSection = () => {
  return (
    <>
      <h2>contact --info</h2>
      <p>$ cat contact.json</p>
      <p>{'{'}</p>
      {contactLinks.map((link, index) => (
        <p key={link.type}>
          <a 
            href={link.url} 
            target={link.type === 'email' ? undefined : '_blank'}
            rel={link.type !== 'email' ? 'noopener noreferrer' : undefined}
            style={{ color: '#8892b0', textDecoration: 'none' }}
          >
            {link.displayText}
          </a>
          {index < contactLinks.length - 1 ? ',' : ''}
        </p>
      ))}
      <p>{'}'}</p>
    </>
  );
};

export default ContactSection;

