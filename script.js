function startGame() {
    document.getElementById("intro-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
}

const questionSections = {
    "Deep & Mindful": [
        "What’s a habit you picked up from someone you don’t talk to anymore?",
        "What’s something you used to judge people for that you don’t anymore?",
        "What kind of compliment do you remember years later?",
        "What’s a small moment that made you feel weirdly proud of yourself?",
        "What’s something you care about way more than people expect you to?",
        "When you’re overwhelmed, do you isolate or get louder?",
        "Do you think you’re more like your younger self or less like them now?",
        "What’s something you’re still unlearning?",
        "What’s a version of you that only certain people get to see?",
        "What’s a personality trait you have that would be annoying to date?",
        "If someone described you wrong, what would bother you most?"
        "Do you think destiny is real?",
        "Do you trust people easily?",
        "What’s a fear of yours in relationships?",
        "Growing up, were you closer to your mum or your dad?",
        "What’s one thing you like about me the most?"
    ],
    "Funny & Unhinged": [
        "What’s the dumbest fight you’ve ever gotten into?",
        "If you had to survive a zombie apocalypse with one random item in your room, what is it and why?",
        "What’s the weirdest thing you’ve done for a dare or a bet?",
        "If your life had a theme song whenever you entered a room, what would it be?",
        "Have you ever laughed so hard you cried at something completely stupid?"
        "Who is the most annoying member of your family and why?",
        "Would you rather let me choose your outfit for a week or decide your next haircut?",
        "Would you rather be mildly embarrassed forever or deeply embarrassed once in front of everyone you know?",
        "Would you rather always overshare or never explain yourself?"
    ],
    "Memory & Cherished": [
        "What’s a random memory that makes you smile even if it was awkward at the time?",
        "What’s the first memory you can actually remember clearly?",
        "Is there a secret happy place memory you think about when stressed?",
        "Which friendship or moment from childhood do you wish you could relive for a day?",
        "Have you ever kept a memory just because it’s funny or ridiculous?",
        "What’s a random memory that lives in your head rent-free?",
        "What’s the most out of character thing you’ve ever done?",
        "When was the last time you surprised yourself?",
        "Songs that make you emotional?",
        "What’s the first thing you noticed about me?"
    ],
    "Exes & Dating": [
        "What’s the weirdest reason a past relationship ended?",
        "Have you ever stayed friends with an ex?",
        "What’s the most 'that was a mistake' dating moment you’ve had?",
        "What’s something you learned about yourself from an ex?"
        "Would you rather spend a night cuddling or a night talking deeply?",
        "Would you rather have true love with a guaranteed broken heart or never love at all?",
        "How many people have you kissed?",
        "Where do you like to be kissed?"
        "Would you ever date someone from your past again if everything lined up?",
    ],
    "Crazy & Adventurous": [
        "Have you ever done something completely illegal or wild just for fun?",
        "What’s the most spontaneous thing you’ve ever done?",
        "If you could erase one embarrassing memory, would you?",
        "Ever done something you immediately regretted but can laugh about now?",
        "Would you ever go on a dangerous adventure with no plan?"
        "Would you rather disappear for a year or have everyone know everything about you?",
        "If you could restart one year of your life, would you?"
    ],
    "Sexual & Unexpected": [
        "What’s the kinkiest thing you’ve done or want to try?",
        "Anal—ever done it, would you, thoughts?",
        "If you could make a sexual experiment completely risk-free, what would it be?",
        "Weirdest place you’ve ever hooked up or thought about hooking up?"
        "One sex act you never want to try again?",
        "Would you play strip poker?",
        "Have you had sex to music? Which songs?",
        "What’s an instant turn-on for you?",
        "If you had the opportunity, would you be a sugar baby?",
        "Ever used food during intimate acts?",
        "Most embarrassing thing you’ve done during or for sex?",
        "Ever filmed during sex or would you want to?",
        "Sex in the morning or at night?",
        "Where in the world would you want to do intimate things?"
    ]
};

let currentSection = [];
let currentIndex = 0;

function selectSection(sectionName) {
    currentSection = questionSections[sectionName];
    currentIndex = 0;
    document.getElementById("question-text").textContent = currentSection[0];
}

document.getElementById("next-btn").addEventListener("click", () => {
    if (currentSection.length === 0) return;
    currentIndex = (currentIndex + 1) % currentSection.length;
    document.getElementById("question-text").textContent = currentSection[currentIndex];
});
