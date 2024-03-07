import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
});

export default function WhatWeOffer() {
  return (
    <section className={` ${inter.className} w-full bg-black text-white`}>
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl">
            What We Offer
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 items-start justify-center gap-6 md:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col items-center justify-center space-y-2 hover:bg-gray-900 py-4 rounded-lg">
            <div className="grid w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800">
              <TerminalIcon className="w-6 h-6 m-auto text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                24/7 Customer Support
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Get help whenever you need it with our around-the-clock customer
                support. Our dedicated team is ready to assist you with any
                questions, concerns, or technical issues.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 hover:bg-gray-900 py-4 px-2 rounded-lg transition-all duration-200 ease-in">
            <div className="grid w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800">
              <CommandIcon className="w-6 h-6 m-auto text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Secure Online Transactions
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Shop confidently knowing that your transactions are safe. Our
                platform uses advanced encryption and security measures to
                protect your personal and financial information.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 hover:bg-gray-900 py-4 px-2 rounded-lg transition-all duration-200 ease-in">
            <div className="grid w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800">
              <HandIcon className="w-6 h-6 m-auto text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Hassle-Free Returns and Exchanges
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Not happy with your purchase? No problem. Our easy returns and
                exchanges policy allows you to return or exchange products
                within a specified timeframe
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 hover:bg-gray-900 py-4 px-2 rounded-lg transition-all duration-200 ease-in">
            <div className="grid w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800">
              <HandIcon className="w-6 h-6 m-auto text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                Fast and Reliable Shipping
              </h3>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
                Enjoy quick and secure delivery of your tech purchases right to
                your doorstep. We make sure your items arrive in perfect
                condition and on time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
    </svg>
  );
}

function HandIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  );
}

function TerminalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" x2="20" y1="19" y2="19" />
    </svg>
  );
}
