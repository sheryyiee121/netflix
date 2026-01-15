import { Link } from "react-router-dom";

const SignupFooter = () => {
  return (
    <footer className="bg-black text-gray-400 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Help text */}
        <p className="mb-8 text-sm underline">
          Questions? Contact us.
        </p>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
          <Link className="underline">FAQ</Link>
          <Link className="underline">Help Centre</Link>
          <Link className="underline">Terms of Use</Link>
          <Link className="underline">Privacy</Link>
          <Link className="underline">Cookie Preferences</Link>
          <Link className="underline">Corporate Information</Link>
        </div>

      </div>
    </footer>
  );
};

export default SignupFooter;
