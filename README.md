# Alfred

~~(Sorry for the rather informal and aggressive writing style, I tried to write it like a development brief presentation to my client)~~

# Design Brief & Iterations

The initial brief was a task and time managing solution for South Korean high school students preparing for the Korean CSAT.

Alfred is designed to be fully functional in both mobile and pc environments, but its design can be fully appreciated when viewed on mobile devices.

This is because my target users, who are high school students, are more likely to use smartphones over laptop computers when planning their studies.

***

To further enhance their experience, the following sub-functions were planned aside from the usual planner(task manager) function;

1. Interactive Covey Quadrant

2. Stopwatch

3. Break Time Tracker

4. Reference List Creator

5. Music Player

After some self-evaluation and iteration, the web app prototype seen here contains the following features;

1. ~~Interactive Covey Quadrant~~ -> Kanban Quadrant

2. Stopwatch (As planned)

3. ~~Break Time Tracker~~ -> Pomodoro Timer

4. ~~Reference List Creator~~ -> Dictionary(Wikipedia) Search Page

5. ~~Music Player~~ -> ***Removed***

Justification for the changes will be listed below.

## Kanban Quadrant

The planned interactive quadrant was a bit too complex compared to other visual features.

The whole concept of Alfred is 'Dark but Warm', and keeping it as simple as possible while providing all necessary features.

A static version would better suit this concept, since not many visual features are needed to effectively communicate with the user about what they have left to deal with.

The new design allows users to input whatever detail they like into each quadrant, and can move items around from one quadrant to another if they want to change things.

Users can delete items by double-clicking on them if they're done or just don't want to keep it.

## Pomodoro Timer

Break time tracker is indeed a handy function, but I discovered a very interesting trick which could be done with a pomodoro timer.

In the Korean CSAT, we have two science subjects which run for 30 minutes each, and has a two-minute interval between them.

They are basically time-attack style exams, which require repeated training for students to speed up their problem-solving process in order to achieve satisfying results. Can you see where this is going?

The pomodoro timer is **PERFECT** for this job - 4 quick 30 minute practice tests with 2 minutes of intervals each, and after that getting a well-deserved 20 minute break. Sounds fantastic.

It is not what pomodoro timers are intended to be used for, but desperate times desperate measures. Students use whatever methods they can to excel in the competition.

So I swapped out the Break Time Tracker with the Pomodoro, because I believe this will eventually be more useful for my target users who are mainly students preparing for the Korean CSAT and will take the two science exams.

## Wikipedia Search Page

I have changed the Reading List Creator into an embedded page where students and users can search things on Wikipedia - not just synonyms, but everything.

This is mainly due to the nature of Korean exam culture - students often use and are sometimes even taught at school about certain tactics or concepts which are beyond high-school level, but does help speed up their problem solving time.

And the Reading List Creator will mainly be used for saving lecture links and learning materials, but this can easily be achieved with the bookmark functions of each web browser, making it not very critical in improving user experience.

So I have made the decision to give students the ability to look up certain concepts and related topics which are **NOT** usually taught in any high school level classrooms directly from Wikipedia.

This way they will benefit more directly from my solution, enhancing their problem-solving speed with highly refined tactics and concepts in hand.

Yes, some may question 'Why embed it, when you can just search up way more info on the web?'. 

This is to eliminate any chance of being distracted from your studies, which happens quite often during lookups and searches.

I'm pretty sure we all had experience trying to look up a confusing study topic, but somehow ended up in a weird corner of Youtube or a meme-filled subreddit.

My solution **ONLY** displays Wikipedia pages as search results, so users and students won't have to worry about wandering off-path anymore while looking up topics or information.

## Music Player 

I have decided **NOT** to include a music player in my web-app prototype based on user and technical research.

To justify, I went back to my 20 context research participants and decided to ask them whether they would be eager use an embedded music player rather than the services they were currently using.

I was lucky enough to get in direct touch with a handful of former participants since I have now relocated back to South Korea, and interview them face to face or via discord call.

However, no one gave a definitive(positive) answer to my question, mainly because they're already used to their preferred services or apps, and would have to 'redesign' everything if they decided to move to an embedded player. 

Here are some quotes from the sessions;

***

*"I already pay to use certain apps and services. I won't be giving up those premium features to use a service which I don't even know well."*

*"I would have to migrate everything - including playlists and preferences. So no."*

*"Good idea, but Why would you need a music player embedded in a planner?"*

*"Nah. I didn't even listen to music during my prepp days. Think it'll only distract students, y'know. Good music is like drugs when you're studying for an exam haha."*

***

Furthermore, the players itself might function as a distraction to my potential users, as stated in one of the quotes above.

My target users are students preparing for the Korean CSAT, which requires insane levels of concentration even when you're studying for it. 

So a huge number of students choose to 'downgrade' their smart devices to those with less functions, or even to ones which are not 'smart' at all. 

You can easily find mobile service providers advertising their so-called 'student phones', which are basically pagers rather than smartphones. 

This is also why I designed Alfred's UI to be rather vague and dull - to eliminate any chances of being distracted while providing all necessary functions to my users. 

If I decide to add a fully operational online music player to my web app, my users may end up seeing this as another possible source of distraction and eventually choose not to use Alfred as their task and time managing solution.

And even if the user is favorable of listening to music while studying, switching between apps and windows are just two swipes or presses away. 

Mobile phones for example, we can just swap or touch the screen a couple of times to access your favourite service. If you're on PC, tab out and tab in. 

Besides, why would someone give up the service they were enjoying so much that they sometimes wouldn't even bother paying for a premium subscription, when you can rather choose to just 'swap' with ease between apps and windows?

A few swaps and presses are not a big deal, compared to rebuilding all your playlists and stuff on a new environment you're not very familiar of.

Moreover, almost every wired and wireless earphones and headsets now come with an integrated remote of its own, so even the simplest remotes and controls are not very critical or helpful to the user's convenience.

So based on the points stated above, a music player or controller of any kind was excluded from the final prototype.