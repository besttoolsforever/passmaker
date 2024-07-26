// PasswordGen_ES.js

const wordList = [
      "azul", "negro", "rosa", "rojo", "amarillo", "verde", "morado", "naranja", "blanco", "gris", "marron", "dorado", "plateado", "turquesa", "coral", "indigo", "salmon", "ambar", "caqui", "cian", "crema", "esmeralda", "malva", "taupe", "negro", "verde", "rosa", "cacao", "chat",
    "agua", "arbol", "arena", "brisa", "campo", "cielo", "flor", "hoja", "fuego", "cesped", "isla", "jardin", "luz", "luna", "bosque", "nube", "ola", "oro", "piedra", "pez", "rio", "sol", "tierra", "viento", "nieve", "lluvia", "trueno", "relampago", "escarcha", "niebla", "tornado", "cascada", "avalancha", "glaciar", "iceberg", "coral", "arrecife", "canon", "meseta", "sabana", "selva", "tundra", "llanura", "pantano", "cienaga",
    "abogado", "escritor", "periodista", "profesor", "medico", "ingeniero", "arquitecto", "dentista", "enfermero", "policia", "bombero", "piloto", "veterinario", "chef", "panadero", "farmaceutico", "disenador", "actor", "cantante", "bailarin", "astronauta", "artista", "cientifico", "biologo", "quimico", "historiador", "geologo", "economista", "filosofo", "psicologo", "sociologo", "terapeutapersonal", "ingenierocivil", "programador", "mecanico", "electricista", "albanil", "carpintero", "jardinero", "ebanista", "cocinero",
    "manzana", "platano", "fresa", "pina", "naranja", "uva", "sandia", "pera", "durazno", "kiwi", "limon", "aguacate", "guayaba", "mango", "cereza", "frambuesa", "arandano", "melon", "higo", "mora", "caqui", "datil", "castana", "nuez", "avellana", "almendra", "pistacho", "castanabrasil", "pinon", "pan", "queso", "jamon", "salami", "mortadela", "salchicha", "hamburguesa", "papa", "zanahoria", "remolacha", "lechuga", "tomate", "pepino", "cebolla", "pimiento", "calabaza", "brocoli", "col", "ajo", "aceite", "vinagre", "mostaza", "ketchup", "mayonesa",
    "leon", "elefante", "jirafa", "caballo", "perro", "gato", "pez", "pajaro", "tigre", "leopardo", "cebra", "rinoceronte", "hipopotamo", "gorila", "mono", "panda", "ballena", "tiburon", "delfin", "lagartija", "ardilla", "liebre", "conejo", "ardilla", "zorro", "lobo", "oso", "jabali", "puma", "ciervo", "antilope", "bisonte", "alce", "canguro", "koala", "wallaby", "loro", "buho", "gaviota", "periquito", "canario", "ninfa", "paloma", "abeja", "hormiga", "escarabajo", "mariposa", "libelula", "mosquito", "arana", "escorpion", "oruga", "caracol", "tortuga", "caiman", "lagarto", "serpiente",
    "mesa", "silla", "sofa", "cama", "nevera", "estufa", "microondas", "tostadora", "licuadora", "aspiradora", "lampara", "espejo", "alfombra", "almohada", "manta", "ventilador", "television", "computadora", "celular", "tablet", "smartwatch", "camara", "teclado", "raton", "impresora", "escaner", "regla", "tijera", "cuchillo", "cuchara", "tenedor", "plato", "vaso", "jarra", "olla", "sarten", "tetera", "cafetera", "sanduichera", "palomera", "batidora", "licuadora", "ollaexpress", "procesadoralimentos", "planchador", "maquinacoser",
    "primavera", "verano", "otono", "invierno",
    "guitarra", "piano", "flauta", "trompeta", "bateria", "violin", "saxofon", "guitarra", "bajo", "cavaquino", "berimbau", "tambor", "armonica", "arpa", "ukelele", "mandolina", "acordeon", "tecladoelectronico", "sintetizador", "bongo", "conga", "pandereta", "timbal", "cuica", "atabaque", "pandero", "triangulo", "campana", "recoreco", "citara", "organo",
    "coche", "moto", "bicicleta", "avion", "helicoptero", "barco", "buque", "tren", "autobus", "camion", "tractor", "jetski", "canoa", "tabla", "patinete", "patineta", "hoverboard", "segway", "tranvia", "teleferico", "zeppelin", "triciclo", "carreta", "calesa", "carroza", "catapulta", "trineo", "cohete", "dirigible", "globo", "velero", "ultraligero", "paracaidas",
    "futbol", "baloncesto", "voleibol", "tenis", "natacion", "atletismo", "balon", "capital", "golf", "surf", "skate", "boxeo", "judo", "jiujitsu", "karate", "taekwondo", "esgrima", "hockey", "rugby", "polo", "badminton", "squash", "pingpong", "deportiva", "automovilismo", "vela", "ciclismo", "maraton", "triatlon", "patinajeartistico", "windsurf", "clavados", "paracaidismo", "escalada", "salto", "slackline", "rafting", "kitesurf",
    "amor", "tiempo", "vida", "paz", "felicidad", "alegria", "tristeza", "esperanza", "miedo", "valentia", "amistad", "nostalgia", "sueno", "fantasia", "realidad", "memoria", "imaginacion", "creatividad", "intuicion", "pensamiento", "conocimiento", "sabiduria", "conciencia", "inspiracion", "motivacion", "energia", "equilibrio", "armonia", "libertad", "justicia", "verdad", "mentira", "ilusion", "caracter", "comportamiento", "etica", "moral"
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
        alert('Contrasenas copiadas al portapapeles!');
    });
}

