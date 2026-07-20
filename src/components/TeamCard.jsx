import './TeamCard.css';

/**
 * Card for a single team member on the Team page.
 */
function TeamCard({ member }) {
  return (
    <article className="card team-card">
      <img src={member.photo} alt={member.name} className="team-card__photo" loading="lazy" />
      <h3>{member.name}</h3>
      <span className="team-card__position">{member.position}</span>
      <p>{member.bio}</p>
    </article>
  );
}

export default TeamCard;
