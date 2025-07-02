import Image from 'next/image'

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
    <section className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-[#8B7355] mb-6">
            Therapy can be a space where you invest in yourself—
          </h2>
          <h3 className="text-3xl font-serif text-[#8B7355] mb-8">
            one of the highest forms of self-care.
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            You may be led to therapy by anxiety, depression, relationship stress, past or recent trauma, 
            grief and loss, self-esteem issues, or challenges with family, parenting, or parental relationships. 
            Whatever the source of your stress, you don't have to face it alone. Therapy offers you the time 
            and space to work toward wellness and peace.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Circular Image Container */}
              <div className="w-[300px] h-[300px] rounded-full overflow-hidden mb-6 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Service Content */}
              <h3 className="text-xl font-serif text-[#8B7355] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
