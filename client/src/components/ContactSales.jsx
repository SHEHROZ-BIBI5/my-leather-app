 import React from 'react';
 
const ContactSales = () => {
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Blur Shape */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      {/* Form */}
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
              First name
            </label>
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600 focus:outline-2 focus:outline-offset-2"
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
              Last name
            </label>
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600 focus:outline-2 focus:outline-offset-2"
            />
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold text-gray-900">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600 focus:outline-2 focus:outline-offset-2"
            />
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600 focus:outline-2 focus:outline-offset-2"
            />
          </div>

          {/* Phone Number + Country */}
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5 flex rounded-md border border-gray-300 bg-white focus-within:ring-2 focus-within:ring-indigo-600">
              <div className="relative">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="h-full rounded-l-md border-0 bg-transparent py-2 pl-3 pr-8 text-gray-500 focus:outline-none sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                {/* <ChevronDownIcon */}
                  {/* className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                /> */}
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="flex-1 border-0 py-2 pl-2 pr-3 text-gray-900 placeholder-gray-400 focus:outline-none sm:text-sm"
              />
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-2.5 block w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder-gray-400 focus:outline-indigo-600 focus:outline-2 focus:outline-offset-2"
              defaultValue=""
            />
          </div>

          {/* Checkbox */}
          <div className="flex gap-x-4 sm:col-span-2">
            <input
              id="agree"
              name="agree"
              type="checkbox"
              className="h-5 w-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="agree" className="text-sm text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy policy
              </a>
              .
            </label>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-2 focus:outline-indigo-600 focus:outline-offset-2"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactSales;
