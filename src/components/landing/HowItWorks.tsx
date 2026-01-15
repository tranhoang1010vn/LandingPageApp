export default function HowItWorks() {
  return (
    <section className="bg-white pt-20 text-base-900">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <p className="text-sm leading-normal font-bold uppercase text-accent-600">
            Tagline
          </p>
          <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
            How It Works
          </h2>
          <p className="text-base leading-normal mt-4 text-base-500 font-medium">
            A simple, three-step journey to get your SaaS up and running quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-5 lg:gap-10 max-lg:divide-y lg:divide-x divide-blue-400 divide-dashed">
          {[
            {
              step: 1,
              title: "Create Your Account",
              desc: "Sign up with your email and choose a plan that fits your team.",
            },
            {
              step: 2,
              title: "Set Up Your Workflow",
              desc: "Connect your favorite tools, configure automations, and customize.",
            },
            {
              step: 3,
              title: "Launch & Optimize",
              desc: "Go live, monitor performance, and scale with real-time analytics monitor.",
            },
          ].map(({ step, title, desc }) => (
            <div
              key={step}
              className="relative z-10 bg-white text-center md:text-left pt-6 md:pe-10 lg:py-0 pb-10 last:pb-0 last:pe-0"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center mx-auto md:mx-0 mb-4">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-base text-base-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
