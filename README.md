**Welcome to the Siege**

*Relevant Technologies*
1. JavaScript: The Internet's most widespread front-end scripting language. (No relation to the general-purpose language Java.)
2. JQuery: The JavaScript used in this application is not strictly 'Vanilla', and implements the popular library JQuery, which prior to the release of JavaScript ES6 supplied a variety of useful syntactic and functional shortcuts, and continues to be useful in some contexts. The JQuery documentation is available at
* _FUTURE:_ JQuery Easing Plugin v1.3: Included for purposes of further development, in addition to the core JQuery library, is the Easing Plugin, which expands the functionality of JQuery's animation methods by allowing more fine-grained customization of movement paths.
3. HyperText Markup Language (HTML): The user-facing lingua franca of webpages, a single string of closed and nested tags describing the division and contents of documents served by browsers.
4. Cascading Style Sheets (CSS): CSS provides consolidated, flexible document styling, promoting the reusability of styles and avoidance of repetition as well as simplifying HTML builds.

*To Open Game*
Open jericho/index.html in your browser. (Google Chrome is highly recommended.) You will be prompted to choose to either ATTACK or DEFEND; the computer will play the opposing position.

*Build Approach*
Some salient features of my build approach include:
- Object-oriented: Division of functionality and user story responsibilities between classes and files serving to define 'natural' objects in the logical schematism of game flow
- Logic first: Since the logic of a turn-based game involving user choice of side and a computer player was an extensive challenge relative to my development experience to date, my first step and primary focus was on dividing responsibilities between classes, determining their requisite (inter)dependencies, and establishing the flow of important game information between components.
- A 'more or less global' state: Despite the object-oriented character of my approach, it ultimately became necessary for most files and classes to be initialized with extensive information about and access to each other's states and methods.
- Signal passing to maintain turn structure: Many of the methods involved in managing and advancing gameplay are connected by returns, parameters, and conditional testing of the single-character strings 'A' and 'D' (ATTACKER and DEFENDER), which by alternating at key points in the control flow inform other components of the game as to whose turn it is and what functionalities and rendering should therefore be called by the 'computer player' or made available to the user.

*Unsolved Problems, Difficulties, etc.*
Animating projectile attacks with variable start points and a fixed end point, and vice-versa, as required for arrow volleys between the defender and attacker proved inconsistent with a turn/movement progression based on a global state of steps-remaining. This, as well as the styling and animation layer more generally, was much worsened by unforeseen out-of-band circumstances encountered in development.* The final interval of most games (between attacker and defender meeting at the wall, and one of the sides defeating the other) displays variable broken behaviors; I have multiple paths to resolving this instability and will choose and implement one in the next phase of this application's development.

*Future Features*
Boiling oil! Final battle! Projectile paths that make sense! Display styling that doesn't look like your 6y/o made it with construction paper, blunt scissors, and a ballpoint pen! Stay tuned, folks.

*My charger broke and I was in a wedding. Both of these things managed to coincide with project week and Mercury wasn't even in retrograde yet. I also admittedly bit off more than I could chew to begin with. Sorry it looks like crap and doesn't work well, but hopefully the code shows that I nonetheless put a great deal of thought into how it works.
