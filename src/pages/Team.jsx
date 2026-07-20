import PageHeader from '../components/PageHeader.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { team } from '../data/team.js';

/**
 * Team page: grid of team member cards.
 */
function Team() {
  return (
    <>
      <PageHeader
        title="Meet Our Team"
        subtitle="The engineers, designers and dreamers behind Nexovate Technologies."
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our People"
            title="The Minds Behind the Code"
            subtitle="A small selection of the 40+ talented people who make Nexovate what it is."
          />
          <div className="grid-3">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
