import './ServiceCard.css';

/**
 * Card for a single service. Used on the Home and Services pages.
 */
function ServiceCard({ service }) {
  return (
    <article className="card service-card">
      <img src={service.image} alt={service.title} className="service-card__image" loading="lazy" />
      <div className="service-card__body">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <ul className="service-card__highlights">
          {service.highlights.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ServiceCard;
