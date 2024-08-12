import {Link} from "@remix-run/react";

export default function Dashboard() {
  return (
    <div
      className="  bg-gradient-to-l
    from-purple-500
    via-green-500
    to-purple-500
    background-animate  h-screen text-purple-950 font-mono">
      <div className="text-left px-2">
        <h1 className="pt-5 mb-4 text-3xl font-semibold">links</h1>
        <ul className="italic  space-y-2 mb-3">
          <li>
            <a href="https://www.twitter.com/slippy">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/slippy">Instagram</a>
          </li>
        </ul>
      </div>
      <div className="px-2">
        <Link
          to="/"
          className="font-mono text-3xl mt-2 block border-2 py-1 px-3 hover:text-white
          border-pink-600/40 text-center uppercase tracking-widest hover:bg-purple-700/10">
          go back
        </Link>
      </div>
    </div>
  );
}
