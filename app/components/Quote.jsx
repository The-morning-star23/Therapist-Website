export default function Quote() {
  return (
    <section 
      className="relative h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url('/images/waves.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="space-y-4">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-relaxed">
            "I have come to believe that caring for myself is not self-indulgent.
            <br />
            Caring for myself is an act of survival."
          </p>
          <footer className="text-xl text-white/90 mt-6">
            — Audre Lorde
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
