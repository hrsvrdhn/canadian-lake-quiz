// === DATA ===
// The joke: real Canadian lake names sound so absurd that players mistake them for fakes.
// Fakes sound boringly normal — the "obviously normal" one IS the trap.

const REAL_LAKES = [
    // Self-referential / meta (these are ALL real)
    "Nameless Lake", "Lost Lake", "Little Lake", "Long Lake",
    "Round Lake", "Cold Lake", "Last Mountain Lake",

    // Emotions / states
    "Stupid Lake", "Disappointment Lake", "Lonely Lake",
    "Patience Lake", "Good Spirit Lake", "Surprise Lake",
    "Despair Lake", "Misery Lake",

    // Dark / ominous / violent
    "Skeleton Lake", "Ghost Lake", "Skull Lake", "Driedmeat Lake",
    "Artillery Lake", "Rattlesnake Lake", "Windigo Lake", "Firedrake Lake",
    "Starvation Lake", "Murder Lake", "Dead Man Lake", "Tombstone Lake",
    "Deadman Lake", "Poison Lake",

    // Body parts / physical
    "Eyebrow Lake", "Knee Lake", "Elbow Lake", "Brokenleg Lake",
    "Finger Lake", "Thumb Lake",

    // Food / drink
    "Pickle Lake", "Onion Lake", "Chicken Lake", "Nut Lake",
    "Egg Lake", "Foam Lake", "Cranberry Lake", "Butter Lake",
    "Pancake Lake",

    // Sounds / exclamations
    "Wawa Lake", "Squeah Lake", "Poum Lake", "Tumtum Lake",
    "Ha Ha Lake",

    // Random objects / absurd
    "Boot Lake", "Chip Lake", "Smoke Lake", "Candle Lake",
    "Drag Lake", "Snare Lake", "Split Lake",

    // Mystical / supernatural
    "Wizard Lake", "Gods Lake", "Lac du Fou", "Lac Sauvage",
    "Angikuni Lake", "Spirit Lake",

    // Sounds like something else
    "Costalot Lake", "Hottah Lake", "Peerless Lake",
    "Calling Lake", "Spotted Lake",

    // French names that translate hilariously
    "Lac du Bonnet", "Lac aux Biscuits", "Lac des Chicots",
    "Lacs des Loups Marins", "Lac des Seize Iles",

    // Just plain weird / unpronounceable
    "Pekwachnamaykoskwaskwaypinwanik Lake", "Quidi Vidi Lake",
    "Wunnummin Lake", "Lake Athapapuskow", "Kashwakamak Lake",
    "Kabinakagami Lake", "Kamilukuak Lake", "Pekisko Lake",
    "Kaminiskeg Lake",

    // Contradictory / confusing
    "Blue Sea Lake", "Thirty Island Lake", "Crooked Lake",
    "Big Muddy Lake", "Half Moon Lake", "Four Mile Lake",
    "Upper Dumbell Lake",

    // Names that sound too mundane to be real
    "Molson Lake", "Dog Lake", "Mud Lake", "Scum Lake",
    "Mess Lake", "Bughouse Lake", "Jack Shark Lake",
    "Squint Lake",

    // More verified weird ones
    "Frog Lake", "Moose Lake", "Pelican Lake", "Falcon Lake",
    "Pigeon Lake", "Buffalo Lake", "Jackfish Lake", "Gull Lake",

    // Well-known but unusual
    "Lake of the Woods", "Lac La Biche", "Reindeer Lake",
    "Great Slave Lake", "Red Indian Lake", "Bras d'Or Lake",
    "Lake Winnipegosis", "Lac Ile-a-la-Crosse",

    // Obscure weird real names
    "Smoothwater Lake", "Shining Tree Lake", "White Otter Lake",
    "Brightsand Lake", "Clearwater Lake", "Snowbird Lake",
    "Playgreen Lake", "Cultus Lake", "Rainy Lake",
    "Shadow Lake", "Bark Lake", "Star Lake",

    // More absurd real ones
    "Lac 3.1416", "Mistake Lake", "Problem Lake",
    "Useless Lake", "Nothing Lake", "Zero Lake",
    "Why Not Lake", "No Good Lake",

    // Even more weird verified names
    "Stony Lake", "Rice Lake", "Sandy Lake",
    "West Hawk Lake", "Bon Echo Lake", "Lake Panache",
    "Obabika Lake", "Kukagami Lake", "Biscotasi Lake",
    "Ivanhoe Lake", "Lady Evelyn Lake", "Peter Pond Lake",

    // Additional absurd real names
    "Manigotagan Lake", "Bloodvein Lake", "Flatrock Lake",
    "God's Lake", "Devil Lake", "Hell Diver Lake",
    "Spooky Lake", "Peculiar Lake", "Odd Lake",
    "One Island Lake", "Three Duck Lake",
    "Seven Persons Lake", "Medicine Lake",
    "Whitemouth Lake", "Shoal Lake", "Poplar Lake",
    "Telegraph Lake", "Telephone Lake", "Portage Lake",

    // More unbelievable real names
    "Flin Flon Lake", "Paint Lake", "Wekusko Lake",
    "Tramping Lake", "Fishing Lake", "Hunting Lake",
    "Quill Lake", "Dipper Lake", "Cradle Lake",
    "Coffin Lake", "Grave Lake", "Funeral Lake"
];

const FAKE_LAKES = [
    // TIER 1: Normal/boring (~30%) - the original "too reasonable" trap
    "Birchwood Lake", "Maplecrest Lake", "Cedarview Lake",
    "Pinehurst Lake", "Oakridge Lake", "Elmwood Lake",
    "Willowdale Lake", "Sprucewood Lake", "Ashburn Lake",
    "Beechgrove Lake", "Ferndale Lake", "Thornbury Lake",
    "Rosewood Lake", "Hillcrest Lake", "Ridgewood Lake",
    "Brookfield Lake", "Millbrook Lake", "Stonegate Lake",
    "Lac Bellevue", "Lac Beaumont", "Lac Fontaine",
    "Lac Montagne", "Lac Chapelle", "Lac Bellerive",
    "Lac Hauteville", "Lac Grandbois", "Lac Clairville",
    "Trillium Lake", "Juniper Lake", "Hemlock Lake",
    "Magnolia Lake", "Primrose Lake", "Bluebell Lake",
    "Henderson Lake", "MacPherson Lake", "Robertson Lake",

    // TIER 2: Slightly weird (~35%) - odd but plausible, could go either way
    "Thundermoss Lake", "Sinkhole Lake", "Stumpcutter Lake",
    "Blackfly Lake", "Notrail Lake", "Lostboot Lake",
    "Coldfoot Lake", "Muddypaw Lake", "Brokenpole Lake",
    "Rockspit Lake", "Burnt Stump Lake", "Flatbog Lake",
    "Lonesome Marsh Lake", "Crowfoot Lake", "Driftlog Lake",
    "Wetrock Lake", "Greywater Lake", "Darkpine Lake",
    "Tanglewood Lake", "Snowdrift Lake", "Ironbog Lake",
    "Deadfall Lake", "Swamphen Lake", "Muckwater Lake",
    "Lac du Brouillard", "Lac Perdu", "Lac Moustique",
    "Lac Noir-Fond", "Lac Mauvais Pas", "Lac Brulot",
    "Lac Froidmont", "Lac Boue Noire", "Lac Tonnerre",
    "Wolfjaw Lake", "Bearslide Lake", "Moosejaw Lake",
    "Crookedtree Lake", "Hardscrabble Lake", "Blistered Lake",
    "Fogbound Lake", "Rubble Lake", "Sliprock Lake",
    "Waspnest Lake", "Hookjaw Lake",

    // TIER 3: Genuinely absurd (~35%) - mimics the real weird ones so player can't tell
    "Regret Lake", "Whoops Lake", "Nope Lake",
    "Forgot Lake", "Oops Lake", "Denial Lake",
    "Tantrum Lake", "Hiccup Lake", "Stubbed Toe Lake",
    "Lac du Ridicule", "Lac Pourquoi", "Lac Sans Raison",
    "Lac de la Confusion", "Lac Oublié", "Lac Catastrophe",
    "Nocanoe Lake", "Nothere Lake", "Lostcause Lake",
    "Goback Lake", "Toofarout Lake", "Whybother Lake",
    "Wrong Turn Lake", "Bad Idea Lake", "Never Again Lake",
    "Spilled Lake", "Upside Down Lake", "Backwards Lake",
    "Three Halves Lake", "Almost Lake", "Maybe Lake",
    "Probably Not Lake", "Questionmark Lake", "Dunno Lake",
    "Soggy Sock Lake", "Cold Supper Lake", "Burnt Toast Lake",
    "Left Behind Lake", "Gone Wrong Lake", "Last Straw Lake",
    "Toofar Lake", "Nofish Lake", "Nofun Lake",
    "Gave Up Lake", "Shouldnt Lake", "Wishwasnt Lake"
];

// === GAME STATE ===

let state = {
    score: 0,
    lives: 3,
    streak: 0,
    bestStreak: 0,
    questionNum: 0,
    usedReal: new Set(),
    usedFake: new Set(),
    currentQuestion: null,
    answered: false
};

// === DOM REFS ===

const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    gameover: document.getElementById('gameover-screen')
};

const els = {
    startBtn: document.getElementById('start-btn'),
    nextBtn: document.getElementById('next-btn'),
    restartBtn: document.getElementById('restart-btn'),
    options: document.querySelectorAll('.option-btn'),
    lives: document.getElementById('lives'),
    score: document.getElementById('score'),
    streak: document.getElementById('streak'),
    questionNum: document.getElementById('question-num'),
    finalScore: document.getElementById('final-score'),
    finalTotal: document.getElementById('final-total'),
    bestStreak: document.getElementById('best-streak'),
    gameoverTitle: document.getElementById('gameover-title')
};

// === SCREEN MANAGEMENT ===

function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');
}

// === GAME LOGIC ===

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getRandomFromPool(pool, usedSet, count) {
    const available = pool.filter((_, i) => !usedSet.has(i));
    if (available.length < count) {
        // Reset pool if exhausted
        usedSet.clear();
        return getRandomFromPoolInternal(pool, usedSet, count);
    }
    return getRandomFromPoolInternal(pool, usedSet, count);
}

function getRandomFromPoolInternal(pool, usedSet, count) {
    const availableIndices = [];
    for (let i = 0; i < pool.length; i++) {
        if (!usedSet.has(i)) availableIndices.push(i);
    }
    shuffleArray(availableIndices);
    const selected = [];
    for (let i = 0; i < count && i < availableIndices.length; i++) {
        const idx = availableIndices[i];
        usedSet.add(idx);
        selected.push(pool[idx]);
    }
    return selected;
}

function generateQuestion() {
    const realLakes = getRandomFromPool(REAL_LAKES, state.usedReal, 3);
    const fakeLakes = getRandomFromPool(FAKE_LAKES, state.usedFake, 1);
    const fakeLake = fakeLakes[0];

    // Place fake at random position
    const fakePosition = Math.floor(Math.random() * 4);
    const options = [];
    let realIdx = 0;

    for (let i = 0; i < 4; i++) {
        if (i === fakePosition) {
            options.push(fakeLake);
        } else {
            options.push(realLakes[realIdx++]);
        }
    }

    return { options, fakeIndex: fakePosition, fakeName: fakeLake };
}

function startGame() {
    state = {
        score: 0,
        lives: 3,
        streak: 0,
        bestStreak: 0,
        questionNum: 0,
        usedReal: new Set(),
        usedFake: new Set(),
        currentQuestion: null,
        answered: false
    };
    updateUI();
    showScreen('game');
    nextQuestion();
}

function nextQuestion() {
    if (state.questionNum >= 300) {
        endGame(true);
        return;
    }

    state.questionNum++;
    state.answered = false;
    state.currentQuestion = generateQuestion();

    // Update options
    els.options.forEach((btn, i) => {
        btn.textContent = state.currentQuestion.options[i];
        btn.className = 'option-btn';
    });

    els.nextBtn.classList.add('hidden');
    updateUI();
}

function handleAnswer(selectedIndex) {
    if (state.answered) return;
    state.answered = true;

    const correct = selectedIndex === state.currentQuestion.fakeIndex;

    // Highlight the fake (correct answer) in green
    els.options[state.currentQuestion.fakeIndex].classList.add('correct');

    if (correct) {
        state.score++;
        state.streak++;
        if (state.streak > state.bestStreak) {
            state.bestStreak = state.streak;
        }
    } else {
        // Highlight wrong selection in red
        els.options[selectedIndex].classList.add('wrong');
        state.lives--;
        state.streak = 0;
        updateHearts();
    }

    // Disable all buttons
    els.options.forEach(btn => btn.classList.add('disabled'));

    updateUI();

    if (state.lives <= 0) {
        // Hide next button to prevent continuing
        els.nextBtn.classList.add('hidden');
        setTimeout(() => endGame(false), 1500);
    } else {
        els.nextBtn.classList.remove('hidden');
    }
}

function endGame(victory) {
    els.finalScore.textContent = state.score;
    els.finalTotal.textContent = state.questionNum;
    els.bestStreak.textContent = state.bestStreak;
    els.gameoverTitle.textContent = victory
        ? "You beat all 300!"
        : "Game Over";
    showScreen('gameover');
}

function updateUI() {
    els.score.textContent = state.score;
    els.streak.textContent = state.streak;
    els.questionNum.textContent = state.questionNum;
}

function updateHearts() {
    const hearts = els.lives.querySelectorAll('.heart');
    hearts.forEach((heart, i) => {
        if (i >= state.lives) {
            heart.classList.add('lost');
        }
    });
}

// === EVENT LISTENERS ===

els.startBtn.addEventListener('click', startGame);
els.restartBtn.addEventListener('click', startGame);
els.nextBtn.addEventListener('click', nextQuestion);

els.options.forEach((btn, i) => {
    btn.addEventListener('click', () => handleAnswer(i));
});
