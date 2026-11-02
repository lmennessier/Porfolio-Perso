// Gabarit commun aux pages légales : titre de page, sections à filet, liens en violet de ligne.
export function LegalPage({ title, updated, children }) {
  return (
    <section className="pt-36 md:pt-44 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-[-0.035em] leading-[0.95]">{title}</h1>
        <p className="mt-6 text-sm font-semibold text-muted">Mise à jour le {updated}</p>

        <div className="mt-10 max-w-[65ch] border-t border-rule [&_a]:font-bold [&_a]:text-line [&_a]:underline [&_a]:decoration-2 [&_a:hover]:text-line-deep">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section className="border-b border-rule py-8">
      <h2 className="text-xl font-extrabold tracking-tight">{title}</h2>
      <div className="mt-3 space-y-3 text-lg text-muted leading-relaxed">{children}</div>
    </section>
  );
}
