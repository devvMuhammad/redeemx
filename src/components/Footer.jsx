import { Inter } from "next/font/google";
const inter = Inter({
  weight: ["400", "600"],
  style: "normal",
});

export default function Component() {
  return (
    <footer
      className={`${inter.className} border-t border-gray-500 bg-black text-white py-10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              RedeemX
            </h5>
            <ul className="[&>a]:block [&>a:hover]:text-white [&>a:hover]:transition-all mt-4 space-y-4 text-gray-400 transition-colors">
              <li>
                Built by{" "}
                <a
                  target="#"
                  href="https://twitter.com/devvMuhammad"
                  className="hover:text-white transition-colors underline"
                >
                  Muhammad.
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Credits
            </h5>
            <ul className="[&>a]:block [&>a:hover]:text-white [&>a:hover]:transition-all mt-4 space-y-4 text-gray-400 transition-colors [&>li:hover]:text-white [&>li:hover]:cursor-pointer">
              <a target="#" href="https://github.com/shadcn-ui">
                shadcn/ui
              </a>
              <a target="#" href="https://github.com/sadmann7">
                Sadmn
              </a>
              <a target="#" href="https://chat.openai.com">
                ChatGPT
              </a>
              <a target="#" href="https://github.com/shadcn-ui/taxonomy">
                Taxonomy
              </a>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Help
            </h5>
            <ul className="[&>a]:block [&>a:hover]:text-white [&>a:hover]:transition-all mt-4 space-y-4 text-gray-400 [&>li:hover]:text-white [&>li:hover]:cursor-pointer transition-colors">
              <li>About</li>
              <li>Contact</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Social
            </h5>
            <ul className="[&>a]:block [&>a:hover]:text-white [&>a:hover]:transition-all mt-4 space-y-4 text-gray-400 transition-colors [&>li:hover]:text-white [&>li:hover]:cursor-pointer">
              <a target="#" href="https://github.com/devvMuhammad">
                GitHub
              </a>
              <a
                target="#"
                href="https://www.linkedin.com/in/muhammad-amjad-abb84b271/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9jf7LoY9Sdu3AAmpwe5Ebw%3D%3D"
              >
                LinkedIn
              </a>
              <a target="#" href="https://twitter.com/devvMuhammad">
                Twitter
              </a>
              <a target="#" href="https://wa.me/923149556673">
                Whatsapp
              </a>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Lofi
            </h5>
            <ul className="[&>a]:block [&>a:hover]:text-white [&>a:hover]:transition-all mt-4 space-y-4 text-gray-400 transition-colors [&>li:hover]:text-white [&>li:hover]:cursor-pointer">
              <li>beats to study to</li>
              <li>beats to chill to</li>
              <li>a fresh start</li>
              <li>coffee to go</li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider">
              Wanna Hire Me?
            </h5>
            <p className="mt-4 text-gray-400">
              <span className="text-white">Hire Me</span> to code your business
              ideas to reality{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">© 2024 Muhammad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
