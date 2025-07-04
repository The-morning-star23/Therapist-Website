'use client'
import './styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero-wrapper">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
      >
        <source src={"./videos/waves.mp4"} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Topbar */}
      <div className="hero-topbar">
        <div className="hero-logo">
          <svg className="hero-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <div className="hero-logo-text">
            <h1 className="hero-name">Dr. Serena Blake, Ph.D.</h1>
            <p className="hero-subtext">Psychological Services</p>
          </div>
        </div>
      </div>

      <div className="hero-content">
        <h2 className="hero-heading">
          <span className="hero-line-1">Psychological Care for</span>
          <span className="hero-line-2">Change, Insight, and Well-Being</span>
        </h2>
        <p className="hero-description">
          Offering individual psychotherapy for adults via telehealth in Michigan and{' '}
          <span className="underlined-text">most U.S. states</span> through PSYPACT participation.
        </p>

        <button className="hero-button">Schedule a Consultation</button>
      </div>
    </section>
  )
}
