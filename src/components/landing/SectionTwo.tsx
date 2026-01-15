import OptimizedImage from "@/components/utilities/OptimizedImage";
import Link from "next/link";

export default function SectionTwo() {
  return (
    <section>
      <div className="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:order-last">
            <p className="text-sm leading-normal font-bold uppercase text-accent-600">
              Tagline
            </p>
            <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900">
              Transforming the banking experience for a digital future
            </h2>
            <p className="text-base leading-normal mt-4 text-base-500 font-medium">
              The fastest method for working together on staging and temporary
              environments.
            </p>
            <div className="flex flex-wrap items-center gap-2 mx-auto mt-12">
              <Link
                href="https://github.com/bekturaslan/syntro-astro"
                className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-9 px-4 py-2 text-sm font-medium rounded-md"
              >
                Get started
              </Link>
              <Link
                href="https://github.com/bekturaslan/syntro-astro"
                className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md"
              >
                Learn more details
              </Link>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="p-5 bg-accent-50 rounded-2xl">
              <OptimizedImage
                src="/dashboard.png"
                alt="#_"
                width={900}
                height={500}
                loading="eager"
                className="relative w-full ring-4 ring-base-50 border border-base-200 lg:rounded-2xl object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="gap-x-2 gap-y-14 mt-12 lg:gap-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Innovative Design",
              desc: "Our cutting-edge design offers a fresh, modern look that transforms your project into a standout experience.",
              items: ["Revolutionizing communication", "Enhancing productivity"],
            },
            {
              title: "Powerful Functionality",
              desc: "Equipped with advanced features and tools, our solution effortlessly manages complex tasks and workflows.",
              items: ["Unlocking innovative solutions", "Enabling interoperability"],
            },
            {
              title: "Easy Integration",
              desc: "Integrating with existing systems is smooth and hassle-free, thanks to our incredible flexible approach.",
              items: ["Streamlining operations", "Simplifying implementation"],
            },
          ].map(({ title, desc, items }) => (
            <div key={title}>
              <div>
                <h3 className="text-base leading-normal sm:text-lg md:text-xl text-base-900 font-medium">
                  {title}
                </h3>
                <p className="text-base leading-normal mt-2 text-base-500 font-medium">
                  {desc}
                </p>
              </div>
              <ul
                role="list"
                className="space-y-1 mt-6 text-base font-medium text-base-900"
              >
                {items.map((item) => (
                  <li key={item}>
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-5 text-accent-600"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                          strokeWidth="0"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="text-base leading-normal">{item}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
