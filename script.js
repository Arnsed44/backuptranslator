const translations = {
    "abais": "but",
    "aktion": "action",
    "albiner": "white",
    "apolies": "sorry",
    "ba": " (question marker)",
    "baksu": "box",
    "baksu": "boxes",
    "bévakoof": "stupid/insane/crazy",
    "béyâhend": "okay/affirmative",
    "blemiken": "speak",
    "bligau": "blue",
    "boissonus": "drink",
    "boissonen": "drink (verb)",
    "bom": "good",
    "bomer": "love",
    "bonat": "gift",
    "buhdich": "dumb/crazy/stupid",
    "centrum": "I/me",
    "cerebrent": "know",
    "cerebrum": "brain",
    "cha": "coffee",
    "chay": "something/thing",
    "chistando": "joke",
    "chukas": "cat",
    "dawr": "role/function",
    "daz": "that",
    "degistermen": "change",
    "direken": "tell/say",
    "diktonary": "dictionary",
    "diz": "this",
    "donem": "give",
    "dormiren": "sleep",
    "durbius": "animal",
    "dzai": "is in/is on",
    "dzwo": "left",
    "e": "and",
    "ego": "I/me",
    "en": "in",
    "equival": "equal",
    "ergo": "so/therefore",
    "exlirent": "explain",
    "fache": "do",
    "fazen": "make",
    "feminas": "woman/women",
    "folaaz": "metal",
    "folaazpersone": "robot/bot",
    "fransosik": "france/french",
    "genus": "gender",
    "ghurfa": "room",
    "go": "I/me",
    "granda": "very",
    "gratien": "thanks",
    "haiben": "have",
    "halo": "hello",
    "hamborgar": "hamburger/burger",
    "hic": "here",
    "hicsolum": "today",
    "homo": "same",
    "homoparole": "homonym",
    "homosignum": "synonym",
    "imaj": "image",
    "ind": "have",
    "inglisik": "English/england",
    "intelgenri": "smart",
    "intapole": "secret/information",
    "ist": "is/are",
    "italiski": "Italy/Italian",
    "jeulo": "yellow",
    "kayen": "can",
    "ke": "what",
    "keken": "laugh",
    "ke tal": "whats up",
    "keyöntemus": "how/what way",
    "keyuzwo": "with/besides/next to",
    "komorenden": "understand",
    "kribân": "soon",
    "kulora": "colour",
    "laterin": "toilet",
    "lii": "inside",
    "lingue": "language",
    "lun": "moon",
    "lunum": "night",
    "marok": "Morocco",
    "marokan": "Moroccan",
    "maskulinas": "man/men",
    "me": "shows it is directed to me",
    "monomus": "only",
    "mort": "dead",
    "morten": "kill",
    "mui": "very",
    "nain": "no",
    "naint": "not",
    "nainbom": "bad",
    "nainchay": "nothing",
    "nainthomo": "different",
    "nazion": "nation",
    "nôchüch": "annoying",
    "noi": "we/us",
    "nomus": "name",
    "noven": "new",
    "numerus": "number",
    "omni": "every/all",
    "omniblemiken": "announce",
    "omniblemikus": "announcement",
    "omnipersoni": "everyone",
    "onnoek": "genderless/neuter/of unknown gender",
    "oranj": "orange",
    "ow": "or",
    "parole": "word",
    "pensen": "think",
    "per": "to",
    "perr": "too",
    "personepumilus": "poll/people’s choice",
    "persone": "people/person",
    "pien": "because",
    "pizza": "pizza",
    "praesen": "present",
    "prochrono": "put it in front of the verb for future tense",
    "pumilen": "choose",
    "pumilus": "choice",
    "quanchrono": "when",
    "quus": "any/who",
    "reglus": "rule",
    "retrochrono": "put it in front of the verb for past tense",
    "reuteret": "again",
    "route": "red",
    "se": "show it is directed to them",
    "sang": "up",
    "sangaktiven": "fun",
    "sangchay": "important/importance",
    "shangaro": "angel",
    "shishten": "poop",
    "shworz": "black",
    "shworza": "black coffee",
    "signum": "meaning",
    "sol": "sun",
    "solsang": "sunrise",
    "solsya": "sunset",
    "solum": "day",
    "sum": "am",
    "susaly": "auto/self",
    "sya": "down",
    "syaaktiven": "bored",
    "te": "shows it is directed to you",
    "tu": "you",
    "tuf": "apple",
    "urinam": "urinate/pee",
    "usa": "use",
    "vescum": "eat",
    "viden": "see",
    "vïowl": "purple",
    "vocarus": "voice",
    "vor": "for",
    "vorke": "why",
    "volerem": "want/desire",
    "vruncha": "green tea",
    "vrün": "green",
    "wilkvenden": "welcome",
    "woru": "tired",
    "yönetmekus": "administrator",
    "yönetmen": "administrate",
    "yöntemus": "method/way",
    "you": "right",
    "za": "tea",
    "zi": "yes"
};

// Gender categorization based on definitions
const genderArticles = {
    "human": "li", // Human/person
    "animal": "lu", // Animal
    "object": "le", // Object
    "other": "les"  // Other
};

// Function to translate from Interpolater English to English
function translateToEnglish(text) {
    const words = text.split(/\s+/);
    const translatedWords = words.map(word => translations[word] || word);
    return translatedWords.join(' ');
}

// Function to translate from English to Interpolater English
function translateToInterpolator(text) {
    const reversedTranslations = Object.fromEntries(Object.entries(translations).map(([k, v]) => [v, k]));
    const words = text.split(/\s+/);
    const translatedWords = words.map(word => reversedTranslations[word] || word);
    return translatedWords.join(' ');
}

// Function to handle verb conjugation
function conjugateVerb(verb, subject) {
    if (subject === "I") {
        return verb + "-o"; // I
    } else if (subject === "you") {
        return verb + "-s"; // you
    } else if (subject === "he" || subject === "she" || subject === "it") {
        return verb + "-t"; // he/she/it
    } else if (subject === "we") {
        return verb + "-nos"; // we
    } else if (subject === "you plural") {
        return verb + "-tis"; // you (plural)
    } else if (subject === "they") {
        return verb + "-nt"; // they
    }
    return verb; // return the verb unchanged if no subject matches
}

// Function to pluralize nouns
function pluralizeNoun(noun) {
    return noun + "i"; // Add -i for plural
}

// Function to get the appropriate article based on gender
function getArticle(word) {
    // Check the definition to determine the gender category
    const definition = translations[word];
    
    if (definition) {
        if (definition.includes("human") || definition.includes("woman") || definition.includes("man")) {
            return genderArticles.human; // Human/person
        } else if (definition.includes("animal")) {
            return genderArticles.animal; // Animal
        } else if (definition.includes("object")) {
            return genderArticles.object; // Object
        } else {
            return genderArticles.other; // Other
        }
    }
    return genderArticles.other; // Default to "other" if no definition found
}

document.getElementById('translateToEnglishButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputText = translateToEnglish(inputText);
    document.getElementById('outputText').value = outputText;
});

document.getElementById('translateToInterpolatorButton').addEventListener('click', () => {
    const inputTextEnglish = document.getElementById('inputTextEnglish').value;
    const outputTextInterpolator = translateToInterpolator(inputTextEnglish);
    document.getElementById('outputTextInterpolator').value = outputTextInterpolator;
});
