import './styles/Quote.css'

export default function Quote() {
  return (
    <section className="quote-section">
      {/* Overlay for better text readability */}
      <div className="quote-overlay"></div>

      <div className="quote-content">
        <blockquote className="space-y-4">
          <p className="quote-text">
            "I have come to believe that caring for myself is not self-indulgent.
            <br />
            Caring for myself is an act of survival."
          </p>
          <footer className="quote-author">
            — Audre Lorde
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
