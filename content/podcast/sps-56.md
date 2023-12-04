---
date: "2023-12-04T00:09:00-04:00"
draft: false 
title: "#56: Diving Into Dependencies"
---

{{< rawhtml >}}
<iframe id="embedPlayer" src="https://embed.podcasts.apple.com/us/podcast/56-diving-into-dependencies/id1589612693?i=1000637387340&amp;itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto" height="175px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *; clipboard-write" style="width: 100%; max-width: 660px; overflow: hidden; border-radius: 10px; transform: translateZ(0px); animation: 2s 6 loading-indicator; background-color: rgb(228, 228, 228); --noir-inline-background-color: #20272b;" data-noir-inline-background-color=""></iframe>
{{< /rawhtml >}}

The trio convene for the penultimate episode of 2023 to discuss the latest presentations by OpenAI and Github and the way generative "AI" tools may be enabling the dream of a "universal" UI for computing (for both end-users and developers) that is more natural and contextual than ever before. Stay until the very end for a short after show on the strange, but super useful, ContentUnavailableView. As always, check the show notes for all the links!

## Topics Discussed:
- Introductions
- Dependencies Intro
    - Metal shaders 
    - Godot vs Unity
        - https://godotengine.org
        - https://unity.com
- Platform Dependencies
    - Godot/Unity 
    - Vendor like Apple/Google/Windows/etc.
- Library Dependencies
    - Analytics
- Infrastructure Dependencies
    - Linode
    - Buddy Build
    - OpenAI
- Managing Dependencies
    - Platform alternatives
        - How much work to migrate?
        - Noclip Documentary: Remaking Demon’s Souls
            - https://youtu.be/hCBJ2fiiUXk
        - Emulators
        - Getting updates “for free” when you use platform provided controls
    - Programming Techniques
        - Protocol Oriented Programming
            - Themes
                - Pragma Conf 2023 - Token Driven UI Development
                    - https://youtu.be/YvAkyiy6B3g
                - Atomic Design by Brad Frost
                    - https://atomicdesign.bradfrost.com
            - Protocol composition for dependency injection by Krzysztof Zabtocki
                - https://www.merowing.info/using-protocol-compositon-for-dependency-injection/
        - Protocol Witnesses by Point-Free
            - https://www.pointfree.co/collections/protocol-witnesses
            - Dependencies Library: https://github.com/pointfreeco/swift-dependencies
        - Protocol Witnesses Introduction by NSScreencast
            - https://nsscreencast.com/episodes/486-codable-witnesses-1
        - SwiftData management
- Dependency management tips
    - Don’t be too dependent 
        - Kotaro’s story about XLForm
    - Think carefully about letting your “moat” be dependent on a third-party API
        - e.g. DividentCalc
        - What are your options for platform changes?
    - Fork/mirror third-party SPMs and Pods
        - https://github.com/apple/swift-evolution/blob/main/proposals/0219-package-manager-dependency-mirroring.md
        - https://www.sonatype.com/products/sonatype-nexus-oss-download (cocoapods)
- Off Topic: Auto generating acknowledgements
    - SwiftyStack
        -  https://www.swiftystack.com
    - AcknowList
        - https://swiftpackageregistry.com/vtourraine/AcknowList
- Wrap-Up & thanks!

*Intro music: "When I Hit the Floor", © 2021 Lorne Behrman. Used with permission of the artist.*