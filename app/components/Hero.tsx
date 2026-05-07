import Image from "next/image";
import AnimatedBlock from "./AnimatedBlock";

export default function Hero() {
  return (
    <section id="top" className="hero-section section-gap">
      <div className="container hero-grid">
        <AnimatedBlock className="hero-copy" delay={0.1}>
          <p className="hero-kicker">Customer Experience & Marketing Operations</p>
          <h1>Building smooth customer journeys with measurable brand momentum.</h1>
          <p className="hero-summary">
            I help businesses improve client communication, streamline service operations,
            and execute marketing campaigns that align with growth goals.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="mailto:hasanahmdalam@gmail.com">
              Start a Conversation
            </a>
            <a className="btn btn-ghost" href="#services">
              View Services
            </a>
          </div>
        </AnimatedBlock>

        <AnimatedBlock className="hero-portrait-wrap" delay={0.2}>
          <div className="hero-portrait">
            <Image
              src="/placeholder.jpg"
              alt="Female profile placeholder"
              width={720}
              height={720}
              priority
            />
          </div>
        </AnimatedBlock>
      </div>
    </section>
  );
}
