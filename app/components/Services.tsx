import AnimatedBlock from "./AnimatedBlock";

const services = [
  {
    title: "Customer Experience Operations",
    text: "Managing inquiry flow, service matching, and communication standards to create consistent client experiences."
  },
  {
    title: "Campaign Execution Support",
    text: "Supporting end-to-end campaign coordination to align messaging with brand goals and service offerings."
  },
  {
    title: "Insights for Service Improvement",
    text: "Translating recurring customer feedback into practical insights for service and development teams."
  }
];

export default function Services() {
  return (
    <section id="services" className="section-gap services-wrap">
      <div className="container">
        <AnimatedBlock className="section-heading" delay={0.05}>
          <p className="panel-label">Services</p>
          <h2>Focused support where customer trust and brand consistency matter most.</h2>
        </AnimatedBlock>

        <div className="service-grid">
          {services.map((service, idx) => (
            <AnimatedBlock key={service.title} className="service-card" delay={0.08 + idx * 0.1}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
