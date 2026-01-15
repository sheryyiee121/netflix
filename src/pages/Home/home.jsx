import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/footer";
import bgImage from "../../assets/netflix_bg_image.PNG";
import Trending from "src/pages/TrendingPage/TremdingPage";
import Reasons from "src/pages/Reasons/Reasons";
import Faqs from "src/pages/FAQs/Faqs";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative min-h-screen bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navbar */}
        <Navbar showSignIn={true} />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl">
            Unlimited movies, TV shows, and more
          </h1>

          <p className="text-white text-lg md:text-xl mt-4">
            Starts at Rs 250. Cancel anytime.
          </p>

          <p className="text-white mt-6 text-base md:text-lg">
            Ready to watch? Enter your email to create or restart your membership.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 mt-6 w-full max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-4 rounded bg-black/70 border border-gray-500 text-white focus:outline-none"
            />
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded font-semibold text-lg flex items-center gap-2">
              Get Started <span className="text-2xl">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <Trending />
      <Reasons />
      <Faqs />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
