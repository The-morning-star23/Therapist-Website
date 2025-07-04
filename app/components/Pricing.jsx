import './styles/Pricing.css'

export default function RatesAndInsurance() {
  return (
    <section className="rates-section">
      <div className="rates-container">
        <h2 className="rates-title">Rates and Insurance</h2>
        <div className="rates-fees">
          <p>$200 / individual session</p>
          <p>$240 / couples session</p>
        </div>
        <p className="rates-note">
          I accept both private pay and insurance. I am in-network with BCBS and Aetna.
        </p>
        <p className="rates-link">
          For out-of-network plans, I’ve partnered with Mentaya using{' '}
          <a
            href="https://www.mentaya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-900"
          >
            this tool
          </a>{' '}
          to help you check your eligibility for reimbursement for my services.
        </p>
      </div>
    </section>
  )
}
