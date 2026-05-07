import AnimatedBlock from "./AnimatedBlock";

const roles = [
  {
    title: "Operations & Marketing Coordinator",
    period: "Dec 2025 - May 2026",
    company: "Incepta",
    points: [
      "Managed top-of-funnel inquiries and matched potential clients with the right services.",
      "Executed campaigns aligned with Incepta's identity as a service marketplace.",
      "Converted customer pain points into actionable insights for internal teams."
    ]
  },
  {
    title: "Customer Service & Order Coordinator",
    period: "Jan 2023 - April 2024",
    company: "Incepta",
    points: [
      "Supported marketing strategy execution tied to business goals and campaign outcomes.",
      "Contributed to a collaborative, results-driven environment across marketing operations.",
      "Helped maintain brand consistency across communication channels and materials."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-gap">
      <div className="container">
        <AnimatedBlock className="section-heading" delay={0.05}>
          <p className="panel-label">Experience Highlights</p>
          <h2>Hands-on work across service coordination and marketing execution.</h2>
        </AnimatedBlock>

        <div className="timeline" aria-label="Professional experience timeline">
          {roles.map((role, idx) => (
            <AnimatedBlock key={role.title} className="timeline-item" delay={0.1 + idx * 0.1}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <div className="timeline-head">
                  <h3>{role.title}</h3>
                  <span>{role.period}</span>
                </div>
                <p className="company-name">{role.company}</p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
