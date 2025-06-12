document.addEventListener('DOMContentLoaded', () => {
    const topicInput = document.getElementById('topic');
    const poemTypeSelect = document.getElementById('poemType');
    const generateBtn = document.getElementById('generateBtn');
    const poemOutputDiv = document.getElementById('poemOutput');

    // (More advanced generation can be added later)
    const sarcasticLimerickTemplates = [
        (topic) => `Young ${topic}, so grand and so bold,
Whose story, I'm sure, must be told.
With flair and with grace,
Tripped flat on its face,
A tale that will never get old.`,
        (topic) => `The ${topic}, a creature of might,
Thought its intellect uniquely bright.
It pondered all day,
Then had nothing to say,
Which, frankly, just feels about right.`,
        (topic) => `A ${topic} with dreams oh so high,
Reached for stars in the vast, endless sky.
It achieved very little,
And then ate some skittles,
And then let out a pitiful cry.`,
        (topic) => `That ${topic}, so clever and keen,
The smartest we've ever all seen.
It solved world peace twice,
Gave the best life advice,
Then woke up, it was all just a dream.`,
        (topic) => `Sir ${topic} of local renown,
Wore a permanent, judgmental frown.
"It's all wrong!" he'd declare,
With a toss of his hair,
The most popular grump in the town.`
    ];

    const sarcasticHaikuTemplates = [
        (topic) => `Oh, look, ${topic} now,
Profound thoughts, or just a meow?
Hard to tell, sometimes.`,
        (topic) => `The ${topic} appears,
World waits, breath held, full of hope...
Never mind, it's gone.`,
        (topic) => `${topic} strives so hard,
For what purpose, who can say?
Still, it tries. Bless it.`,
        (topic) => `Ah, ${topic}, it's here.
Such excitement, much fanfare.
...Or is that just wind?`,
        (topic) => `Behold, ${topic}'s way,
Truly unique, one expects.
Just like all the rest.`
    ];

    function generateLimerick(topic) {
        if (!topic) topic = "something"; // Default topic
        const randomIndex = Math.floor(Math.random() * sarcasticLimerickTemplates.length);
        return sarcasticLimerickTemplates[randomIndex](topic);
    }

    function generateHaiku(topic) {
        if (!topic) topic = "nothing"; // Default topic
        const randomIndex = Math.floor(Math.random() * sarcasticHaikuTemplates.length);
        return sarcasticHaikuTemplates[randomIndex](topic);
    }

    generateBtn.addEventListener('click', () => {
        const topic = topicInput.value.trim() || "the void"; // Use "the void" if topic is empty
        const poemType = poemTypeSelect.value;
        let poem = "";

        if (poemType === 'limerick') {
            poem = generateLimerick(topic);
        } else if (poemType === 'haiku') {
            poem = generateHaiku(topic);
        }

        poemOutputDiv.textContent = poem;
    });

    // Generate a poem on initial load as an example
    poemOutputDiv.textContent = generateLimerick(topicInput.value.trim() || "cats");
});
