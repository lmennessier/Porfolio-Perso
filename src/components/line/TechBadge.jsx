// Pastille de correspondance : picto de la techno + son nom.
// L'icône est chargée depuis public/TechIcons/<nom>.svg (le nom doit correspondre au fichier).
export default function TechBadge({ name, label = name, size = 'sm' }) {
  return (
    <span className={`correspondence ${size === 'lg' ? 'correspondence--lg' : ''}`}>
      <img
        src={`/TechIcons/${encodeURIComponent(name)}.svg`}
        alt=""
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />
      {label}
    </span>
  );
}
