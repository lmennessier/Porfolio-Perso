import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const LINKS = [
  { href: 'https://github.com/lmennessier', label: 'GitHub', Icon: AiFillGithub },
  { href: 'https://www.linkedin.com/in/loic-mennessier', label: 'LinkedIn', Icon: AiFillLinkedin },
  { href: 'https://www.instagram.com/loic.menn/', label: 'Instagram', Icon: AiFillInstagram },
];

export default function SocialLinks({ size = 24, className = '' }) {
  return (
    <ul className={`flex items-center gap-5 ${className}`}>
      {LINKS.map(({ href, label, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="block text-ink hover:text-line transition-colors"
          >
            <Icon size={size} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
