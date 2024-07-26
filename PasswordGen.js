

// PasswordGen.js

const wordList = [
    "azul", "preto", "rosa", "vermelho", "amarelo", "verde", "roxo", "laranja", "branco", "cinza", "marrom", "dourado", "prateado", "turquesa", "coral", "indigo", "salmon", "ambar", "caqui", "ciano", "creme", "esmeralda", "malva", "taupe", "black", "green", "pink", "cacau", "chat",
    "agua", "arvore", "areia", "brisa", "campo", "ceu", "flor", "folha", "fogo", "grama", "ilha", "jardim", "luz", "lua", "mata", "nuvem", "onda", "ouro", "pedra", "peixe", "rio", "sol", "terra", "vento", "neve", "chuva", "trovao", "relampago", "geada", "neblina", "tornado", "cachoeira", "avalanche", "geleira", "iceberg", "coral", "recife", "desfiladeiro", "planalto", "savana", "selva", "tundra", "planicie", "pantano", "charco",
    "advogado", "escritor", "jornalista", "professor", "medico", "engenheiro", "arquiteto", "dentista", "enfermeiro", "policial", "bombeiro", "piloto", "veterinario", "chef", "padeiro", "farmaceutico", "designer", "ator", "cantor", "dancarino", "astronauta", "artista", "cientista", "biologo", "quimico", "historiador", "geologo", "economista", "filosofo", "psicologo", "sociologo", "terapeuta", "personal trainer", "engenheiro civil", "programador", "mecanico", "eletricista", "pedreiro", "marceneiro", "jardineiro", "carpinteiro", "cozinheiro",
    "maca", "banana", "morango", "abacaxi", "laranja", "uva", "melancia", "pera", "pessego", "kiwi", "limao", "abacate", "goiaba", "manga", "cereja", "framboesa", "mirtilo", "melao", "figo", "amora", "caqui", "tamara", "castanha", "noz", "avela", "amendoa", "pistache", "castanha-do-para", "pinhao", "pao", "queijo", "presunto", "salame", "mortadela", "linguica", "salsicha", "hamburguer", "batata", "cenoura", "beterraba", "alface", "tomate", "pepino", "cebola", "pimentao", "abobora", "brocolis", "couve", "alho", "azeite", "vinagre", "mostarda", "ketchup", "maionese",
    "leao", "elefante", "girafa", "cavalo", "cachorro", "gato", "peixe", "passaro", "tigre", "leopardo", "zebra", "rinoceronte", "hipopotamo", "gorila", "macaco", "panda", "baleia", "tubarao", "golfinho", "calango", "soin", "lebre", "coelho", "esquilo", "raposa", "lobo", "urso", "javali", "puma", "veado", "antilope", "bisao", "alce", "canguru", "coala", "wallaby", "papagaio", "coruja", "gaivota", "periquito", "canario", "calopsita", "pombo", "abelha", "formiga", "besouro", "borboleta", "libelula", "mosquito", "aranha", "escorpiao", "lagarta", "caramujo", "tartaruga", "jacare", "lagarto", "cobra",
    "mesa", "cadeira", "sofa", "cama", "geladeira", "fogao", "microondas", "torradeira", "liquidificador", "aspirador", "abajur", "espelho", "tapete", "travesseiro", "cobertor", "ventilador", "televisao", "computador", "celular", "tablet", "smartwatch", "camera", "teclado", "mouse", "impressora", "scanner", "regua", "tesoura", "faca", "colher", "garfo", "prato", "copo", "jarra", "panela", "frigideira", "chaleira", "cafeteira", "sanduicheira", "pipoqueira", "batedeira", "liquidificador", "panela de pressao", "multiprocessador", "ferrodepassar", "maquinadecostura",
    "primavera", "verao", "outono", "inverno",
    "violao", "piano", "flauta", "trompete", "bateria", "violino", "saxofone", "guitarra", "baixo", "cavaquinho", "berimbau", "tambor", "gaita", "harpa", "ukulele", "bandolim", "acordeao", "teclado eletronico", "sintetizador", "bongo", "conga", "tamborim", "golapolo", "cuica", "atabaque", "pandeiro", "triangulo", "carrilhao", "reco-reco", "citara", "orgao",
    "carro", "moto", "bicicleta", "aviao", "helicoptero", "barco", "navio", "trem", "onibus", "caminhao", "trator", "jetski", "canoa", "prancha", "patinete", "skate", "hoverboard", "seg", "bonde", "teleferico", "zeppelin", "triciclo", "carroca", "charrete", "carruagem", "catapulta", "treno", "foguete", "dirigivel", "balao", "vela", "ultraleve", "paraquedas",
    "futebol", "basquete", "volei", "tenis", "natacao", "atletismo", "ball", "capital", "golfe", "surfe", "skate", "boxe", "judo", "jiujitsu", "karate", "taekwondo", "esgrima", "hoquei", "rugby", "polo", "way", "badminton", "squash", "pingue-pongue", "esportivo", "automobilismo", "vela", "ciclismo", "maratona", "triatlo", "patinacao artistica", "windsurfe", "ornamentais", "paraquedismo", "escalada", "salto", "slackline", "rafting", "kitesurf",
    "amor", "tempo", "vida", "paz", "felicidade", "alegria", "tristeza", "esperanca", "medo", "coragem", "amizade", "saudade", "sonho", "fantasia", "realidade", "memoria", "imaginacao", "criatividade", "intuicao", "pensamento", "conhecimento", "sabedoria", "consciencia", "inspiracao", "motivacao", "energia", "equilibrio", "harmonia", "liberdade", "justica", "verdade", "mentira", "ilusao", "carater", "comportamento", "etica", "moral"
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
        alert('Senhas copiadas para a área de transferência!');
    });
}

