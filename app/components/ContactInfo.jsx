import './styles/ContactInfo.css';

export default function ContactInfo() {
  return (
    <section className="contactinfo-section">
      <div className="contactinfo-container">
        <h2 className="contactinfo-heading">
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h2>
        
        <div className="contactinfo-details">
          <div>
            <p className="contactinfo-text">
              <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="contactinfo-text">
              <strong>Contact:</strong>
            </p>
            <p>Phone: (323) 555-0192</p>
            <p>
              Email:{' '}
              <a 
                href="mailto:serena@blakepsychology.com" 
                className="contactinfo-email"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="contactinfo-text">
              <strong>Office Hours:</strong>
            </p>
            <p>In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
}
