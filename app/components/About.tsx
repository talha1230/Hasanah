import AnimatedBlock from "./AnimatedBlock";

export default function About() {
  return (
    <section id="about" className="section-gap">
      <div className="container panel-grid">
        <AnimatedBlock className="panel panel-dark" delay={0.05}>
          <p className="panel-label">About</p>
          <h2>A client-first professional with a growth mindset.</h2>
          <p>
            With a background in customer interaction and digital marketing, I bridge the
            gap between business goals and daily client experience. I am known for being
            adaptable, organized, and committed to high standards of communication.
          </p>
        </AnimatedBlock>

        <AnimatedBlock className="panel panel-light" delay={0.15}>
          <p className="panel-label">Core Strengths</p>
          <ul className="chip-list" aria-label="Core strengths">
            <li>Customer Communication</li>
            <li>Campaign Coordination</li>
            <li>Operations Alignment</li>
            <li>Cross-Team Collaboration</li>
            <li>Critical Thinking</li>
            <li>Deadline Discipline</li>
          </ul>
        </AnimatedBlock>
      </div>
    </section>
  );
}
