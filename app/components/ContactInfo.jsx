export default function ContactInfo() {
  return (
    <section className="py-16 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif text-[#8B7355] mb-8">
          Dr. Serena Blake, PsyD (Clinical Psychologist)
        </h2>
        
        <div className="space-y-6 text-gray-700">
          <div>
            <p className="text-lg">
              <strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg">
              <strong>Contact:</strong>
            </p>
            <p>Phone: (323) 555-0192</p>
            <p>
              Email:{' '}
              <a 
                href="mailto:serena@blakepsychology.com" 
                className="text-teal-600 hover:text-teal-700 underline"
              >
                serena@blakepsychology.com
              </a>
            </p>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg">
              <strong>Office Hours:</strong>
            </p>
            <p>In-person: Tue & Thu, 10 AM–6 PM</p>
            <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
