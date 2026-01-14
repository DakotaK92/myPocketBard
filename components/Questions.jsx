import React from "react";

const leftContent = [
  {
    question: "Are the tracks royalty free? Can I use the app for streaming my games online?",
    answer:
      "Yes! We own the rights to all the music, and you can use Pocket Bard for streaming. Please give us a shout out though, as it really helps us to grow, and continue to make the app better!",
  },
  {
    question: "Where does your music come from? Is it made with AI?",
    answer:
      "We are deeply invested in working with and promoting artists at Pocket Bard. We are proud to say that all of our music is written by our team of composers! If you'd like to learn more about the artists behind the music, tap a scene in the Pocket Bard app's Content page to learn who helped create it!",
  },
  {
    question: "What platforms are supported?",
    answer:
      "The Pocket Bard app is available on iOS (Minimum OS: iOS 16.1) and Android (Minimum OS: Android 9). We also have a Windows version of the app in Open Beta! If you have a Silicon-based Mac, you can also download and run Pocket Bard from the Mac App Store!",
  },
  {
    question: "Is there a way to integrate Pocket Bard with Discord?",
    answer:
      "Not directly, but we have a Windows version (currently in Open Beta) to make Discord integration much easier. If you have a Silicon-based Mac, the iOS app can run on that as well. Check out our Discord server for the link to the Windows Open Beta, as well as other workarounds!",
  },
  {
    question: "Do you offer collaboration, sponsorship, or partnership opportunities?",
    answer:
      "Email partnerships@pocketbard.app with your idea and a few details (who you are, what you’re proposing, and any relevant links). We’ll get back to you as soon as we can!",
  },
  {
    question: "Do you have a brand kit for press and streamers?",
    answer:
      "Yes! You can download the Pocket Bard Brand Kit, which includes brand guidelines, official logos, and press photos.",
  },
];

const rightContent = [
  {
    question: "What do I get from the Open Worlds subscription?",
    answer:
      "In addition to all the free content (17 locations), the Open Worlds subscription unlocks all other content, like Sci-Fi, Horror, Desert, and more (30+ additional locations with so many more to come)! We're constantly working on new music and sound effects (40+ one-shots and 15+ ambiences), and we also regularly go back and update the existing content!",
  },
  {
    question: "Why is there a subscription rather than a one-time purchase model?",
    answer:
      "We're committed to the long-term growth and improvement of Pocket Bard. In 5 years, we believe the app will look, sound, and feel very different than it does today. Everything always has room for improvement, and our vision is to create the best app and the best content we possibly can. We've seen other apps with one-time purchases fail to improve long-term because they have to keep releasing new, increasingly obsolete content just to stay in business. We don't want this to happen to us. We also want our free content, like Fantasy Essentials, to keep improving over time while remaining ad-free. Just this last year, we were able to improve our Forest location, as well as provide additional free locations, such as Cave, Dwarven Kingdom, and our most ambitious project to date, Tavern. All of this, as well as paying the incredible artists behind these projects would not be possible without the subscription. The subscription allows those who can afford it, and want the extra content, to contribute to the development of the app in a way that benefits all our users, not just paying ones. We have a variety of costs associated with hosting, distributing, and improving all of the free content, and this lets us keep it free forever.",
  },
  {
    question: "How can I delete my Pocket Bard account?",
    answer:
      "If you would like to delete your Pocket Bard account, you can follow the steps described on our Account Deletion page.",
  },
];

const Questions = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 border-b border-gray-300">
      {/* Left Column */}
      <div className="flex-1 space-y-6">
        {leftContent.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="flex-1 space-y-6">
        {rightContent.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
            <p className="text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
