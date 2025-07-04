import './styles/About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Text + Image Grid */}
        <div className="about-grid">
          {/* Text Column */}
          <div className="about-text">
            <h2 className="about-title">About Dr. Serena Blake</h2>
            <p className="about-paragraph">
              Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
            </p>
            <p className="about-paragraph">
              Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>

          {/* Image Column */}
          <div className="about-image-wrapper">
            <img
              src="/images/Dr Blake.jpg"
              alt="Dr. Serena Blake"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
