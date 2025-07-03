import './Hero.css';

export default function Hero() {
  return (
    <>
      {/* Top Logo Section */}
      <div className="hero-topbar">
        <div className="hero-logo-container">
          <div className="hero-logo">
            {/* Logo placeholder */}
            <svg className="w-8 h-8 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <h2 className="hero-name">Dr. Serena Blake, Ph.D.</h2>
            <p className="hero-subtext">Psychological Services</p>
          </div>
        </div>
      </div>

      {/* Hero Section with Video Background */}
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/videos/waves.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-heading">
            Psychological Care for
            <br />
            Change, Insight, and Well-Being
          </h1>

          <p className="hero-description">
            Offering individual psychotherapy for adults via telehealth in Michigan and most U.S. states through PSYPACT participation
          </p>

          <button className="hero-button">
            SCHEDULE A CONSULTATION
          </button>
        </div>
      </section>
    </>
  );
}
