import Link from "next/link";

export default function LoginPage() {
  return (
    <section>
      <div className="px-8 py-32 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
        <div className="max-w-lg mx-auto">
          <div className="text-center lg:text-balance">
            <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl capitalize lg:text-4xl font-semibold text-base-900 lg:text-balance">
              Sign in to your account
            </h2>
            <p className="text-base leading-normal mt-4 text-base-500 font-medium">
              Welcome back! Please enter your email and password to sign in.
            </p>
          </div>
          <form action="#" method="POST" className="mx-auto mt-12 max-w-lg">
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
            <div className="mt-10">
              <button className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500/50 h-10 px-6 py-3 text-base font-medium rounded-lg w-full">
                Sign in
              </button>
            </div>
            <div className="flex items-center mt-4">
              <p className="text-sm leading-normal text-base-500 font-medium">
                Don't have an account?{" "}
                <Link
                  className="text-base leading-normal text-accent-500 font-medium hover:text-base-500"
                  href="/signup"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
