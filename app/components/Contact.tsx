import AnimatedBlock from "./AnimatedBlock";

export default function Contact() {
  return (
    <section id="contact" className="section-gap">
      <div className="container">
        <AnimatedBlock className="contact-panel" delay={0.05}>
          <p className="panel-label">Contact</p>
          <h2>Let us make your customer journey smoother and more effective.</h2>
          <p>
            For collaborations, role opportunities, or campaign support discussions,
            reach out directly through email.
          </p>
          <a className="btn btn-solid" href="mailto:hasanahmdalam@gmail.com">
            hasanahmdalam@gmail.com
          </a>
        </AnimatedBlock>
      </div>
    </section>
  );
}
