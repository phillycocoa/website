---
date: "2021-11-22T00:12:00-04:00"
draft: false 
title: "#4: Welcome to My Objective-C TED Talk"
---

{{< rawhtml >}}
<iframe src="https://anchor.fm/side-project-spotlight/embed/episodes/S1E4-Welcome-to-My-Objective-C-TED-Talk-e1agm1i" height="102px" width="400px" frameborder="0" scrolling="no"></iframe>
{{< /rawhtml >}}

Sprint 3 is over and Kotaro has made progress on the UI with a complete app skeleton now linked together, but is still working on the core swipe animation. Meanwhile, Steve found notifications a little harder to setup in a SwiftUI environment than expected, but got the basic plumbing working when he wasn't editing the podcast. Aaron is the Sprint MVP as he updated the data managers so that Kanji can be retrieved from the database with ease and user stats saved on demand.  All together, this means we are getting close to a working app! Plus, a discussion comparing Objective-C and Swift and the struggle to switch mental modes when you are learning new things.

## Sprint 3 Retrospective:
- Kotaro
    - Swipe UI not done, yet. Working on choosing library or technique
    - Improved onboarding screens to initially load JSON into database
    - Completed linking areas of the app together
- Aaron
    - Added accessing methods to kanji database like next, random kanji
    - Added stats tracking
- Steve
    - Notifications wired up, but not fully implemented
    - Need proper settings for schedule
    - Lots of refactoring needed

## Topics Discussed:
- Time management in a sprint - How Kotaro approaches game jams
    - Week 1: get features done
    - Week 2: fine tuning/bug fixes
- Notifications
    - Where do you put authorization check?
    - SwiftUI modifiers for WindowGroup?
    - How to handle implementing delegate methods in Swift UI?
- Structs vs Classes in SwiftUI
    - Structs for layouts and immutable values
    - Classes for data model and data state stuff in background
- Objective-C vs. Swift
    - Obj-C doesn’t slap you on the hand like Swift will
    - Swift enforces a kind of discipline
    - Toughest part is changing your mental model
    - if let and guard statements
    - Obj-C geared for reading and Swift geared towards writing?
- Async/Await in Swift 
    - Inside a closure, has to be wrapped in a Task
- Future Features
    - Fling a card from one watch to another using nearby interactions framework

## Next Sprint:
- Core mechanics of scheduling specific notifications and handle actions (Steve)
    - Know it
    - Don’t know it
    - More Info (deep link with tap)
    - Dismiss
    - Mute for Today option
- Next Kanji algorithm (Aaron)
    - Method on public database class to get the next kanji
    - Debug settings screen
    - Complications, if time
- Swipe mechanic (Kotaro)
    - Main UI

## Links:
- [https://github.com/1amageek/Deck](https://github.com/1amageek/Deck)


*Intro music: "When I Hit the Floor", © 2021 Lorne Behrman. Used with permission of the artist.*
