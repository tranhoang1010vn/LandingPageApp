import Link from "next/link";

export default function SignupPage() {
  return (
    <section>
      <div className="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl ">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl font-semibold text-base-900 lg:text-balance">
            Join our community
          </h2>
          <p className="text-base leading-normal mt-4 text-base-500 font-medium">
            Sign up to join our community and start building your brand.
          </p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-12 max-w-lg">
          <div className="flex flex-col gap-y-6">
            <div>
              <label className="text-base leading-normal text-base-500 font-medium">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  required
                  aria-required="true"
                  aria-describedby="first-name-error"
                  placeholder="Your first name"
                  className="block w-full h-10 px-4 py-2 text-sm text-accent-700 duration-300 bg-white border border-transparent rounded-lg appearance-none ring-1 ring-base-200 placeholder-base-400 focus:border-base-300 focus:bg-transparent focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2 sm:text-sm"
                />
                <span id="first-name-error" className="text-red-600 text-sm hidden">
                  Please enter your first name.
                </span>
              </div>
            </div>
            <div>
              <label className="text-base leading-normal text-base-500 font-medium">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  aria-required="true"
                  aria-describedby="email-error"
                  placeholder="Your email"
                  className="block w-full h-10 px-4 py-2 text-sm text-accent-700 duration-300 bg-white border border-transparent rounded-lg appearance-none ring-1 ring-base-200 placeholder-base-400 focus:border-base-300 focus:bg-transparent focus:outline-none focus:ring-accent-500 focus:ring-offset-2 focus:ring-2 sm:text-sm"
                />
                <span id="email-error" className="text-red-600 text-sm hidden">
                  Please enter a valid email address.
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-4 gap-3">
            <input
              id="agreement"
              name="agreement"
              type="checkbox"
              className="size-4 rounded border-base-300 text-accent-600 focus:ring-accent-600 shadow"
            />
            <label className="block text-sm text-base-500 font-medium">
              You agree to our{" "}
              <Link
                className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                href="/terms"
              >
                Terms of service
              </Link>{" "}
              and{" "}
              <Link
                className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                href="/privacy"
              >
                Privacy Policy
              </Link>
            </label>
          </div>
          <div className="mt-10">
            <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-10 px-6 py-3 text-base font-medium rounded-lg w-full">
              Sign up
            </button>
          </div>
          <div className="flex items-center mt-4">
            <p className="text-sm leading-normal text-base-500 font-medium">
              Already have an account?{" "}
              <Link
                className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                href="/login"
              >
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
