import './Pricing.css'

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Rates and Insurance</h2>

        <div className="pricing-fees">
          <div className="pricing-item">
            <span className="font-medium">Session Fee</span> - $200
          </div>

          <div className="pricing-item">
            <span className="font-medium">Psychodiagnostic Evaluation</span> - $225
          </div>
        </div>

        <div className="pricing-details">
          <p className="pricing-text">
            I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </p>

          <p className="pricing-text">
            For out-of-network plans, I've partnered with Mentaya{' '}
            <a 
              href="#" 
              className="pricing-link"
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
