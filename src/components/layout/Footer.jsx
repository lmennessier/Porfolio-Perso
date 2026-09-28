import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-rule px-6">
      <div className="max-w-6xl mx-auto py-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>© {year} L Mennessier. Tous droits réservés.</p>
        <SocialLinks size={20} />
      </div>
    </footer>
  );
}
