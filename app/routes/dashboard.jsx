import {Link} from "@remix-run/react";

export default function Dashboard() {
  return (
    <div className="rainbow-box text-white px-5 pt-5 font-thin overflow-scroll">
      <h1 className="text-5xl underline underline-offset-8 decoration-pink-600 mb-10">
        SOCIALS
      </h1>
      <div className="info-group animate-bounce">
        <div className="info-item">
          <Link
            className="flex gap-4"
            to="https://www.twitter.com/slippy">
            <h2 className="text-3xl font-mono">Twitter/X</h2>
            <span className="text-xl block font-mono my-auto  text-pink-600">
              @SLIPPY
            </span>
          </Link>
        </div>
        <div className="info-group  font-mono ">
          <Link
            className="flex gap-4"
            to="https://www.instagram/slippy">
            <h2 className="text-3xl">Instagram</h2>
            <span className="text-xl block my-auto  text-pink-600">
              @SLIPPY
            </span>
          </Link>
        </div>
      </div>
      <div className="item-section">
        <h1 className="text-5xl underline underline-offset-8 decoration-pink-600 my-5">
          CURRENT WORKS
        </h1>
        <div className="item-group">
          <div className="info-item py-3">
            <Link
              className=""
              to="https://www.importantlabs.com">
              <h2 className="text-3xl font-mono">
                Shopify Partner & Developer
              </h2>
              <span className="text-xl block font-mono my-auto  text-pink-600">
                Custom theme development and store managment for Shopify
                customers >> Important Labs.
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="item-section">
        <h1 className="text-5xl underline underline-offset-8 decoration-pink-600 my-5">
          THINGS THAT HAPPENED
        </h1>
        <div className="item-group">
          <div className="info-item py-3">
            <Link
              className=""
              to="https://www.twitter.com/slippy">
              <h2 className="text-3xl font-mono">LiquidGeneration</h2>
              <span className="text-xl block font-mono my-auto  text-pink-600">
                2000s era Flash animation & games site, popular for making fun
                of celebrities and pranking your friends with Sabotage jump
                scares. This is an archive of some of our animations, which was
                put on YouTube years after they were first put on
                LiquidGeneration.com.
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Link to="/">
        <span className="border-2 border-pink-600 p-5 block my-3 text-[6vw] text-center font-bold leading-10">
          BACKBACKBACKBACK
        </span>
      </Link>
    </div>
  );
}
