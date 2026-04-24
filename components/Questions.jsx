"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question:
      "Are the tracks royalty free? Can I use the app for streaming my games online?",
    answer:
      "Yes! We own the rights to all the music, and you can use Pocket Bard for streaming. Please give us a shout out though, as it really helps us to grow and continue to make the app better!",
  },
  {
    question: "Where does your music come from? Is it made with AI?",
    answer:
      "We are deeply invested in working with and promoting artists at Pocket Bard. We are proud to say that all of our music is written by our team of composers. If you'd like to learn more about the artists behind the music, tap a scene in the Pocket Bard app's Content page to learn who helped create it.",
  },
  {
    question: "What platforms are supported?",
    answer:
      "The Pocket Bard app is available on iOS 16.1 and newer, Android 9 and newer, and Windows through Open Beta. If you have a Silicon-based Mac, you can also download and run Pocket Bard from the Mac App Store.",
  },
  {
    question: "Is there a way to integrate Pocket Bard with Discord?",
    answer:
      "Not directly, but the Windows version, currently in Open Beta, makes Discord integration much easier. If you have a Silicon-based Mac, the iOS app can run on that as well. Check out the Discord server for the Windows Open Beta link and other workarounds.",
  },
  {
    question:
      "Do you offer collaboration, sponsorship, or partnership opportunities?",
    answer:
      "Email partnerships@pocketbard.app with your idea and a few details, including who you are, what you're proposing, and any relevant links. We'll get back to you as soon as we can.",
  },
  {
    question: "Do you have a brand kit for press and streamers?",
    answer:
      "Yes! You can download the Pocket Bard Brand Kit, which includes brand guidelines, official logos, and press photos.",
  },
  {
    question: "What do I get from the Open Worlds subscription?",
    answer:
      "In addition to all the free content, the Open Worlds subscription unlocks all other content, including Sci-Fi, Horror, Desert, and more. We're constantly working on new music and sound effects, and we regularly go back and update existing content.",
  },
  {
    question: "Why is there a subscription rather than a one-time purchase model?",
    answer:
      "We're committed to the long-term growth and improvement of Pocket Bard. The subscription helps fund new scenes, free content updates, hosting, distribution, and the artists behind the music and sound effects.",
  },
  {
    question: "How can I delete my Pocket Bard account?",
    answer:
      "If you would like to delete your Pocket Bard account, you can follow the steps described on the Account Deletion page.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-gray-50 px-6 py-16 border-b border-gray-300">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Questions</h2>
          <p className="mt-3 text-lg text-gray-700">
            Quick answers for streamers, game masters, and campaign planners.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={item.question} className="rounded-lg bg-white shadow">
                <button
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold">{item.question}</span>
                  <ChevronDown
                    className={`shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
                {isOpen && (
                  <p className="px-5 pb-5 leading-relaxed text-gray-700">
                    {item.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Questions;
