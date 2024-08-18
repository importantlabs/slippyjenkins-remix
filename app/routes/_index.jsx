import {Link} from "@remix-run/react";

export const meta = () => {
  return [
    {
      title: "SlippyJenkins.com",
    },
    {
      name: "author",
      content: "Jim Kleckner",
    },
  ];
};

export default function Index() {
  return (
    <div
      className="
    bg-gradient-to-r
    from-pink-500
    via-red-500
    to-yellow-500
    background-animate h-screen w-full flex items-center justify-center">
      <div className="sm:text-xl md:text-5xl text-center">
        <h1 className="uppercase font-mono -rotate-2 font-semibold text-yellow-300/20">
          slippy jenkins
        </h1>
        <h1 className="uppercase font-mono -rotate-2 font-bold  text-pink-600/40">
          slippy jenkins
        </h1>
        <h1 className="uppercase font-mono -rotate-2 font-black text-white/20">
          slippy jenkins
        </h1>
        <Link
          to="/dashboard"
          className="font-mono text-3xl opacity-50 mt-2 block border-2 py-1 px-3
            border-pink-600/90 hover:border-white text-center -rotate-2 hover:text-white">
          LINKS LINKS LINKS!
        </Link>
      </div>
    </div>
  );
}
