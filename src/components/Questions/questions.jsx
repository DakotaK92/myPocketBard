import "./questions.css";

const Questions = () => {
    return (
       <section className="questionsContainer">
            <div className="headerQuestions">
                <h1>Freqently asked Questions</h1>
                <p>If you have anything else you want to ask, <u>reach out to us!</u></p>
            </div>
            <div className="questions">
                <div className="leftQuestions">
                    <h1>Are the tracks royalty free? Can I use the app for streaming my games online?</h1>
                    <p>Yes! We own the rights to all the music, and you can use Pocket Bard for streaming.
                        Please give us a shout though, as it really helps us grow, and continue to make the app better!
                    </p>
                    <h1>Is there a way to integrate Pocket Bard with Discord?</h1>
                    <p>Not directly, but we're working on a Windows version (Currently in Closed Beta) to
                        make Discord integration much easier. There are also workarounds outlined in
                        our Discord server.
                    </p>
                    <h1>What do I get from the premium subscription?</h1>
                    <p>In addition to all the free content, the premium subscription unlocks all other content,
                        like Sci-Fi, Horror, and more! We're constantly working on new music and sound
                        effects, and we also regualrly go back and update and existing content!
                    </p>
                </div>
                <div className="rightQuestions">
                <h1>How you would like to delete your Pocket Bard account?</h1>
                    <p>If you would like to delete your Pocket Bard account, you can follow the steps described on our Account Deletion page.
                    </p>
                    <h1>What platorms are supported?</h1>
                    <p>The Pocket Bard app is availble on iOS and Android. We also have a Windows version
                        in Closed Beta that we're excited to release soon! If you have a Silicon-based Mac, you
                        can also download and run Pocket Bard from the Mac App Store!
                    </p>
                    <h1>What do I get from the premium subscription?</h1>
                    <p>We're commited to the long-term growth and improvement of Pocket Bard. In 5
                        years, we believe the app will look, sound, and feel very different than it does today.
                        Everything always has room for improvment, and our vision is to create the best app 
                        and the best content we possibly can. We've seen other apps with one-time purchases
                        fail to improve long-term because they have to keep releasing new, increasingly
                        absolete content just stay in business. We don't want this to happen to us. We also
                        want our free content, like Fantasy Essentials, to keep improving over time. The
                        subscription allows those who can afford it, and want the extra content, to contribute
                        to the devlopment of the app in a way that benefits all our users, not just paying
                        ones. We have a variety of costs associated with hosting, distrubiting, and improving all
                        of the free content, and this lets us keep it free forever. There's also the accountability
                        aspect - of our subscribers don't like how the app is progessing, or if a better product
                        comes on the market, they can cancel at any time, as they should. Our goal is not to
                        squeeze every dollar out of our users but to create the best possible app and content
                        for our community.
                    </p>
                </div>
            </div>
       </section>
        
    )
};

export default Questions;