# Alfred

~~(Sorry for the rather informal and aggressive writing style, I tried to write it like a development brief presentation to my client)~~

# Design Brief & Iterations

The initial brief was a task and time managing solution for South Korean high school students preparing for the Korean CSAT.

To further enhance their experience, the following sub-functions were planned aside from the usual planner(task manager) function;

1. Interactive Covey Quadrant

2. Stopwatch

3. Break Time Tracker

4. Reference List Creator

5. Music Player

After some self-evaluation and iteration, the web app prototype seen here contains the following features;

1. ~~Interactive Covey Quadrant~~ -> Static Covey Quadrant

2. Stopwatch (As planned)

3. ~~Break Time Tracker~~ -> Pomodoro Timer

4. ~~Reference List Creator~~ -> Dictionary(Wikipedia) Search Page

5. ~~Music Player~~ -> ***Removed***

Justification for the changes will be listed below.

## Static Covey Quadrant

The planned functions were a bit too complex compared to other visual features.

The whole concept of Alfred is 'Dark but Warm', and keeping it as simple as possible while providing all necessary features.

A static version of my covey quadrant would better suit this concept, since not many visual features are needed to effectively communicate with the user about what they have left to deal with.

## Pomodoro Timer

Break time tracker is indeed a handy function, but I discovered a very interesting trick which could be done with a pomodoro timer.

In the Korean CSAT, we have two science subjects which run for 30 minutes each, and has a two-minute interval between them.

They are basically time-attack style exams, which require repeated training for students to speed up their problem-solving process in order to achieve satisfying results. Can you see where this is going?

The pomodoro timer is **PERFECT** for this job - 4 quick 30 minute practice tests with 2 minutes of intervals each, and after that getting a well-deserved 20 minute break. Sounds fantastic.

It is not what pomodoro timers are intended to be used for, but desperate times desperate measures. Students use whatever methods they can to excel in the competition.

So I swapped out the Break Time Tracker with the Pomodoro, because I believe this will eventually be more useful for my target users.

## Wikipedia Search Page

I have changed the Reading List Creator into an embedded page where students and users can search things on Wikipedia - not just synonyms, but everything.

This is mainly due to the nature of Korean exam culture - students often use and are sometimes even taught at school about certain tactics or concepts which are beyond high-school level, but does help speed up their problem solving time.

And the Reading List Creator will mainly be used for saving lecture links and learning materials, but this can easily be achieved with the bookmark functions of each web browser, making it not very critical in improving user experience.

Therefore I have made the decision to give students the ability to look up certain concepts and related topics directly from Wikipedia, which will help them save valuable time wandering around the web for them.

## Music Player 

I have decided not to include a music player in my web-app prototype based on user and technical research.

To justify, I went back to my 20 context research participants and asked them whether they would be eager use an embedded music player rather than the services they were currently using.

No one gave a definitive(positive) answer, mainly because they're already used to their preferred services or apps, and they would have to 'redesign' everything if they decided to move to an embedded player. Here are some quotes from users;

***

*"I already pay to use certain apps and services. I won't be giving up those premium features to use a service which I don't even know well."*

*"I would have to migrate everything - including playlists and preferences. So no."*

*"Good idea, but Why would you need a music player embedded in a planner?"*

***

Furthermore, the players itself might function as a distraction to my potential users.

My target users are students preparing for the Korean CSAT, which requires insane levels of concentration even when you're studying for it. 

So a huge number of students choose to 'downgrade' their smart devices to those with less functions, or even to ones which are not 'smart' at all. 

You can easily find mobile service providers advertising their so-called 'student phones', which are basically pagers rather than smartphones. 

This is also why I designed Alfred's UI to be rather vague and dull - to eliminate any chances of being distracted while providing all necessary functions to my users. 

If I decide to add a fully operational online music player to my web app, my users are likely to see this as another possible source of distraction and eventually choose not to use Alfred as their task and time managing solution.


And even if the user is favorable of listening to music while studying, switching between apps and windows are just two swipes or presses away. 

Iphones for example, we can just swap the screen to access your favourite service. If you're on PC, just tab out and tab in. It's really not that hard.

Why would someone give up the service they were enjoying so much that they sometimes wouldn't even bother paying for a premium subscription, when you can rather choose to just 'swap' between apps and windows?