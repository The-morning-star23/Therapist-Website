import './styles/About.css';

const qualifications = [
  {
    title: "Education",
    details: [
      "Ph.D. in Clinical Psychology",
      "Master's in Counseling Psychology",
      "Licensed Professional Counselor"
    ]
  },
  {
    title: "Specializations",
    details: [
      "Cognitive Behavioral Therapy",
      "Trauma-Informed Care",
      "Relationship Counseling"
    ]
  },
  {
    title: "Experience",
    details: [
      "10+ Years Clinical Practice",
      "Published Research Author",
      "Mental Health Speaker"
    ]
  }
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Image Column */}
          <div className="about-photo-wrapper">
            <div className="about-photo-bg">
              <div className="about-photo">
                <div className="about-avatar">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="about-title">About Dr. Serena Blake</h2>
            <p className="about-intro">
              With over a decade of experience in mental health counseling, I am dedicated to providing 
              compassionate and effective therapy services. My approach combines evidence-based techniques 
              with a warm, empathetic style to help you achieve lasting positive change.
            </p>

            <div className="about-cards">
              {qualifications.map((qual, index) => (
                <div key={index} className="about-card">
                  <div className="about-card-content">
                    <h3 className="about-card-title">{qual.title}</h3>
                    <ul className="about-list">
                      {qual.details.map((detail, idx) => (
                        <li key={idx} className="about-list-item">
                          <span className="about-dot" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-approach">
              <h3 className="about-card-title">My Therapeutic Approach</h3>
              <p className="text-gray-600">
                I believe in creating a safe, non-judgmental space where you can explore your thoughts 
                and feelings freely. Together, we'll work to understand your challenges, develop coping 
                strategies, and build the life you envision for yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
