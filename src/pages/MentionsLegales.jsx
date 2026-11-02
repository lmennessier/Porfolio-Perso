import { Link } from 'react-router-dom';
import { LegalPage, LegalSection } from '../components/layout/LegalPage';

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" updated="2 novembre 2026">
      <LegalSection title="Éditeur du site">
        <p>
          Ce site est le portfolio personnel de Loïc Mennessier, particulier, édité à titre non professionnel.
        </p>
        <p>
          Contact : <a href="mailto:lmennessier99@gmail.com">lmennessier99@gmail.com</a>
        </p>
        <p>Directeur de la publication : Loïc Mennessier.</p>
      </LegalSection>

      <LegalSection title="Hébergement">
        <p>
          Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.{' '}
          <a href="https://vercel.com" target="_blank" rel="noreferrer">vercel.com</a>
        </p>
      </LegalSection>

      <LegalSection title="Propriété intellectuelle">
        <p>
          Les textes et le code de ce site appartiennent à Loïc Mennessier, sauf mention contraire.
          Le code source est consultable sur{' '}
          <a href="https://github.com/lmennessier/Porfolio-Perso" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
        <p>
          Les logos des technologies restent la propriété de leurs détenteurs respectifs.
          La police Overpass est distribuée sous licence SIL Open Font License.
        </p>
      </LegalSection>

      <LegalSection title="Données personnelles">
        <p>
          Le traitement des données envoyées par le formulaire de contact est décrit dans la{' '}
          <Link to="/confidentialite">politique de confidentialité</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
