export default function Pricing() {
    return (
      <section id="pricing" className="w-full py-24 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-center mb-4">Pricing</h2>
        <p className="text-lg text-center max-w-2xl mb-12">
          Whether you're looking for a job or hiring your next teammate, <br />
          <b>NexHire.ai</b> has a plan for you.
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* Free Plan */}
          <div className="rounded-2xl border-2 border-border-transparent bg-card-bg p-6 flex flex-col gap-4 items-start">
            <h3 className="text-2xl font-semibold">Free for Candidates</h3>
            <p>Empowering job seekers to stand out with AI.</p>
            <p className="text-4xl font-bold">
              $0<span className="text-lg font-medium">/mo</span>
            </p>
            <ul className="space-y-2">
              <li>✓ 3 tailored resume suggestions per month</li>
              <li>✓ Role-specific optimization</li>
              <li>✓ Cultural fit analysis</li>
            </ul>
          </div>
  
          {/* Enterprise Plan */}
          <div className="rounded-2xl border-2 border-border-transparent bg-card-bg p-6 flex flex-col gap-4 items-start">
            <h3 className="text-2xl font-semibold">Enterprise for Recruiters</h3>
            <p>Smarter candidate screening for fast-growing startups.</p>
            <p className="text-4xl font-bold">
              $49.99<span className="text-lg font-medium">/mo</span>
            </p>
            <ul className="space-y-2">
              <li>✓ Unlimited candidate screening</li>
              <li>✓ AI-powered cultural fit scoring</li>
              <li>✓ API access + onboarding support</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
  