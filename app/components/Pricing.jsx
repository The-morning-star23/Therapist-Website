export default function Pricing() {
  return (
    <section className="py-24 bg-[#A8C5B8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-16">Rates and Insurance</h2>
        
        <div className="space-y-8 mb-12">
          <div className="text-xl text-gray-700">
            <span className="font-medium">Session Fee</span> - $200
          </div>
          
          <div className="text-xl text-gray-700">
            <span className="font-medium">Psychodiagnostic Evaluation</span> - $225
          </div>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p className="text-lg">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>
          
          <p className="text-lg">
            For out-of-network plans, I've partnered with Mentaya{' '}
            <a 
              href="#" 
              className="underline hover:text-gray-900 transition-colors"
            >
              using this tool
            </a>{' '}
            to help you check your eligibility for reimbursement for my services.
          </p>
        </div>
      </div>
    </section>
  )
}
