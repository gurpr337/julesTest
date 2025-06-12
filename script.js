document.addEventListener('DOMContentLoaded', () => {
    const topicInput = document.getElementById('topic');
    const poemTypeSelect = document.getElementById('poemType');
    const generateBtn = document.getElementById('generateBtn');
    const poemOutputDiv = document.getElementById('poemOutput');

    // --- Word Lists ---

    // General Sarcastic Words
    const sarcastic_adj = ["thrilling", "vital", "brilliant", "riveting", "stunning", "meh", "so-called", "alleged", "dubious", "fascinating", "electrifying", "game-changing", "mind-blowing"];
    const sarcastic_nouns = ["genius", "expert", "masterpiece", "revelation", "triumph", "thingy", "doodad", "gizmo", "innovation", "paradigm-shift"];
    const sarcastic_verbs_past = ["adored", "praised", "revealed", "pondered", "solved", "attempted", "endeavored", "explored", "achieved", "discovered"];
    const sarcastic_adv = ["truly", "deeply", "clearly", "obviously", "incredibly", "shockingly", "surprisingly", "profoundly", "exceptionally"];
    const sarcastic_places = ["Wonderland", "Oz", "Narnia", "Cyberspace", "The Void", "The Office", "The Internet", "My Brain"];

    // Limerick Rhyming Sets (AABBA)
    // Each set has 'a_rhymes' and 'b_rhymes' which are arrays of [word1, word2] that rhyme.
    // We'll pick one 'a_rhyme_pair' and one 'b_rhyme_pair' for a limerick.
    const limerick_rhyme_sets = [
        { // Set 1
            a_rhymes: [["bold", "old"], ["bright", "light"], ["keen", "seen"], ["great", "fate"]],
            b_rhymes: [["day", "play"], ["night", "fright"], ["way", "say"]]
        },
        { // Set 2
            a_rhymes: [["wise", "eyes"], ["cool", "pool"], ["grand", "hand"], ["new", "view"]],
            b_rhymes: [["fun", "sun"], ["blue", "true"], ["small", "wall"]]
        }
    ];

    // Haiku Word Lists (syllable-conscious)
    const haiku_adj_s = ["smug", "dim", "drab", "odd", "vast", "bleak", "droll", "glib", "swift", "dark"]; // 1-2 syl
    const haiku_adj_l = ["boring", "tedious", "clever", "pointless", "absurd", "mundane", "pathetic", "confused"]; // 2-3 syl
    const haiku_noun_s = ["cat", "dog", "job", "task", "code", "bug", "fad", "void", "dud", "stuff", "rock"]; // 1-2 syl
    const haiku_noun_l = ["problem", "solution", "effort", "nonsense", "silence", "echo", "illusion", "mystery"]; // 2-3 syl
    const haiku_verb_s = ["runs", "sees", "tries", "fails", "yawns", "waits", "hopes", "sits", "sleeps"]; // 1 syl (present)
    const haiku_verb_l = ["ponders", "ignores", "considers", "forgets", "expects", "observes", "reflects"]; // 2 syl (present)
    const haiku_adv_l = ["truly", "sadly", "merrily", "clearly", "perhaps", "quietly", "slowly"]; // 2-3 syl
    const haiku_prep_1_syl = ["on", "in", "at", "with", "by", "for", "from", "near", "past"];
    const haiku_det_1_syl = ["the", "a", "an", "my", "its", "one", "yon"];


    // --- Helper Function ---
    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // --- Limerick Structures & Generation ---
    // Simplified structure for initial implementation
    const limerickStructures = [
        (topic, rhymes) => { // L1
            const a_pair = getRandomElement(rhymes.a_rhymes);
            const b_pair = getRandomElement(rhymes.b_rhymes);
            return `There once was a ${topic} so ${a_pair[0]},
Whose ${getRandomElement(sarcastic_nouns)} was ${getRandomElement(sarcastic_adj)} and ${a_pair[1]}.
It would ${getRandomElement(sarcastic_verbs_past)} all ${b_pair[0]},
With ${getRandomElement(sarcastic_adj)} ${getRandomElement(sarcastic_nouns)},
That ${getRandomElement(sarcastic_adj)} ${topic}, oh what a ${b_pair[1]}!`;
        },
        (topic, rhymes) => { // L2
            const a_pair = getRandomElement(rhymes.a_rhymes);
            const b_pair = getRandomElement(rhymes.b_rhymes);
            return `A ${getRandomElement(sarcastic_adj)} ${topic} from ${getRandomElement(sarcastic_places)},
Had a ${a_pair[0]} look on its ${a_pair[1]} face.
It ${getRandomElement(sarcastic_verbs_past)} ${getRandomElement(sarcastic_adv)},
And ${getRandomElement(sarcastic_verbs_past)} quite ${b_pair[0]},
What a ${getRandomElement(sarcastic_adj)} ${topic}, such a strange ${b_pair[1]}.`;
        }
    ];

    function generateLimerick(topic) {
        if (!topic) topic = "thing";
        const selectedRhymes = getRandomElement(limerick_rhyme_sets);
        const structure = getRandomElement(limerickStructures);
        return structure(topic, selectedRhymes);
    }

    // --- Haiku Structures & Generation ---
    // Simplified structures for initial implementation
    const haikuStructures = [
        (topic) => { // H1
            return `${topic} ${getRandomElement(haiku_verb_s)} ${getRandomElement(haiku_prep_1_syl)} ${getRandomElement(haiku_noun_s)}.
${getRandomElement(haiku_adv_l)} it ${getRandomElement(haiku_verb_l)} things.
Such ${getRandomElement(haiku_adj_s)}, ${getRandomElement(haiku_adj_s)} ${getRandomElement(haiku_noun_s)}.`;
        },
        (topic) => { // H2
            return `The ${getRandomElement(haiku_adj_s)} ${topic} ${getRandomElement(haiku_verb_s)}.
It ${getRandomElement(haiku_verb_s)} ${getRandomElement(haiku_prep_1_syl)} ${getRandomElement(haiku_det_1_syl)} ${getRandomElement(haiku_adj_l)} ${getRandomElement(haiku_noun_s)}.
${topic} just ${getRandomElement(haiku_verb_s)} on.`;
        }
    ];

    function generateHaiku(topic) {
        if (!topic) topic = "it";
        const structure = getRandomElement(haikuStructures);
        return structure(topic);
    }

    // --- Event Listener & Initial Call ---
    generateBtn.addEventListener('click', () => {
        const topic = topicInput.value.trim() || "the void";
        const poemType = poemTypeSelect.value;
        let poem = "";

        if (poemType === 'limerick') {
            poem = generateLimerick(topic);
        } else if (poemType === 'haiku') {
            poem = generateHaiku(topic);
        }
        poemOutputDiv.textContent = poem;
    });

    // Generate a poem on initial load
    poemOutputDiv.textContent = generateLimerick(topicInput.value.trim() || "the example");
});
