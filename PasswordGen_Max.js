

// PasswordGen.js

const wordList = [
    "nebula", "photon", "hyper", "terra", "lunar", "solar", "galaxy", "cosmic", "velocity", "momentum",
    "dynamic", "atomic", "quantum", "neutron", "proton", "electron", "fusion", "gravity", "orbit", "celestial",
    "stardust", "blazar", "pulsar", "quasar", "ionize", "spectral", "thermal", "accel", "turbo", "zenith",
    "nadir", "apex", "vertex", "crystal", "prismatic", "luminous", "radiant", "infinity", "eternity", "abyss",
    "vivid", "chroma", "titanium", "carbon", "silicon", "neon", "argon", "krypton", "xenon", "helium",
    "hydrogen", "nitro", "oxide", "catalyst", "reactor", "generator", "accelerator", "synthetic", "digital",
    "neural", "algorithm", "binary", "encrypt", "decrypt", "fission", "particle", "wave", "frequency",
    "amplitude", "wavelength", "spectrum", "laser", "maser", "radio", "microwave", "infrared", "ultraviolet",
    "xray", "gamma", "beta", "alpha", "delta", "epsilon", "omega", "sigma", "lambda", "theta",
    "zeta", "psi", "phi", "charge", "magnetic", "electric", "voltage", "current", "resistance", "capacitor",
    "transistor", "diode", "resistor", "inductor", "circuit", "node", "loop", "path", "flow", "stream",
    "surge", "rush", "blaze", "spark", "ignite", "combust", "explode", "implode", "crash", "boom",
    "bang", "whiz", "zoom", "whirl", "twist", "spin", "revolve", "rotate", "twirl", "gyrate",
    "accelerate", "decelerate", "speed", "mach", "thrust", "propel", "impulse", "inertia", "mass", "density",
    "volume", "pressure", "vacuum", "void", "cosmos", "universe", "multiverse", "dimension", "portal", "wormhole",
    "blackhole", "singularity", "quark", "neutrino", "boson", "fermion", "hadron", "lepton", "muon", "gluon",
    "atom", "molecule", "compound", "element", "string", "membrane", "brane", "state", "superposition", "entanglement",
    "decoherence", "coherence", "interference", "diffraction", "refraction", "reflection", "absorption", "emission", "radiation", "radioactive",
    "decay", "half-life", "isotope", "ion", "plasma", "gas", "liquid", "solid", "bose", "einstein",
    "fermi", "dirac", "pauli", "hawking", "newton", "maxwell", "tesla", "edison", "volt", "ampere",
    "ohm", "watt", "joule", "kelvin", "celsius", "fahrenheit", "pascal", "hertz", "farad", "fly",
    "weber", "gauss", "oersted", "curie", "becquerel", "sievert", "gray", "roentgen", "dalton", "mine",
    "planck", "boltzmann", "rydberg", "stefan", "poise", "stokes", "angstrom", "parsec", "lightyear", "astronomical",
    "megaparsec", "hubble", "doppler", "redshift", "blueshift", "jerk", "snap", "crackle", "pop", "harmonic",
    "resonance", "oscillation", "vibration", "pendulum", "spring", "elastic", "plastic", "ductile", "brittle", "malleable",
    "conductivity", "resistivity", "superconductor", "semiconductor", "insulator", "conductor", "dielectric", "capacitance", "inductance", "impedance",
    "admittance", "susceptance", "reactance", "conductance", "energy", "power", "work", "force", "torque", "moment",
    "kinetic", "potential", "chemical", "nuclear", "gravitational", "mechanical", "sound", "light", "heat", "cold",
    "entropy", "enthalpy", "free", "gibbs", "helmholtz", "carnot", "efficiency", "engine", "refrigerator", "pump",
    "cycle", "otto", "diesel", "brayton", "rankine", "stirling", "thermodynamics", "zeroth", "first", "second",
    "third", "ideal", "real", "van", "waals", "equation", "braile", "charles", "beatles", "seek",
    "combined", "dalton", "henry", "raoult", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic",
    "maxwell-boltzmann", "root", "mean", "square", "brownian", "viscosity", "viscous", "newtonian", "non-newtonian", "shear",
    "stress", "rate", "reynolds", "laminar", "turbulent", "bernoulli", "continuity", "venturi", "torricelli", "pascal",
    "archimedes", "buoyancy", "hydraulics", "pneumatics", "compressible", "incompressible", "supersonic", "subsonic", "transonic", "hypersonic",
    "shock", "sonic", "barrier", "aerodynamics", "hydrodynamics", "fluid", "boundary", "layer", "drag", "lift",
    "weight", "center", "pressure", "aerofoil", "airfoil", "wing", "flap", "aileron", "rudder", "elevator",
    "propeller", "turbine", "compressor", "combustor", "nozzle", "afterburner", "rocket", "missile", "jet", "turbojet",
    "turbofan", "turboprop", "ramjet", "scramjet", "vectoring", "vtol", "stol", "vstol", "helicopter", "autogyro",
    "drone", "uav", "satellite", "geostationary", "low", "medium", "high", "polar", "synchronous", "molniya",
    "tundra", "transfer", "hohmann", "bic", "assist", "lagrange", "spacecraft", "rover", "lander", "probe",
    "telescope", "observatory", "constellation", "star", "planet", "moon", "asteroid", "comet", "meteor", "meteorite",
    "meteoroid", "bolide", "fireball", "supernova", "hypernova", "neutron", "magnetar", "white", "red", "blue",
    "supergiant", "dwarf", "exoplanet", "gas", "ice", "terrestrial", "rogue", "binary", "multiple", "open",
    "globular", "cluster", "supercluster", "filament", "dark", "energy", "microwave", "inflation", "bang", "steady",
    "string", "m-theory", "quantum", "gravity", "loop", "causal", "dynamical", "triangulation", "theory", "everything",
    "grand", "unified", "standard", "supersymmetry", "oscillation", "higgs", "graviton", "phonon", "plasmon", "polaron",
    "exciton", "cooper", "bose-einstein", "degeneracy", "hall", "superfluidity", "superconductivity", "monopole", "anyon", "majorana",
    "weyl", "dirac", "neutronium", "strange", "quark-gluon", "plasma", "pulsar", "magnetar", "white", "black",
    "red", "brown", "tauri", "herbig-haro", "planetary", "region", "molecular", "dark", "reflection", "emission",
    "remnant", "wind", "accretion", "protoplanetary", "debris", "circumstellar", "proplyd", "exozodiacal", "kuiper", "oort",
    "scattered", "detached", "centaur", "trojan", "near-earth", "potentially", "hazardous", "shower", "leonids", "perseids",
    "geminids", "orionids", "taurids", "quadrantids", "ursids", "lyrids", "andromedids", "draconids", "eta", "alpha",
    "delta", "halley", "hale-bopp", "shoemaker-levy", "hyakutake", "ison", "neowise", "encke", "tempel-tuttle", "swift-tuttle",
    "giacobini-zinner", "holmes", "lovejoy", "pan-starrs", "mcnaught", "seki", "great", "long-period", "short-period", "hyperbolic",
    "parabolic", "elliptical", "circular", "eccentricity", "inclination", "ascending", "descending", "perihelion", "aphelion", "perigee",
    "apogee", "apsis", "sidereal", "synodic", "resonance", "roche", "hill", "sphere", "influence", "escape",
    "orbital", "hohmann", "bi-elliptic", "assist", "delta-v", "specific", "impulse", "thrust-to-weight", "mass", "ratio",
    "rocket", "equation", "staging", "multistage", "single-stage-to-orbit", "reusable", "launch", "vehicle", "expendable", "system",
    "pad", "window", "ascent", "trajectory", "reentry", "ablation", "heat", "shield", "parachute", "retrorocket",
    "soft", "landing", "hard", "docking", "rendezvous", "berthing", "spacewalk", "eva", "iva", "tethered",
    "untethered", "station", "iss", "tiangong", "mir", "skylab", "salyut", "shuttle", "soyuz", "dragon",
    "crew", "starliner", "orion", "apollo", "gemini", "mercury", "vostok", "voskhod", "shenzhou", "progress",
    "cygnus", "dream", "chaser", "starship", "falcon", "atlas", "delta", "ariane", "proton", "long",
    "march", "angara", "electron", "launcherone", "vega", "h-ii", "gslv", "pslv", "tourism", "suborbital",
    "orbital", "interplanetary", "interstellar", "intergalactic", "warp", "drive", "alcubierre", "wormhole", "hyperspace", "jump",
    "solar", "sail", "laser", "propulsion", "nuclear", "pulse", "ion", "thruster", "hall", "effect",
    "vasimr", "magnetoplasmadynamic", "electrodeless", "plasma", "fusion", "rocket", "antimatter", "bussard", "ramjet", "orion",
    "project", "daedalus", "longshot", "breakthrough", "starshot", "lightsail", "oumuamua", "voyager", "pioneer", "new",
    "horizons", "viking", "curiosity", "perseverance", "opportunity", "spirit", "sojourner", "zhurong", "chang'e", "yutu",
    "luna", "lunokhod", "module", "command", "service", "rover", "moonbase", "mars", "base", "colony",
    "terraforming", "biosphere", "habitat", "neill", "cylinder", "stanford", "torus", "bernal", "sphere", "dyson",
    "swarm", "matrioshka", "brain", "ringworld", "alderson", "disk", "kardashev", "scale", "type", "i",
    "ii", "iii", "iv", "v", "civilization", "extraterrestrial", "seti", "drake", "equation", "fermi",
    "paradox", "great", "filter", "anthropic", "principle", "panspermia", "directed", "exogenesis", "astrobiology", "extremophile",
    "tardigrade", "microorganism", "bacteria", "archaea", "eukaryote", "virus", "prion", "dna", "rna", "amino",
    "acid", "protein", "enzyme", "metabolism", "photosynthesis", "respiration", "fermentation", "glycolysis", "krebs", "cycle",
    "electron", "transport", "chain", "atp", "mitochondria", "chloroplast", "membrane", "wall", "cytoplasm", "nucleus",
    "ribosome", "endoplasmic", "reticulum", "golgi", "apparatus", "lysosome", "vacuole", "centriole", "cytoskeleton", "microtubule",
    "microfilament", "intermediate", "filament", "chromosome", "gene", "allele", "genotype", "phenotype", "mutation", "natural",
    "selection", "evolution", "speciation", "adaptation", "drift", "flow", "founder", "effect", "bottleneck", "hardy-weinberg",
    "population", "genetics", "phylogenetics", "cladistics", "taxonomy", "kingdom", "phylum", "class", "order", "family",
    "genus", "species", "binomial", "nomenclature", "linnaean", "classification", "domain", "protist", "fungus", "plant",
    "animal", "invertebrate", "vertebrate", "fish", "amphibian", "reptile", "bird", "mammal", "primate", "hominid",
    "homo", "sapiens", "neanderthal", "denisovan", "erectus", "habilis", "australopithecus", "paleolithic", "neolithic", "mesolithic",
    "bronze", "age", "iron", "industrial", "revolution", "information", "digital", "space", "anthropocene", "holocene",
    "pleistocene", "epoch", "era", "period", "eon", "geologic", "time", "scale", "stratigraphy", "paleontology",
    "fossil", "amber", "tar", "pit", "ice", "core", "sediment", "rock", "layer", "igneous",
    "sedimentary", "metamorphic", "plate", "tectonics", "continental", "drift", "pangaea", "laurasia", "gondwana", "subduction",
    "earthquake", "volcano", "magma", "lava", "pyroclastic", "flow", "tsunami", "richter", "scale", "mercalli",
    "seismograph", "epicenter", "hypocenter", "fault", "san", "andreas", "ring", "fire", "mid-ocean", "ridge",
    "rift", "valley", "hotspot", "hawaiian", "islands", "yellowstone", "supervolcano", "caldera", "geyser", "fumarole",
    "hydrothermal", "vent", "black", "smoker", "white", "mineral", "crystal", "gemstone", "diamond", "ruby",
    "sapphire", "emerald", "amethyst", "topaz", "opal", "quartz", "feldspar", "mica", "olivine", "pyroxene",
    "amphibole", "garnet", "bauxite", "hematite", "magnetite", "galena", "sphalerite", "halite", "gypsum", "calcite",
    "aragonite", "dolomite", "limestone", "marble", "slate", "schist", "gneiss", "granite", "basalt", "obsidian",
    "pumice", "sandstone", "shale", "conglomerate", "breccia", "coal", "oil", "natural", "gas", "fossil",
    "fuel", "renewable", "energy", "solar", "power", "wind", "hydro", "geothermal", "biomass", "biofuel",
    "nuclear", "fission", "reactor", "turbine", "generator", "transformer", "grid", "smart", "battery", "lith",
	"nebula", "photon", "hyper", "terra", "lunar", "solar", "galaxy", "cosmic", "velocity", "momentum", "dynamic",
	"atomic", "quantum", "neutron", "proton", "electron", "fusion", "gravity", "orbit", "celestial", "stardust",
	"blazar", "pulsar", "quasar", "ionize", "spectral", "thermal", "velocity", "accel", "turbo", "zenith", "nadir", 
	"apex", "vertex", "crystal", "prismatic", "luminous", "radiant", "infinity", "eternity", "abyss", "vivid", "chroma",
	"lunar", "solar", "titanium", "carbon", "silicon", "neon", "argon", "krypton", "xenon", "helium", "hydrogen",
	"nitro", "oxide", "catalyst", "reactor", "generator", "accelerator", "synthetic", "digital", "neural", "quantum",
	"algorithm", "binary", "encrypt", "decrypt", "fusion", "fission", "particle", "wave", "frequency", "amplitude", 
	"wavelength", "spectrum", "photon", "laser", "maser", "radio", "microwave", "infrared", "ultraviolet", "xray", 
	"gamma", "beta", "alpha", "delta", "epsilon", "omega", "sigma", "lambda", "theta", "zeta", "psi", "phi", "omega", 
	"charge", "magnetic", "electric", "voltage", "current", "resistance", "capacitor", "transistor", "diode", 
	"resistor", "inductor", "circuit", "node", "loop", "path", "flow", "stream", "surge", "rush", "blaze", "spark", 
	"ignite", "combust", "explode", "implode", "crash", "boom", "bang", "whiz", "zoom", "whirl", "twist", "spin", 
	"orbit", "revolve", "rotate", "twirl", "gyrate", "accelerate", "decelerate", "velocity", "speed", "mach", 
	"thrust", "propel", "impulse", "momentum", "inertia", "gravity", "mass", "density", "volume", "pressure", 
	"vacuum", "void", "abyss", "cosmos", "universe", "multiverse", "dimension", "portal", "wormhole", "blackhole", 
	"singularity", "event horizon", "quark", "neutrino", "boson", "fermion", "hadron", "lepton", "muon", "gluon", 
	"photon", "electron", "proton", "neutron", "atom", "molecule", "compound", "element", "particle", "wave", "string", 
	"membrane", "brane", "quantum", "state", "superposition", "entanglement", "decoherence", "coherence", "interference",
	"diffraction", "refraction", "reflection", "absorption", "emission", "radiation", "radioactive", "decay",
	"halflife", "isotope", "ion", "plasma", "gas", "liquid", "solid", "bose", "einstein", "fermi", "dirac", "pauli",
	"hawking", "newton", "maxwell", "tesla", "edison", "volt", "ampere", "ohm", "watt", "joule", "kelvin", "celsius",
	"fahrenheit", "pascal", "newton", "pascal", "hertz", "farad", "henry", "weber", "tesla", "gauss", "oersted", "curie",
	"becquerel", "sievert", "gray", "roentgen", "dalton", "avogadro", "planck", "boltzmann", "rydberg", "stefan", "ohm",
	"poise", "stokes", "angstrom", "parsec", "lightyear", "astronomical unit", "parsec", "megaparsec", "hubble", 
	"doppler", "redshift", "blueshift", "wavelength", "frequency", "amplitude", "velocity", "acceleration", "jerk", 
	"snap", "crackle", "pop", "harmonic", "resonance", "oscillation", "vibration", "pendulum", "spring", "elastic", 
	"plastic", "ductile", "brittle", "malleable", "conductivity", "resistivity", "superconductor", "semiconductor", 
	"insulator", "conductor", "dielectric", "capacitance", "inductance", "impedance", "admittance", "susceptance", 
	"reactance", "resistance", "conductance", "voltage", "current", "charge", "energy", "power", "work", "force", 
	"torque", "moment", "inertia", "momentum", "impulse", "energy", "kinetic", "potential", "thermal", "electrical", 
	"chemical", "nuclear", "gravitational", "elastic", "mechanical", "radiant", "sound", "light", "heat", "cold", 
	"entropy", "enthalpy", "free energy", "gibbs", "helmholtz", "carnot", "efficiency", "work", "heat engine", 
	"refrigerator", "heatpump", "carnot", "otto", "cycle", "brayton", "rankine cycle", "stirling", "thermodynamics",
	"zeroth", "firstlaw", "secondlaw", "thirdlaw", "ideal", "real", "vanderwaals", "equationofstate", "charleslaw", 
	"dalton", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic", "boltzman", "square", "theorymotion", "viscosity", "viscous", "newfluid", "nonfluid", "boltzmann", "redshift", "databricks", "hadoop", "yarn", "hive", "pig", "hbase", "zookeeper", "oozie", "sqoop", "flume", "mahout", "ambari", "spark", "storm", "kafka", "couchbase", "redis", "elasticsearch", "solr", "arangodb", "orientdb", "janusgraph", "titan", "dgraph", "timescaledb", "influxnow", "prometheus", "graphite", "grafana", "kibana", "tableau", "powerbi", "looker", "metabase", "superset", "mode", "periscope", "chartio", "datastudio", "qlik", "microstrategy", "python", "matlab", "excel", "airtable", "notion", "confluence", "asana", "monday", "smartsheet", "downup", "basecamp", "slack", "softteams", "zoom", "code-based", "multivariate", "supersingular isogeny", "sidh", "kyber", "dilithium", "falcon", "ntru", "mceliece", "rainbow", "sphincs", "bliss", "newhope",  "lac", "roundx", "saber", "playprime", "classical", "crystals", "bike", "hqc", "sike", "picnic", "fullbetter", "frodokem", "ledacrypt", "dme", "rollo", "rqc", "threebears", "titanium",
	];

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, memorable) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%*()_+<>?';

    let password = '';
    let specialCharCount = calculateSpecialCharCount(length, includeSymbols);

    // Verificar se pelo menos uma opÃ§Ã£o estÃ¡ selecionada
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        return '';
    }

    let charGroups = [];

    // Adicionar caracteres especiais
    if (includeSymbols) {
        charGroups.push(getRandomChars(symbols, specialCharCount));
    }

    // Adicionar letras minÃºsculas
    if (includeLowercase) {
        charGroups.push(getRandomChars(lowerCaseLetters, Math.max(1, length - password.length - specialCharCount - (includeNumbers ? Math.floor(length * 0.2) : 0))));
    }

    // Adicionar nÃºmeros
    if (includeNumbers) {
        charGroups.push(getRandomChars(numbers, Math.floor(length * 0.2)));
    }

    // Adicionar letras maiÃºsculas se necessÃ¡rio
    if (includeUppercase) {
        if (!includeLowercase && !includeNumbers && !includeSymbols) {
            charGroups.push(getRandomChars(upperCaseLetters, length));
        } else {
            charGroups.push(getRandomChars(upperCaseLetters, Math.max(1, length - password.length)));
        }
    }

    // Preencher o restante do comprimento com caracteres disponÃ­veis
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

    // Transformar a senha em algo memorÃ¡vel, se necessÃ¡rio
    if (memorable) {
        password = makePasswordMemorable(charGroups.join(''), length);
    } else {
        password = charGroups.join('');
    }

    // Aplicar filtro para letras maiÃºsculas
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
    let nonLetters = password.replace(/[a-zA-Z]/g, ''); // Extrair caracteres nÃ£o letras

    let letterIndex = 0;
    while (remainingLength > 0 && letterIndex < letters.length) {
        let word = getRandomWord(wordList);
        for (let i = 0; i < word.length && letterIndex < letters.length && remainingLength > 0; i++) {
            result += word[i];
            letterIndex++;
            remainingLength--;
        }
    }

    // Adicionar os caracteres nÃ£o letras de volta nas suas posiÃ§Ãµes originais
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
    // Obter uma ordem aleatÃ³ria para os grupos
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

        // Decidir aleatoriamente se as letras maiÃºsculas estarÃ£o no inÃ­cio ou no fim
        let placeUppercaseAtStart = Math.random() < 0.5;

        if (placeUppercaseAtStart) {
            // Transformar letras minÃºsculas no inÃ­cio
            for (let i = 0; i < indices.length && i < 2; i++) {
                result = replaceAt(result, indices[i], password[indices[i]].toUpperCase());
            }
        } else {
            // Transformar letras minÃºsculas no fim
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

// Sincronizar valores dos sliders e inputs numÃ©ricos
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
        alert('Senhas copiadas para a Ã¡rea de transferÃªncia!');
    });
}
