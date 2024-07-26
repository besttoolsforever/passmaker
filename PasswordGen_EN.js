// PasswordGen_en.js


const wordList = [
    "blue", "black", "pink", "red", "yellow", "green", "purple", "orange", "white", "gray", "brown", "gold", "silver", "turquoise", "coral", "indigo", "salmon", "amber", "khaki", "cyan", "cream", "emerald", "mauve", "taupe", "black", "green", "pink", "cocoa", "chat",
    "water", "tree", "sand", "breeze", "field", "sky", "flower", "leaf", "fire", "grass", "island", "garden", "light", "moon", "forest", "cloud", "wave", "gold", "stone", "fish", "river", "sun", "earth", "wind", "snow", "rain", "thunder", "lightning", "frost", "fog", "tornado", "waterfall", "avalanche", "glacier", "iceberg", "coral", "reef", "canyon", "plateau", "savanna", "jungle", "tundra", "plain", "swamp", "marsh",
    "lawyer", "writer", "journalist", "teacher", "doctor", "engineer", "architect", "dentist", "nurse", "police", "firefighter", "pilot", "veterinarian", "chef", "baker", "pharmacist", "designer", "actor", "singer", "dancer", "astronaut", "artist", "scientist", "biologist", "chemist", "historian", "geologist", "economist", "philosopher", "psychologist", "sociologist", "therapist", "trainer", "civilengineer", "programmer", "mechanic", "electrician", "bricklayer", "carpenter", "gardener", "carpenter", "cook",
    "apple", "banana", "strawberry", "pineapple", "orange", "grape", "watermelon", "pear", "peach", "kiwi", "lemon", "avocado", "guava", "mango", "cherry", "raspberry", "blueberry", "melon", "fig", "blackberry", "persimmon", "date", "chestnut", "nut", "hazelnut", "almond", "pistachio", "brazilnut", "pine", "bread", "cheese", "ham", "salami", "mortadella", "sausage", "hotdog", "burger", "potato", "carrot", "beet", "lettuce", "tomato", "cucumber", "onion", "pepper", "pumpkin", "broccoli", "kale", "garlic", "oliveoil", "vinegar", "mustard", "ketchup", "mayonnaise",
    "lion", "elephant", "giraffe", "horse", "dog", "cat", "fish", "bird", "tiger", "leopard", "zebra", "rhinoceros", "hippopotamus", "gorilla", "monkey", "panda", "whale", "shark", "dolphin", "lizard", "marmoset", "hare", "rabbit", "squirrel", "fox", "wolf", "bear", "boar", "cougar", "deer", "antelope", "bison", "moose", "kangaroo", "koala", "wallaby", "parrot", "owl", "seagull", "parakeet", "canary", "cockatiel", "pigeon", "bee", "ant", "beetle", "butterfly", "dragonfly", "mosquito", "spider", "scorpion", "caterpillar", "snail", "turtle", "alligator", "lizard", "snake",
    "table", "chair", "sofa", "bed", "fridge", "stove", "microwave", "toaster", "blender", "vacuum", "lamp", "mirror", "carpet", "pillow", "blanket", "fan", "tv", "computer", "cellphone", "tablet", "smartwatch", "camera", "keyboard", "mouse", "printer", "scanner", "ruler", "scissors", "knife", "spoon", "fork", "plate", "glass", "jug", "pan", "fryingpan", "kettle", "coffeemaker", "sandwichmaker", "popcornmaker", "mixer", "blender", "pressurecooker", "foodprocessor", "iron", "sewingmachine",
    "spring", "summer", "autumn", "winter",
    "guitar", "piano", "flute", "trumpet", "drums", "violin", "saxophone", "guitar", "bass", "cavaquinho", "berimbau", "drum", "harmonica", "harp", "ukulele", "mandolin", "accordion", "keyboard", "synthesizer", "bongo", "conga", "tambourine", "bugle", "cuica", "atabaque", "tambourine", "triangle", "windchime", "reco-reco", "zither", "organ",
    "car", "motorcycle", "bicycle", "airplane", "helicopter", "boat", "ship", "train", "bus", "truck", "tractor", "jetski", "canoe", "surfboard", "scooter", "skateboard", "hoverboard", "segway", "tram", "cablecar", "zeppelin", "tricycle", "wagon", "carriage", "chariot", "catapult", "sleigh", "rocket", "blimp", "balloon", "sailboat", "ultralight", "parachute",
    "soccer", "basketball", "volleyball", "tennis", "swimming", "athletics", "ball", "capital", "golf", "surfing", "skateboarding", "boxing", "judo", "jiujitsu", "karate", "taekwondo", "fencing", "hockey", "rugby", "polo", "way", "badminton", "squash", "pingpong", "sports", "motorsport", "sailing", "cycling", "marathon", "triathlon", "figureskating", "windsurfing", "diving", "skydiving", "climbing", "jumping", "slackline", "rafting", "kitesurfing",
    "love", "time", "life", "peace", "happiness", "joy", "sadness", "hope", "fear", "courage", "friendship", "longing", "dream", "fantasy", "reality", "memory", "imagination", "creativity", "intuition", "thought", "knowledge", "wisdom", "consciousness", "inspiration", "motivation", "energy", "balance", "harmony", "freedom", "justice", "truth", "lie", "illusion", "character", "behavior", "ethics", "morality",
];

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';

    let password = '';
    let specialCharCount = calculateSpecialCharCount(length, includeSymbols);

    // Verificar se pelo menos uma opção está selecionada
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        return '';
    }

    let charGroups = [];

    // Adicionar caracteres especiais
    if (includeSymbols) {
        charGroups.push(getRandomChars(symbols, specialCharCount));
    }

    // Adicionar letras minúsculas
    if (includeLowercase) {
        charGroups.push(getRandomChars(lowerCaseLetters, Math.max(1, length - password.length - specialCharCount - (includeNumbers ? Math.floor(length * 0.2) : 0))));
    }

    // Adicionar números
    if (includeNumbers) {
        charGroups.push(getRandomChars(numbers, Math.floor(length * 0.2)));
    }

    // Adicionar letras maiúsculas se necessário
    if (includeUppercase) {
        if (!includeLowercase && !includeNumbers && !includeSymbols) {
            charGroups.push(getRandomChars(upperCaseLetters, length));
        } else {
            charGroups.push(getRandomChars(upperCaseLetters, Math.max(1, length - password.length)));
        }
    }

    // Preencher o restante do comprimento com caracteres disponíveis
    while (charGroups.join('').length < length) {
        if (includeLowercase) {
            charGroups.push(getRandomChars(lowerCaseLetters, 1));
        }
        if (includeNumbers) {
            charGroups.push(getRandomChars(numbers, 1));
        }
        if (includeSymbols && charGroups.join('').length < length) {
            charGroups.push(getRandomChars(symbols, 1));
        }
    }

    // Rearranjar a ordem dos grupos de caracteres
    charGroups = shufflePasswordGroups(charGroups);

    // Transformar a senha em algo memorável, se necessário
    if (memorable) {
        password = makePasswordMemorable(charGroups.join(''), length);
    } else {
        password = charGroups.join('');
    }

    // Aplicar filtro para letras maiúsculas
    password = applyUppercaseFilter(password, length, includeUppercase);

    return password.slice(0, length); // Garantir que a senha tenha o comprimento correto
}

function calculateSpecialCharCount(length, includeSymbols) {
    if (!includeSymbols) return 0;
    if (length >= 41) return 6;
    if (length >= 29) return 5;
    if (length >= 17) return 4;
    if (length >= 10) return 3;
    if (length >= 6) return 2;
    return 1;
}

function getRandomChars(chars, count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex];
    }
    return result;
}

function makePasswordMemorable(password, length) {
    let result = '';
    let remainingLength = length;
    let letters = password.replace(/[^a-zA-Z]/g, ''); // Extrair apenas letras
    let nonLetters = password.replace(/[a-zA-Z]/g, ''); // Extrair caracteres não letras

    let letterIndex = 0;
    while (remainingLength > 0 && letterIndex < letters.length) {
        let word = getRandomWord(wordList);
        for (let i = 0; i < word.length && letterIndex < letters.length && remainingLength > 0; i++) {
            result += word[i];
            letterIndex++;
            remainingLength--;
        }
    }

    // Adicionar os caracteres não letras de volta nas suas posições originais
    for (let i = 0, j = 0; i < password.length && j < result.length; i++) {
        if (!/[a-zA-Z]/.test(password[i])) {
            result = result.slice(0, i) + password[i] + result.slice(i);
        }
    }

    return result;
}

function getRandomWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function shufflePasswordGroups(groups) {
    // Obter uma ordem aleatória para os grupos
    const order = getRandomOrder();
    const shuffled = order.map(index => groups[index - 1]);
    return shuffled;
}

function getRandomOrder() {
    const orders = [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ];
    const randomIndex = Math.floor(Math.random() * orders.length);
    return orders[randomIndex];
}

function applyUppercaseFilter(password, length, includeUppercase) {
    if (!includeUppercase || length < 6) {
        return password;
    }

    let result = password;
    let lowercaseCount = (password.match(/[a-z]/g) || []).length;

    if (length >= 6 && lowercaseCount >= 1) {
        let indices = [];
        for (let i = 0; i < password.length; i++) {
            if (password[i].match(/[a-z]/)) {
                indices.push(i);
            }
        }

        // Decidir aleatoriamente se as letras maiúsculas estarão no início ou no fim
        let placeUppercaseAtStart = Math.random() < 0.5;

        if (placeUppercaseAtStart) {
            // Transformar letras minúsculas no início
            for (let i = 0; i < indices.length && i < 2; i++) {
                result = replaceAt(result, indices[i], password[indices[i]].toUpperCase());
            }
        } else {
            // Transformar letras minúsculas no fim
            for (let i = indices.length - 1; i >= indices.length - 2 && i >= 0; i--) {
                result = replaceAt(result, indices[i], password[indices[i]].toUpperCase());
            }
        }
    }

    return result;
}


function replaceAt(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + 1);
}

function generateMultiplePasswords(count, length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable) {
    let passwords = [];
    for (let i = 0; i < count; i++) {
        passwords.push(generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable));
    }
    return passwords;
}

// Sincronizar valores dos sliders e inputs numéricos
function syncValue(element1, element2) {
    element1.addEventListener('input', () => {
        element2.value = element1.value;
    });
    element2.addEventListener('input', () => {
        element1.value = element2.value;
    });
}

function increment(inputId) {
    const input = document.getElementById(inputId);
    if (input.value < input.max) {
        input.value = parseInt(input.value) + 1;
        input.dispatchEvent(new Event('input'));
    }
}

function decrement(inputId) {
    const input = document.getElementById(inputId);
    if (input.value > input.min) {
        input.value = parseInt(input.value) - 1;
        input.dispatchEvent(new Event('input'));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordLength = document.getElementById('passwordLength');
    const lengthSlider = document.getElementById('lengthSlider');
    const serialCount = document.getElementById('serialCount');
    const countSlider = document.getElementById('countSlider');

    syncValue(passwordLength, lengthSlider);
    syncValue(serialCount, countSlider);

    document.getElementById('refreshButton').addEventListener('click', generatePasswords);
    document.getElementById('copyButton').addEventListener('click', copyPasswords);

    // Inicializar os valores dos incrementos e decrementos
    increment('lengthSlider');
    increment('countSlider');
});

function generatePasswords() {
    const length = parseInt(document.getElementById('lengthSlider').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    const memorable = document.getElementById('memorableCheckbox').checked;
    const serialCount = parseInt(document.getElementById('serialCount').value);

    const passwords = generateMultiplePasswords(serialCount, length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable);
    document.getElementById('generatedPassword').textContent = passwords.join('\n');
}

function copyPasswords() {
    const passwordText = document.getElementById('generatedPassword').textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert('Passwords copied to the clipboard!');
    });
}

