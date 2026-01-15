import OptimizedImage from "@/components/utilities/OptimizedImage";

const testimonials = [
  {
    quote: "“The onboarding experience was seamless and we saw productivity boost within days. Highly recommend!”",
    author: "Emily Zhang, Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    quote: "“Their customer support is unmatched. The team genuinely cares about our success.”",
    author: "Carlos Rivera, CTO",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "“We migrated in less than a week. The platform is fast, secure, and reliable.”",
    author: "Liam O’Brien, Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function Testimonial() {
  return (
    <section className="pt-20">
      <div className="px-8 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="text-center max-w-2xl mx-auto lg:text-balance">
          <p className="text-sm leading-normal font-bold uppercase text-accent-600">
            Testimonials
          </p>
          <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
            Our Customers Love Us
          </h2>
          <p className="text-base leading-normal mt-4 text-base-500 font-medium">
            Hear what SaaS founders and startup teams are saying.
          </p>
        </div>

        <div className="grid gap-10 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="bg-base-50 p-6 rounded-xl shadow-sm">
              <OptimizedImage
                src={t.avatar}
                alt="Customer avatar"
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mb-4"
              />
              <p className="text-base text-base-700 font-medium">{t.quote}</p>
              <p className="text-sm text-base-500 mt-3 font-semibold">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
