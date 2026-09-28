const COORDONNEES = [
  { label: 'Téléphone', value: '+33 6 37 29 32 15', href: 'tel:+33637293215' },
  { label: 'Email', value: 'lmennessier99@gmail.com', href: 'mailto:lmennessier99@gmail.com' },
  { label: 'Localisation', value: 'Paris, France' },
];

export default function Contact() {
  return (
    <section className="pt-36 md:pt-44 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-x-16 gap-y-14">
        <div>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">Contact</h1>
          <p className="mt-6 text-lg text-muted">Disponible pour de nouvelles opportunités.</p>

          <dl className="mt-10 border-t border-rule">
            {COORDONNEES.map(({ label, value, href }) => (
              <div key={label} className="border-b border-rule py-4">
                <dt className="text-sm font-semibold text-muted">{label}</dt>
                <dd className="mt-1">
                  {href ? (
                    <a href={href} className="text-lg font-bold text-line hover:text-line-deep underline decoration-2 decoration-transparent hover:decoration-current transition-colors break-all">{value}</a>
                  ) : (
                    <span className="text-lg font-bold">{value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          className="space-y-5 bg-station border border-rule rounded-lg p-6 md:p-10"
          action="https://formspree.io/f/xwvnoygn"
          method="POST"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Nom" htmlFor="nom">
              {/* name OBLIGATOIRE pour Formspree */}
              <input id="nom" type="text" name="nom" autoComplete="name" required className="field" />
            </Field>
            <Field label="Email" htmlFor="email">
              <input id="email" type="email" name="email" autoComplete="email" required className="field" />
            </Field>
          </div>

          <Field label="Sujet" htmlFor="sujet">
            <input id="sujet" type="text" name="sujet" required className="field" />
          </Field>

          <Field label="Message" htmlFor="message">
            <textarea id="message" name="message" rows="6" required className="field resize-y" />
          </Field>

          <button type="submit" className="btn btn-line w-full md:w-auto justify-center">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="block text-sm font-bold">{label}</label>
      {children}
    </div>
  );
}
