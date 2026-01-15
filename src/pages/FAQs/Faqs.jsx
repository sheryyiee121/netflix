import React, { useState } from "react";

const faqsData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100/month.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
  },
  {
    question: "How do I cancel?",
    answer:
      "Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    question: "What can I watch on Netflix?",
    answer:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">
          Frequently Asked Questions
        </h1>

        {/* FAQ Items */}
        <div className="space-y-2">
          {faqsData.map((faq, index) => (
            <div key={index} className="bg-[#2d2d2d]">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg md:text-xl hover:bg-[#414141] transition"
              >
                <span>{faq.question}</span>
                <span className="text-3xl font-light">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-lg border-t border-black">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

 {/* CTA Text */}
<p className="text-white text-base md:text-lg mt-10 text-center">
  Ready to watch? Enter your email to create or restart your membership.
</p>

{/* Email Form */}
<div className="mt-4 w-full flex justify-center">
  <div className="flex flex-col md:flex-row items-center gap-2 w-full max-w-3xl">
    <input
      type="email"
      placeholder="Email address"
      className="w-full md:flex-1 h-14 px-4 text-white
                 bg-black/60 border border-gray-500
                 rounded-sm focus:outline-none"
    />

    <button
      className="h-14 px-8 flex items-center gap-2
                 bg-red-600 hover:bg-red-700
                 text-white font-semibold text-lg
                 rounded-sm"
    >
      Get Started
      <span className="text-2xl">›</span>
    </button>
  </div>
</div>


    </div>
  );
};

export default Faqs;
