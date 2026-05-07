const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#top">
          Hasanah Md Alam
        </a>

        <nav aria-label="Primary">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="mini-cta" href="mailto:hasanahmdalam@gmail.com">
          Email Me
        </a>
      </div>
    </header>
  );
}
