import './styles/Services.css'

export default function AreasOfFocus() {
  const areas = [
    {
      title: 'Anxiety & Stress Management',
      image: '/images/relationship.jpg',
      description:
        'Therapy helps you manage overwhelming thoughts, reduce panic, and restore a sense of balance. We’ll explore root causes of stress and use proven strategies to calm your mind and body. Together, we’ll build habits that support lasting emotional wellness.',
    },
    {
      title: 'Relationship Counseling',
      image: '/images/stress.jpg',
      description:
        'Navigate relationship challenges and improve communication, trust, and connection. Whether you’re struggling with romantic relationships, family conflicts, or friendships, therapy can guide you toward greater clarity and emotional intimacy.',
    },
    {
      title: 'Trauma Recovery',
      image: '/images/trauma.jpg',
      description:
        'Heal from painful past experiences in a safe, supportive space. Through evidence-based trauma therapies, you’ll gain tools to regulate emotions, rebuild safety, and move toward resilience. Your story deserves to be heard and honored.',
    },
  ]

  return (
    <section className="focus-section">
      <div className="focus-container">
        <h2 className="focus-title">Areas of Focus</h2>
        <div className="focus-grid">
          {areas.map((area) => (
            <div key={area.title} className="focus-item">
              <div className="focus-image-wrapper">
                <img src={area.image} alt={area.title} className="focus-image" />
              </div>
              <h3 className="focus-subtitle">{area.title}</h3>
              <p className="focus-description">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
