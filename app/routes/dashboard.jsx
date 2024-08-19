import {Link} from "@remix-run/react";

export default function Dashboard() {
  return (
    <div className="rainbow-box text-white px-5 pt-5 font-thin overflow-auto selection:bg-pink-600 selection:text-white">
      <h1 className="text-5xl underline underline-offset-8 decoration-pink-600 mb-10">
        SOCIALS
      </h1>
      <div className="info-group">
        <div className="info-item flex gap-4">
          <Link
            className=""
            to="https://www.twitter.com/slippy">
            <h2 className="text-3xl font-mono hover:text-yellow-300">
              Twitter/X
            </h2>
          </Link>
          <span className="text-xl block font-mono my-auto  text-pink-600">
            @SLIPPY
          </span>
        </div>
        <div className="info-group  font-mono flex gap-4 ">
          <Link
            className=""
            to="https://www.instagram.com/slippy">
            <h2 className="text-3xl hover:text-yellow-300">Instagram</h2>
          </Link>
          <span className="text-xl block my-auto  text-pink-600">@SLIPPY</span>
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
              <h2 className="text-3xl font-mono hover:text-yellow-300">
                Shopify Partner & Developer
              </h2>
            </Link>
            <span className="text-xl block font-mono my-auto  text-pink-600">
              Custom theme development and store managment for Shopify customers
              >> Important Labs.
            </span>
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
              to="https://www.youtube.com/@LiquidGenerationTube">
              <h2 className="text-3xl font-mono hover:text-yellow-300">
                LiquidGeneration
              </h2>
            </Link>
            <span className="text-xl block font-mono my-auto  text-pink-600">
              2000s era Flash animation & games site, popular for making fun of
              celebrities and pranking your friends with Sabotage jump scares.
              This is an archive of only 15% of our animations.
            </span>
          </div>
        </div>
      </div>
      <Link to="/">
        <span className="border-2 border-pink-600 hover:border-yellow-400 p-8 block my-3 text-[6vw] text-center font-bold leading-10 hover:bg-yellow-400 2xl:text-[120px] 2xl:p-14 hover:text-pink-600">
          BACKBACKBACKBACK
        </span>
      </Link>
    </div>
  );
}
