function startGame() {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
}

const questionSections = {
    "Deep & Mindful": [
        // Soft-launch deep
        "What’s a habit you picked up from someone you don’t talk to anymore?",
        "What’s something you used to judge people for that you don’t anymore?",
        "What kind of compliment do you remember years later?",
        "What’s a small moment that made you feel weirdly proud of yourself?",
        "What’s something you care about way more than people expect you to?",
        // Mind-exploring
        "When you’re overwhelmed, do you isolate or get louder?",
        "Do you think you’re more like your younger self or less like them now?",
        "What’s something you’re still unlearning?",
        "What kind of person do you feel safest being?",
        "What’s a version of you that only certain people get to see?",
        // Slightly unhinged but good
        "What’s a hill you’ll die on that doesn’t actually matter?",
        "What’s a personality trait you have that would be annoying to date?",
        "What’s something you pretend not to care about but totally do?",
        "If someone described you wrong, what would bother you most?"
    ],
    "Funny & Unhinged": [
        "What’s the dumbest fight you’ve ever gotten into?",
        "If you had to survive a zombie apocalypse with one random item in your room, what is it and why?",
        "What’s the weirdest thing you’ve done for a dare or a bet?",
        "If your life had a theme song whenever you entered a room, what would it be?",
        "Have you ever laughed so hard you cried at something completely stupid?"
    ],
    "Memory & Cherished": [
        "What’s a random memory that makes you smile even if it was awkward at the time?",
        "What’s the first memory you can actually remember clearly?",
        "Is there a “secret happy place” memory that you think about when stressed?",
        "Which friendship or moment from childhood do you wish you could relive for a day?",
        "Have you ever kept a memory just because it’s funny or ridiculous, not meaningful?",
        "What’s a random memory that lives in your head rent-free?",
        "What’s the most “out of character” thing you’ve ever done?",
        "When was the last time you surprised yourself?",
        "What’s a moment that felt small then but big later?"
    ],
    "Exes & Dating": [
        "What’s the weirdest reason a past relationship ended?",
        "Have you ever stayed friends with an ex? If yes, how’s that going?",
        "What’s the most “that was a mistake” dating moment you’ve had?",
        "Would you ever date someone from your past again if everything lined up?",
        "What’s the thing you learned about yourself from an ex that stuck with you?"
    ],
    "Crazy & Adventurous": [
        "Have you ever done something completely illegal or wild just for fun?",
        "What’s the most spontaneous thing you’ve ever done?",
        "If you could erase one embarrassing memory, would you? Which one?",
        "Ever done something you immediately regretted but can laugh about now?",
        "Would you ever go on a “dangerous adventure” with no plan?"
    ],
    "Sexual & Unexpected": [
        "What’s the kinkiest thing you’ve done or want to try?",
        "Ever had a crush on someone completely inappropriate?",
        "Have you ever sexted someone by accident or shame?",
        "Anal—ever done it, would you, thoughts?",
        "If you could make a sexual experiment completely risk-free, what would it be?",
        "Weirdest place you’ve ever hooked up or thought about hooking up?"
    ]
};

let currentSection = [];
let currentIndex = 0;

function selectSection(sectionName) {
    currentSection = questionSections[sectionName];
    currentIndex = 0;
    document.getElementById("question-text").textContent = currentSection[currentIndex];
}

document.getElementById("next-btn").addEventListener("click", () => {
    if(currentSection.length === 0) return; // nothing selected yet
    currentIndex = (currentIndex + 1) % currentSection.length;
    document.getElementById("question-text").textContent = currentSection[currentIndex];
});
