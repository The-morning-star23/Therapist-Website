import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                {/* Placeholder for About section photo */}
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto rounded-full bg-primary/5 flex items-center justify-center">
                    <svg className="w-24 h-24 text-primary/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6">About Dr. Serena Blake</h2>
            <p className="text-muted-foreground mb-8">
              With over a decade of experience in mental health counseling, I am dedicated to providing 
              compassionate and effective therapy services. My approach combines evidence-based techniques 
              with a warm, empathetic style to help you achieve lasting positive change.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {qualifications.map((qual, index) => (
                <Card key={index} className="bg-card">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">{qual.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {qual.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-card rounded-lg border">
              <h3 className="font-semibold mb-4">My Therapeutic Approach</h3>
              <p className="text-muted-foreground">
                I believe in creating a safe, non-judgmental space where you can explore your thoughts 
                and feelings freely. Together, we'll work to understand your challenges, develop coping 
                strategies, and build the life you envision for yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
