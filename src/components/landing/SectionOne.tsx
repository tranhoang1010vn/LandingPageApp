export default function SectionOne() {
  return (
    <section id="features">
      <div className="px-8 py-20 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto lg:text-balance">
          <p className="text-sm leading-normal font-bold uppercase text-accent-600">
            Tagline
          </p>
          <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
            Transforming the banking experience for a digital future
          </h2>
          <p className="text-base leading-normal mt-4 text-base-500 font-medium">
            The fastest method for working together on staging and temporary
            environments.
          </p>
        </div>

        <div className="relative py-12 mx-auto overflow-hidden overflow-x-hidden 2xl:max-w-screen-xl">
          <div className="grid justify-between w-full">
            <div className="absolute inset-0 left-0 z-10 from-white via-transparent w-44 bg-gradient-to-r"></div>
            <div className="absolute inset-0 left-0 z-10 ml-auto from-white via-transparent w-44 bg-gradient-to-l"></div>
          </div>
          <div className="relative flex items-center gap-2 whitespace-nowrap t">
            {[
              "Secure Transactions",
              "Proxy Voting Capabilities",
              "Swift and Effortless Account Setup",
              "Merging Identical Entries",
              "Customized Domain Options",
              "Allow Guest Financial Insights",
              "Advanced Textual Analysis Tools",
              "Tailored Brand Color Schemes",
              "Define Financial Profile Images",
              "Choose Between Dark and Light Finance Views",
              "Priority Account Alerts",
              "Internal Financial Discussions",
            ].map((text) => (
              <span
                key={text}
                className="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-4 py-1.5 text-sm rounded-lg"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 text-center gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-y-16">
          {[
            {
              title: "Live editing",
              desc: "Instantly see the result of every change you make.",
              icon: (
                <path d="M12 8m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0M8 11a5 5 0 1 0 3.998 1.997M12.002 19.003a5 5 0 1 0 3.998 -8.003" />
              ),
            },
            {
              title: "Autocompletion",
              desc: "Spotless will suggest the right classes for you as you type.",
              icon: <path d="M3 12h5v8h4v-16h4v8h5" />,
            },
            {
              title: "Hide/show classes",
              desc: "Hide or show classes to see how your design changes.",
              icon: (
                <>
                  <path d="M8.5 16a5.5 5.5 0 1 0 -5.5 -5.5v.5" />
                  <path d="M3 16h18" />
                  <path d="M18 13l3 3l-3 3" />
                </>
              ),
            },
            {
              title: "Color preview",
              desc: "See the color of every class in the autocompletion view.",
              icon: (
                <>
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </>
              ),
            },
          ].map(({ title, desc, icon }) => (
            <div key={title}>
              <div className="flex flex-col gap-3 text-accent-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline size-5 mx-auto"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  {icon}
                </svg>
                <div>
                  <h3 className="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
                    {title}
                  </h3>
                </div>
              </div>
              <div>
                <p className="text-base leading-normal mt-2 text-base-500 font-medium">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
