import { Link } from "react-router-dom";
import { useState } from "react";

const Footer = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <footer className="bg-black text-gray-400 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Help text */}
        <p className="mb-8 text-sm underline">
          Questions? Contact us.
        </p>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
          <Link className="underline">FAQ</Link>
          <Link className="underline">Help Centre</Link>
          <Link className="underline">Account</Link>
          <Link className="underline">Media Centre</Link>

          <Link className="underline">Investor Relations</Link>
          <Link className="underline">Jobs</Link>
          <Link className="underline">Ways to Watch</Link>
          <Link className="underline">Terms of Use</Link>

          <Link className="underline">Privacy</Link>
          <Link className="underline">Cookie Preferences</Link>
          <Link className="underline">Corporate Information</Link>
          <Link className="underline">Contact Us</Link>

          <Link className="underline">Speed Test</Link>
          <Link className="underline">Legal Notices</Link>
          <Link className="underline">Only on Netflix</Link>
        </div>

        {/* Language selector */}
        <div className="mt-8">
          <select className="bg-black border border-gray-600 text-sm px-4 py-2 rounded">
            <option>English</option>
            <option>Urdu</option>
          </select>
        </div>

        {/* Country */}
        <p className="mt-6 text-sm">Netflix Pakistan</p>

        {/* Description with Learn more */}
        <p className="mt-6 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <button
            onClick={() => setShowMore(!showMore)}
            className="underline text-blue-500"
          >
            Learn more.
          </button>
        </p>

        {/* Hidden text */}
        {showMore && (
          <p className="mt-4 text-sm">
            The information collected by Google reCAPTCHA is subject to the Google
            Privacy Policy and Terms of Service, and is used for providing,
            maintaining, and improving the reCAPTCHA service and for general
            security purposes (it is not used for personalized advertising by
            Google).
          </p>
        )}

      </div>
    </footer>
  );
};

export default Footer;
