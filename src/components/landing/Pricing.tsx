"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Core",
    desc: "For individuals",
    longDesc: "This subscription tier caters to individuals and hobbyists seeking features.",
    monthlyPrice: "$29.00",
    annualPrice: "$19.00",
    features: [
      "Unlimited members",
      "1 Team",
      "50 issues",
      "Slack, GitHub, and API access",
      "Basic reporting tools",
      "Community support",
      "Basic customization options",
    ],
    buttonText: "Get Started",
    popular: false,
    dark: false,
  },
  {
    name: "Momentum",
    desc: "For startups",
    longDesc: "Tailored for expanding businesses, this tier offers advanced tools and analytics.",
    monthlyPrice: "$49.00",
    annualPrice: "$39.00",
    features: [
      "Unlimited teams",
      "Private teams and guests",
      "Insights",
      "Custom branding options",
      "Collaboration tools",
      "Mobile app access",
    ],
    buttonText: "Get Started",
    popular: true,
    dark: true,
  },
  {
    name: "Growth",
    desc: "For corporates",
    longDesc: "Designed for established businesses, providing comprehensive tools.",
    monthlyPrice: "$99.00",
    annualPrice: "$79.00",
    features: [
      "Unlimited members",
      "Advanced analytics",
      "Priority support",
      "Custom API integration",
      "Unlimited storage",
      "Enhanced security",
    ],
    buttonText: "Get Started",
    popular: false,
    dark: false,
    accent: true,
  },
];

export default function Pricing() {
  const [duration, setDuration] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="pt-20">
      <div className="mx-auto w-full lg:px-24 max-w-7xl md:px-12 items-center px-8">
        <div className="max-w-xl text-center mx-auto">
          <p className="text-sm leading-normal font-bold uppercase text-accent-600">
            Tagline
          </p>
          <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl mt-4 font-medium text-base-900 lg:text-balance">
            Equip your business
          </h2>
          <p className="text-base leading-normal mt-4 text-base-500 font-medium lg:text-balance">
            Choose a plan that works the best for you and your team.
          </p>
          <div
            aria-labelledby="pricing-toggle"
            className="w-full relative mt-8 ring-1 ring-base-200 ring-offset-2 bg-white overflow-hidden justify-center gap-4 mx-auto lg:mx-0 inline-flex p-1 rounded-md max-w-52 shadow z-0"
          >
            <div
              className={`absolute inset-0 bg-base-50 rounded-md transition-transform duration-200 ease-in-out ${
                duration === "monthly" ? "w-1/2 translate-x-0" : "w-1/2 translate-x-full"
              }`}
            />
            <button
              onClick={() => setDuration("monthly")}
              className={`relative flex items-center justify-center w-full px-2 h-6 text-xs font-medium focus:outline-none transition-colors duration-300 z-10 ${
                duration === "monthly" ? "text-accent-600" : "text-base-500 hover:text-accent-500"
              }`}
              type="button"
              aria-pressed={duration === "monthly"}
            >
              Monthly
            </button>
            <button
              onClick={() => setDuration("annual")}
              className={`relative flex items-center justify-center w-full px-2 h-6 text-xs font-medium focus:outline-none transition-colors duration-300 z-10 ${
                duration === "annual" ? "text-accent-600" : "text-base-500 hover:text-accent-500"
              }`}
              type="button"
              aria-pressed={duration === "annual"}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-12 mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col h-full p-1 lg:py-1 rounded-3xl ring-4 ring-base-50 border border-base-200 ${
                plan.accent ? "bg-accent-700" : plan.dark ? "bg-base-950" : "bg-base-50"
              }`}
            >
              <div>
                <div
                  className={`flex flex-col gap-4 p-8 rounded-[1.3rem] h-full ${
                    plan.dark || plan.accent ? "bg-white/10" : "bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <h3
                        className={`text-lg leading-normal sm:text-xl md:text-2xl font-medium ${
                          plan.dark || plan.accent ? "text-white" : "text-base-900"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className={`text-base leading-normal font-medium ${
                          plan.dark || plan.accent ? "text-base-100" : "text-base-500"
                        }`}
                      >
                        {plan.desc}
                      </p>
                    </div>
                    {plan.popular && (
                      <span className="inline-flex items-center font-medium relative text-base-700 bg-base-50 px-2.5 py-1 text-xs rounded-md">
                        Popular
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-base leading-normal font-medium ${
                      plan.dark || plan.accent ? "text-base-100" : "text-base-500"
                    }`}
                  >
                    {plan.longDesc}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <p
                  className={`font-semibold flex lg:text-3xl items-baseline text-2xl tracking-tighter ${
                    plan.dark || plan.accent ? "text-white" : "text-base-900"
                  }`}
                >
                  <span>{duration === "monthly" ? plan.monthlyPrice : plan.annualPrice}</span>
                  <span
                    className={`text-sm font-normal font-sans tracking-normal ${
                      plan.accent ? "text-accent-100" : plan.dark ? "text-white/50" : "text-base-500"
                    }`}
                  >
                    {duration === "monthly" ? "/month" : "/annually"}
                  </span>
                </p>
                <div className="w-full mt-4">
                  <Link
                    href="https://github.com/bekturaslan/syntro-astro"
                    className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-500 ring-1 ring-base-200 focus:ring-accent-500 h-9 px-4 py-2 text-sm font-medium rounded-md w-full"
                  >
                    {plan.buttonText}
                  </Link>
                </div>
                <div className="mt-8">
                  <p
                    className={`text-sm leading-normal font-medium uppercase ${
                      plan.dark || plan.accent ? "text-base-100" : "text-base-500"
                    }`}
                  >
                    {plan.name} plan includes:
                  </p>
                  <ul
                    className={`flex flex-col mt-4 gap-y-3 ${
                      plan.dark || plan.accent ? "text-base-100" : "text-base-500"
                    }`}
                    role="list"
                  >
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check size-4"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <span className="text-base leading-normal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
