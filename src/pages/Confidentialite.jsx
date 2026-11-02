import { LegalPage, LegalSection } from '../components/layout/LegalPage';

export default function Confidentialite() {
  return (
    <LegalPage title="Confidentialité" updated="2 novembre 2026">
      <LegalSection title="Responsable du traitement">
        <p>
          Loïc Mennessier, joignable à <a href="mailto:lmennessier99@gmail.com">lmennessier99@gmail.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="Données collectées">
        <p>
          Le site ne collecte des données que lorsque vous utilisez le formulaire de contact : votre nom, votre adresse e-mail,
          le sujet et le contenu de votre message.
        </p>
        <p>
          Elles servent uniquement à vous répondre. Elles ne sont ni revendues, ni utilisées pour de la prospection.
          Base légale : l'intérêt légitime à traiter votre demande (article 6.1.f du RGPD).
        </p>
      </LegalSection>

      <LegalSection title="Sous-traitant">
        <p>
          Les messages transitent par Formspree (Formspree, Inc., États-Unis), qui les transmet par e-mail.
          Ce transfert hors de l'Union européenne est encadré par les garanties décrites dans la{' '}
          <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noreferrer">politique de confidentialité de Formspree</a>.
          Après l'envoi, la page de confirmation est affichée par Formspree.
        </p>
      </LegalSection>

      <LegalSection title="Durée de conservation">
        <p>Les messages sont conservés au plus 12 mois après le dernier échange, puis supprimés.</p>
      </LegalSection>

      <LegalSection title="Cookies et mesure d'audience">
        <p>
          Ce site ne dépose aucun cookie et n'utilise aucun outil de mesure d'audience. Les polices sont hébergées sur le site
          lui-même : aucune requête n'est envoyée à un service tiers pendant la navigation.
        </p>
        <p>
          L'hébergeur, Vercel, enregistre des journaux techniques (dont l'adresse IP) pour faire fonctionner et sécuriser
          le service, selon sa{' '}
          <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noreferrer">politique de confidentialité</a>.
        </p>
      </LegalSection>

      <LegalSection title="Vos droits">
        <p>
          Vous pouvez demander l'accès, la rectification ou la suppression de vos données, ou vous opposer à leur traitement,
          en écrivant à <a href="mailto:lmennessier99@gmail.com">lmennessier99@gmail.com</a>.
          Vous pouvez aussi adresser une réclamation à la{' '}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">CNIL</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
