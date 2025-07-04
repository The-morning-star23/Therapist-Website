import './styles/ContactInfo.css'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">Dr. Serena Blake, PsyD, Clinical Psychologist</h2>
        <p className="footer-info">1287 Maplewood Drive, Los Angeles, CA 90026</p>
        <p className="footer-info">
          Phone: <a href="tel:3235550192">(323) 555-0192</a> | Email: <a href="mailto:serena@blakepsychology.com">serena@blakepsychology.com</a>
        </p>
        <p className="footer-info">
          <strong>Office Hours:</strong><br />
          In-person: Tue & Thu, 10 AM–6 PM<br />
          Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
        </p>
        <p className="footer-info">8 years of practice • 500+ client sessions</p>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/estimate">Good Faith Estimate</a>
        </div>

        <div className="footer-portal">
          <a href="/portal">Client Portal</a>
        </div>

        <p className="footer-copy">
          © 2025 Serena Blake Psychology Services. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
