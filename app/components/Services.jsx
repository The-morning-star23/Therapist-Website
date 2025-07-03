import Image from 'next/image'
import './styles/Services.css'

export default function Services() {
  const services = [
    {
      title: "Relationship Counseling",
      image: "/images/relationship.jpg",
      description: "Building and maintaining healthy relationships requires understanding, communication, and dedication. Through relationship counseling, we explore patterns of interaction, enhance communication skills, and develop strategies to strengthen bonds. Whether you're facing challenges with a partner, family member, or seeking to improve your relationship dynamics, we'll work together to create positive change and foster deeper connections."
    },
    {
      title: "Anxiety & Stress Management",
      image: "/images/stress.jpg",
      description: "In today's fast-paced world, anxiety and stress can feel overwhelming. Together, we'll explore the root causes of your anxiety and develop personalized coping strategies. Using evidence-based techniques, mindfulness practices, and therapeutic approaches, I'll help you build resilience, manage stress effectively, and create a more balanced life. Learn to transform anxiety into empowerment and stress into strength."
    },
    {
      title: "Trauma Recovery",
      image: "/images/trauma.jpg",
      description: "Trauma can deeply impact our sense of safety, trust, and well-being. Through trauma-informed therapy, we create a safe space for healing and recovery. Using specialized therapeutic approaches, we work at your pace to process experiences, develop coping skills, and rebuild a sense of empowerment. Together, we'll help you move from surviving to thriving, reclaiming your strength and resilience."
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-headline">
            Therapy can be a space where you invest in yourself—
          </h2>
          <h3 className="services-subheadline">
            one of the highest forms of self-care.
          </h3>
          <p className="services-description">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, 
            grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. 
            Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time 
            and space to work toward wellness and peace.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image-container">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="service-title">
                {service.title}
              </h3>
              <p className="service-text">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
