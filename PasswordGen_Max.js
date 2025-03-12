

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
    "nuclear", "fission", "reactor", "turbine", "generator", "transformer", "grid", "smart", "battery", "lith"
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
	"dalton", "colligative", "osmosis", "diffusion", "effusion", "graham", "kinetic", "boltzman", "square", 
	"mean free path", "theorymotion", "viscosity", "viscous", "newtonian fluid", "non-newtonian fluid", "boltzmann", 
	"shearrate", "reynoldsnumber", "laminarflow", "turbulent flow", "bernoulli's equation", "continuity equation", "venturi effect", "torricelli's law", "pascal's principle", "archimedes' principle", "buoyancy", "hydraulics", "pneumatics", "compressible flow", "incompressible flow", "supersonic", "subsonic", "transonic", "hypersonic", "mach number", "shock wave", "sonic boom", "doppler effect", "sound barrier", "aerodynamics", "hydrodynamics", "fluid dynamics", "boundary layer", "drag", "lift", "thrust", "weight", "center of gravity", "center of pressure", "aerofoil", "airfoil", "wing", "flap", "aileron", "rudder", "elevator", "propeller", "turbine", "compressor", "combustor", "nozzle", "afterburner", "rocket", "missile", "jet", "turbojet", "turbofan", "turboprop", "ramjet", "scramjet", "thrust vectoring", "vtol", "stol", "v/stol", "helicopter", "autogyro", "drone", "uav", "satellite", "orbit", "geostationary", "low earth orbit", "medium earth orbit", "high earth orbit", "polar orbit", "sun-synchronous orbit", "molniya orbit", "tundra orbit", "transfer orbit", "hohmann transfer", "bi-elliptic transfer", "gravity assist", "lagrange points", "l1", "l2", "l3", "l4", "l5", "spacecraft", "rover", "lander", "probe", "telescope", "observatory", "constellation", "galaxy", "star", "planet", "moon", "asteroid", "comet", "meteor", "meteorite", "meteoroid", "bolide", "fireball", "nebula", "supernova", "hypernova", "black hole", "neutron star", "pulsar", "magnetar", "quasar", "blazar", "white dwarf", "red giant", "blue giant", "supergiant", "dwarf planet", "exoplanet", "gas giant", "ice giant", "terrestrial planet", "rogue planet", "binary star", "multiple star system", "open cluster", "globular cluster", "galaxy cluster", "supercluster", "filament", "void", "dark matter", "dark energy", "cosmic microwave background", "inflation", "big bang", "steady state", "multiverse", "string theory", "m-theory", "brane", "quantum gravity", "loop quantum gravity", "causal dynamical triangulation", "theory of everything", "grand unified theory", "standard model", "supersymmetry", "neutrino oscillation", "higgs boson", "graviton", "phonon", "plasmon", "polaron", "exciton", "cooper pair", "bose-einstein condensate", "fermi degeneracy", "quantum hall effect", "superfluidity", "superconductivity", "magnetic monopole", "anyon", "majorana fermion", "weyl fermion", "dirac fermion", "neutronium", "strange matter", "quark-gluon plasma", "neutron star", "pulsar", "magnetar", "white dwarf", "black dwarf", "red dwarf", "brown dwarf", "t tauri star", "herbig-haro object", "planetary nebula", "h ii region", "molecular cloud", "dark nebula", "reflection nebula", "emission nebula", "supernova remnant", "pulsar wind nebula", "accretion disk", "protoplanetary disk", "debris disk", "circumstellar disk", "proplyd", "exozodiacal dust", "kuiper belt", "oort cloud", "asteroid belt", "scattered disc", "detached object", "centaur", "trojan", "near-earth object", "potentially hazardous object", "meteor shower", "leonids", "perseids", "geminids", "orionids", "taurids", "quadrantids", "ursids", "lyrids", "andromedids", "draconids", "eta aquariids", "alpha capricornids", "delta aquariids", "comet", "halley's comet", "hale-bopp", "shoemaker-levy 9", "comet hyakutake", "comet ison", "comet neowise", "comet encke", "comet tempel-tuttle", "comet swift-tuttle", "comet giacobini-zinner", "comet holmes", "comet lovejoy", "comet pan-starrs", "comet mcnaught", "comet ikeya-seki", "great comet", "long-period comet", "short-period comet", "hyperbolic comet", "parabolic comet", "elliptical orbit", "circular orbit", "eccentricity", "inclination", "ascending node", "descending node", "perihelion", "aphelion", "perigee", "apogee", "apsis", "sidereal period", "synodic period", "orbital resonance", "roche limit", "hill sphere", "sphere of influence", "escape velocity", "orbital velocity", "hohmann transfer", "bi-elliptic transfer", "gravity assist", "delta-v", "specific impulse", "thrust-to-weight ratio", "mass ratio", "rocket equation", "staging", "multistage rocket", "single-stage-to-orbit", "reusable launch vehicle", "expendable launch system", "launch pad", "launch window", "ascent trajectory", "reentry", "ablation", "heat shield", "parachute", "retrorocket", "soft landing", "hard landing", "docking", "rendezvous", "berthing", "spacewalk", "eva", "iva", "tethered", "untethered", "space station", "iss", "tiangong", "mir", "skylab", "salyut", "space shuttle", "soyuz", "dragon", "crew dragon", "starliner", "orion", "apollo", "gemini", "mercury", "vostok", "voskhod", "shenzhou", "progress", "cygnus", "dream chaser", "starship", "falcon", "atlas", "delta", "ariane", "proton", "long march", "angara", "electron", "launcherone", "vega", "h-ii", "gslv", "pslv", "space tourism", "suborbital", "orbital", "interplanetary", "interstellar", "intergalactic", "warp drive", "alcubierre drive", "wormhole", "hyperspace", "jump drive", "solar sail", "laser propulsion", "nuclear pulse propulsion", "ion thruster", "hall effect thruster", "vasimr", "magnetoplasmadynamic thruster", "electrodeless plasma thruster", "fusion rocket", "antimatter rocket", "bussard ramjet", "orion project", "daedalus project", "longshot", "breakthrough starshot", "lightsail", "starshot", "oumuamua", "voyager", "pioneer", "new horizons", "viking", "curiosity", "perseverance", "opportunity", "spirit", "sojourner", "zhurong", "chang'e", "yutu", "luna", "lunokhod", "apollo lunar module", "command module", "service module", "lunar rover", "moonbase", "mars base", "colony", "terraforming", "biosphere", "space habitat", "o'neill cylinder", "stanford torus", "bernal sphere", "dyson sphere", "dyson swarm", "matrioshka brain", "ringworld", "alderson disk", "kardashev scale", "type i", "type ii", "type iii", "type iv", "type v", "civilization", "extraterrestrial", "seti", "drake equation", "fermi paradox", "great filter", "anthropic principle", "panspermia", "directed panspermia", "exogenesis", "astrobiology", "extremophile", "tardigrade", "microorganism", "bacteria", "archaea", "eukaryote", "virus", "prion", "dna", "rna", "amino acid", "protein", "enzyme", "catalyst", "metabolism", "photosynthesis", "respiration", "fermentation", "glycolysis", "krebs cycle", "electron transport chain", "atp", "mitochondria", "chloroplast", "cell membrane", "cell wall", "cytoplasm", "nucleus", "ribosome", "endoplasmic reticulum", "golgi apparatus", "lysosome", "vacuole", "centriole", "cytoskeleton", "microtubule", "microfilament", "intermediate filament", "chromosome", "gene", "allele", "genotype", "phenotype", "mutation", "natural selection", "evolution", "speciation", "adaptation", "genetic drift", "gene flow", "founder effect", "bottleneck effect", "hardy-weinberg principle", "population genetics", "phylogenetics", "cladistics", "taxonomy", "kingdom", "phylum", "class", "order", "family", "genus", "species", "binomial nomenclature", "linnaean classification", "domain", "archaea", "bacteria", "eukarya", "protist", "fungus", "plant", "animal", "invertebrate", "vertebrate", "fish", "amphibian", "reptile", "bird", "mammal", "primate", "hominid", "homo", "sapiens", "neanderthal", "denisovan", "homo erectus", "homo habilis", "australopithecus", "paleolithic", "neolithic", "mesolithic", "bronze age", "iron age", "industrial revolution", "information age", "digital age", "space age", "anthropocene", "holocene", "pleistocene", "epoch", "era", "period", "eon", "geologic time scale", "stratigraphy", "paleontology", "fossil", "amber", "tar pit", "ice core", "sediment", "rock layer", "igneous", "sedimentary", "metamorphic", "plate tectonics", "continental drift", "pangaea", "laurasia", "gondwana", "subduction", "earthquake", "volcano", "magma", "lava", "pyroclastic flow", "tsunami", "richter scale", "mercalli scale", "seismograph", "epicenter", "hypocenter", "fault", "san andreas fault", "ring of fire", "mid-ocean ridge", "rift valley", "hotspot", "hawaiian islands", "yellowstone", "supervolcano", "caldera", "geyser", "fumarole", "hydrothermal vent", "black smoker", "white smoker", "mineral", "crystal", "gemstone", "diamond", "ruby", "sapphire", "emerald", "amethyst", "topaz", "opal", "quartz", "feldspar", "mica", "olivine", "pyroxene", "amphibole", "garnet", "bauxite", "hematite", "magnetite", "galena", "sphalerite", "halite", "gypsum", "calcite", "aragonite", "dolomite", "limestone", "marble", "slate", "schist", "gneiss", "granite", "basalt", "obsidian", "pumice", "sandstone", "shale", "conglomerate", "breccia", "coal", "oil", "natural gas", "fossil fuel", "renewable energy", "solar power", "wind power", "hydroelectric", "geothermal", "biomass", "biofuel", "nuclear power", "fission", "fusion", "reactor", "turbine", "generator", "transformer", "power grid", "smart grid", "battery", "lithium-ion", "nickel-metal hydride", "lead-acid", "solid-state", "supercapacitor", "energy storage", "pumped-storage", "flywheel", "compressed air", "hydrogen fuel cell", "electrolyzer", "hydrogen economy", "carbon capture", "sequestration", "climate change", "global warming", "greenhouse effect", "carbon dioxide", "methane", "nitrous oxide", "cfc", "hfc", "ozone layer", "ozone hole", "uv radiation", "paris agreement", "kyoto protocol", "cop", "ipcc", "renewable portfolio standard", "carbon tax", "cap and trade", "emissions trading", "carbon footprint", "carbon offset", "net zero", "carbon neutral", "climate neutral", "sustainability", "circular economy", "recycling", "upcycling", "composting", "waste management", "landfill", "incineration", "plastic pollution", "microplastics", "great pacific garbage patch", "ocean cleanup", "biodegradable", "compostable", "e-waste", "toxic waste", "hazardous waste", "nuclear waste", "radioactive waste", "spent fuel", "yucca mountain", "deep geological repository", "transmutation", "vitrification", "containment", "decommissioning", "meltdown", "three mile island", "chernobyl", "fukushima", "nuclear safety", "radiation", "ionizing radiation", "alpha particle", "beta particle", "gamma ray", "x-ray", "neutron radiation", "cosmic ray", "background radiation", "sievert", "becquerel", "gray", "dosimeter", "geiger counter", "scintillation counter", "cloud chamber", "bubble chamber", "particle detector", "cyclotron", "synchrotron", "linear accelerator", "collider", "lhc", "tevatron", "desy", "fermilab", "cern", "iter", "nif", "jet", "wendelstein 7-x", "tokamak", "stellarator", "plasma confinement", "magnetic confinement", "inertial confinement", "laser fusion", "magnetic mirror", "z-pinch", "theta pinch", "spheromak", "field-reversed configuration", "dense plasma focus", "fusor", "polywell", "muon-catalyzed fusion", "cold fusion", "pyroelectric fusion", "sonoluminescence", "triple product", "lawson criterion", "breakeven", "ignition", "gain", "deuterium", "tritium", "helium-3", "proton-proton chain", "cno cycle", "triple-alpha process", "stellar nucleosynthesis", "big bang nucleosynthesis", "supernova nucleosynthesis", "cosmic ray spallation", "isotope", "stable isotope", "radioisotope", "half-life", "decay chain", "uranium-238", "uranium-235", "plutonium-239", "thorium-232", "radium-226", "radon-222", "polonium-210", "carbon-14", "potassium-40", "iodine-131", "cesium-137", "strontium-90", "technetium-99", "americium-241", "plutonium-238", "tritium", "deuterium", "helium-3", "boron", "lithium", "beryllium", "moderator", "coolant", "control rod", "fuel rod", "nuclear fuel", "uranium", "plutonium", "mox fuel", "breeder reactor", "fast breeder reactor", "thermal reactor", "pressurized water reactor", "boiling water reactor", "candu reactor", "rbmk", "magnox", "advanced gas-cooled reactor", "molten salt reactor", "pebble-bed reactor", "integral fast reactor", "traveling wave reactor", "fusion reactor", "iter", "demo", "proto", "power plant", "coal plant", "gas plant", "oil plant", "hydroelectric dam", "wind farm", "solar farm", "solar panel", "photovoltaic", "solar thermal", "parabolic trough", "solar tower", "heliostat", "geothermal plant", "biogas plant", "waste-to-energy", "incinerator", "cogeneration", "combined cycle", "gas turbine", "steam turbine", "reciprocating engine", "stirling engine", "microturbine", "fuel cell", "solid oxide", "proton exchange membrane", "molten carbonate", "phosphoric acid", "alkaline", "direct methanol", "hydrogen production", "steam reforming", "electrolysis", "thermolysis", "photoelectrochemical", "biological hydrogen production", "hydrogen storage", "compressed hydrogen", "liquid hydrogen", "metal hydride", "carbon nanotube", "graphene", "fullerene", "nanotechnology", "nanomaterial", "nanoparticle", "quantum dot", "nanotube", "nanowire", "nanorobot", "nanomedicine", "nanosensor", "nanofabrication", "top-down", "bottom-up", "molecular self-assembly", "atomic layer deposition", "chemical vapor deposition", "physical vapor deposition", "lithography", "photolithography", "electron beam lithography", "nanoimprint lithography", "dip pen lithography", "scanning probe microscopy", "atomic force microscope", "scanning tunneling microscope", "transmission electron microscope", "scanning electron microscope", "cryo-electron microscopy", "x-ray crystallography", "mass spectrometry", "nuclear magnetic resonance", "electron paramagnetic resonance", "chromatography", "gas chromatography", "liquid chromatography", "high-performance liquid chromatography", "thin-layer chromatography", "electrophoresis", "gel electrophoresis", "capillary electrophoresis", "polymerase chain reaction", "dna sequencing", "sanger sequencing", "next-generation sequencing", "crispr", "gene editing", "synthetic biology", "metagenomics", "transcriptomics", "proteomics", "metabolomics", "bioinformatics", "computational biology", "systems biology", "biotechnology", "genetic engineering", "cloning", "stem cells", "induced pluripotent stem cells", "tissue engineering", "regenerative medicine", "biopharmaceutical", "monoclonal antibody", "vaccine", "mrna vaccine", "viral vector", "antiviral", "antibiotic", "antifungal", "antiparasitic", "chemotherapy", "immunotherapy", "gene therapy", "pharmacogenomics", "personalized medicine", "clinical trial", "phase i", "phase ii", "phase iii", "phase iv", "placebo", "double-blind", "informed consent", "irb", "fda", "ema", "who", "cdc", "nih", "clinical research", "epidemiology", "public health", "pandemic", "epidemic", "endemic", "outbreak", "zoonotic", "vector-borne", "airborne", "waterborne", "foodborne", "nosocomial", "antibiotic resistance", "superbug", "mrsa", "vrsa", "esbl", "cre", "ndm-1", "carbapenemase", "beta-lactamase", "penicillin", "cephalosporin", "carbapenem", "macrolide", "tetracycline", "aminoglycoside", "quinolone", "sulfonamide", "vancomycin", "daptomycin", "linezolid", "antiretroviral", "protease inhibitor", "integrase inhibitor", "reverse transcriptase inhibitor", "entry inhibitor", "ccr5 antagonist", "fusion inhibitor", "vaccine development", "herd immunity", "vaccine efficacy", "vaccine safety", "adjuvant", "booster shot", "vaccine passport", "immunity", "innate immunity", "adaptive immunity", "humoral immunity", "cell-mediated immunity", "antibody", "antigen", "lymphocyte", "b cell", "t cell", "helper t cell", "cytotoxic t cell", "regulatory t cell", "memory cell", "plasma cell", "natural killer cell", "macrophage", "dendritic cell", "neutrophil", "eosinophil", "basophil", "mast cell", "cytokine", "interferon", "interleukin", "chemokine", "complement system", "inflammation", "autoimmune disease", "allergy", "anaphylaxis", "hypersensitivity", "immunodeficiency", "hiv", "aids", "lupus", "rheumatoid arthritis", "multiple sclerosis", "type 1 diabetes", "crohn's disease", "psoriasis", "asthma", "eczema", "hashimoto's thyroiditis", "graves' disease", "myasthenia gravis", "scleroderma", "sjogren's syndrome", "vasculitis", "sarcoidosis", "immunosuppression", "transplant rejection", "graft-versus-host disease", "blood transfusion", "blood type", "abo", "rh factor", "crossmatching", "hemolysis", "hemolytic disease of the newborn", "coagulation", "platelet", "fibrin", "thrombin", "factor viii", "hemophilia", "von willebrand disease", "thrombosis", "embolism", "deep vein thrombosis", "pulmonary embolism", "stroke", "ischemic stroke", "hemorrhagic stroke", "transient ischemic attack", "aneurysm", "atherosclerosis", "myocardial infarction", "angina", "coronary artery disease", "heart failure", "arrhythmia", "atrial fibrillation", "ventricular fibrillation", "tachycardia", "bradycardia", "cardiomyopathy", "hypertension", "hypotension", "shock", "cardiogenic shock", "septic shock", "anaphylactic shock", "hypovolemic shock", "neurogenic shock", "cardiopulmonary resuscitation", "defibrillation", "pacemaker", "implantable cardioverter-defibrillator", "coronary angioplasty", "stent", "bypass surgery", "heart transplant", "artificial heart", "ventricular assist device", "echocardiogram", "electrocardiogram", "stress test", "cardiac catheterization", "holter monitor", "event monitor", "troponin", "bnp", "c-reactive protein", "cholesterol", "ldl", "hdl", "triglycerides", "statins", "beta-blockers", "ace inhibitors", "arbs", "calcium channel blockers", "diuretics", "nitroglycerin", "aspirin", "clopidogrel", "warfarin", "heparin", "noac", "thrombolytics", "antiplatelet", "anticoagulant", "fibrinolytic", "hemostatic", "tranexamic acid", "vitamin k", "protamine", "blood thinner", "coagulation cascade", "intrinsic pathway", "extrinsic pathway", "common pathway", "prothrombin time", "inr", "partial thromboplastin time", "thrombin time", "fibrinogen", "d-dimer", "platelet count", "hematocrit", "hemoglobin", "anemia", "iron deficiency anemia", "vitamin b12 deficiency", "folate deficiency", "sickle cell anemia", "thalassemia", "aplastic anemia", "hemolytic anemia", "polycythemia vera", "leukemia", "lymphoma", "myeloma", "myelodysplastic syndrome", "hodgkin's disease", "non-hodgkin's lymphoma", "multiple myeloma", "lymphadenopathy", "splenomegaly", "hepatomegaly", "leukocytosis", "leukopenia", "neutropenia", "thrombocytopenia", "thrombocytosis", "pancytopenia", "bone marrow transplant", "stem cell transplant", "chemotherapy", "radiation therapy", "immunotherapy", "targeted therapy", "hormone therapy", "palliative care", "hospice", "prognosis", "remission", "relapse", "metastasis", "carcinoma", "sarcoma", "lymphoma", "leukemia", "melanoma", "glioma", "adenocarcinoma", "squamous cell carcinoma", "basal cell carcinoma", "benign", "malignant", "tumor grade", "tumor stage", "biopsy", "pathology", "oncologist", "hematologist", "surgeon", "radiologist", "radiation oncologist", "medical oncologist", "palliative care specialist", "nurse", "pharmacist", "physical therapist", "occupational therapist", "speech therapist", "dietitian", "social worker", "psychologist", "psychiatrist", "counselor", "chaplain", "patient advocate", "informed consent", "advance directive", "living will", "durable power of attorney", "health care proxy", "do not resuscitate", "palliative sedation", "euthanasia", "assisted suicide", "medical ethics", "autonomy", "beneficence", "non-maleficence", "justice", "confidentiality", "informed consent", "capacity", "competence", "surrogate decision maker", "best interest standard", "substituted judgment", "medical futility", "resource allocation", "triage", "disaster medicine", "public health emergency", "pandemic preparedness", "contact tracing", "quarantine", "isolation", "social distancing", "mask mandate", "vaccine mandate", "herd immunity", "reproductive number", "case fatality rate", "morbidity", "mortality", "incidence", "prevalence", "endemic", "epidemic", "pandemic", "outbreak", "zoonosis", "vector control", "one health", "antimicrobial stewardship", "infection control", "hand hygiene", "personal protective equipment", "sterilization", "disinfection", "antiseptic", "autoclave", "ethylene oxide", "gamma radiation", "pasteurization", "uv germicidal irradiation", "hepa filter", "negative pressure room", "biohazard", "biosafety level", "bsl-1", "bsl-2", "bsl-3", "bsl-4", "aerobiology", "epidemiological triangle", "host", "agent", "environment", "chain of infection", "reservoir", "portal of exit", "mode of transmission", "portal of entry", "susceptible host", "incubation period", "prodromal period", "illness period", "convalescence", "carrier", "asymptomatic", "symptomatic", "latent infection", "chronic infection", "acute infection", "opportunistic infection", "nosocomial infection", "community-acquired infection", "superinfection", "secondary infection", "primary infection", "localized infection", "systemic infection", "sepsis", "septicemia", "bacteremia", "viremia", "fungemia", "parasitemia", "toxemia", "endotoxin", "exotoxin", "enterotoxin", "neurotoxin", "cytotoxin", "hemolysin", "leukocidin", "pyrogen", "superantigen", "virulence factor", "adhesion", "invasion", "colonization", "biofilm", "quorum sensing", "antigenic variation", "antigenic drift", "antigenic shift", "pathogenicity island", "plasmid", "transposon", "integron", "genomic island", "horizontal gene transfer", "conjugation", "transformation", "transduction", "competence factor", "pilus", "f plasmid", "r plasmid", "col plasmid", "virulence plasmid", "bacteriophage", "lytic cycle", "lysogenic cycle", "prophage", "temperate phage", "virulent phage", "prion", "viroid", "virusoid", "satellite virus", "dna virus", "rna virus", "retrovirus", "reverse transcriptase", "provirus", "oncovirus", "latent virus", "persistent virus", "slow virus", "acute virus", "chronic virus", "enveloped virus", "non-enveloped virus", "capsid", "capsomere", "nucleocapsid", "spike protein", "hemagglutinin", "neuraminidase", "matrix protein", "viral envelope", "viral receptor", "host range", "tropism", "viral load", "viral shedding", "incubation period", "window period", "seroconversion", "antibody test", "antigen test", "pcr test", "rapid test", "false positive", "false negative", "sensitivity", "specificity", "positive predictive value", "negative predictive value", "prevalence", "bayes' theorem", "likelihood ratio", "receiver operating characteristic", "area under the curve", "gold standard", "diagnostic accuracy", "screening test", "confirmatory test", "differential diagnosis", "clinical decision rule", "algoritmo", "clinical pathway", "practice guideline", "evidence-based medicine", "randomized controlled trial", "cohort study", "case-control study", "cross-sectional study", "longitudinal study", "ecological study", "meta-analysis", "systematic review", "publication bias", "confounding", "bias", "selection bias", "information bias", "recall bias", "observer bias", "hawthorne effect", "placebo effect", "nocebo effect", "regression to the mean", "confidence interval", "p-value", "statistical significance", "clinical significance", "power", "sample size", "effect size", "odds ratio", "relative risk", "hazard ratio", "number needed to treat", "number needed to harm", "attributable risk", "incidence rate", "prevalence rate", "mortality rate", "case fatality rate", "survival analysis", "kaplan-meier curve", "cox proportional hazards model", "log-rank test", "life table", "actuarial analysis", "demography", "population pyramid", "fertility rate", "birth rate", "death rate", "migration rate", "life expectancy", "infant mortality", "maternal mortality", "morbidity rate", "disability-adjusted life year", "quality-adjusted life year", "burden of disease", "global burden of disease", "daly", "qaly", "health-adjusted life expectancy", "disability weight", "comorbidity", "multimorbidity", "polypharmacy", "adverse drug reaction", "drug interaction", "pharmacokinetics", "pharmacodynamics", "absorption", "distribution", "metabolism", "excretion", "bioavailability", "half-life", "volume of distribution", "clearance", "first-pass effect", "enzyme induction", "enzyme inhibition", "cytochrome p450", "drug-drug interaction", "therapeutic index", "margin of safety", "loading dose", "maintenance dose", "steady state", "peak level", "trough level", "therapeutic drug monitoring", "adherence", "compliance", "persistence", "medication error", "adverse event", "side effect", "toxicity", "overdose", "antidote", "detoxification", "chelation therapy", "dialysis", "charcoal", "naloxone", "flumazenil", "atropine", "vitamin k", "acetylcysteine", "digoxin immune fab", "antivenom", "immunoglobulin", "vaccine", "toxoid", "antitoxin", "prophylaxis", "pre-exposure prophylaxis", "post-exposure prophylaxis", "chemoprophylaxis", "immunoprophylaxis", "travel medicine", "vaccination schedule", "catch-up vaccination", "booster dose", "herd immunity", "vaccine hesitancy", "anti-vaxxer", "vaccine injury", "vaccine court", "national vaccine injury compensation program", "informed consent", "vaccine safety datalink", "vaccine adverse event reporting system", "vaccine confidence", "immunization registry", "cold chain", "vaccine storage", "vaccine transport", "vial monitor", "reconstitution", "adjuvant", "preservative", "thiomersal", "aluminum", "formaldehyde", "phenol", "antibiotic", "stabilizer", "surfactant", "buffer", "diluent", "excipient", "active ingredient", "placebo", "generico", "brand name", "patent", "fda approval", "clinical trial phase", "orphan drug", "fast track", "breakthrough therapy", "accelerated approval", "priority review", "biologic", "biosimilar", "interchangeable", "compounding", "formulary", "prior authorization", "step therapy", "quantity limit", "co-pay", "co-insurance", "deductible", "out-of-pocket maximum", "health insurance", "medicare", "medicaid", "aca", "obamacare", "health exchange", "premium", "subsidy", "cobra", "hsa", "fsa", "hdhp", "ppo", "hmo", "epo", "pos", "aco", "pcmh", "telemedicine", "telehealth", "e-health", "mhealth", "wearable", "fitness tracker", "smartwatch", "blood pressure monitor", "glucose monitor", "pulse oximeter", "ecg monitor", "implantable device", "remote monitoring", "artificial intelligence", "machine learning", "deep learning", "neural network", "natural language processing", "computer vision", "robotics", "surgical robot", "da vinci", "robotic surgery", "telesurgery", "augmented reality", "virtual reality", "mixed reality", "holography", "3d printing", "bioprinting", "organs-on-a-chip", "lab-on-a-chip", "microfluidics", "nanomedicine", "theranostics", "personalized medicine", "precision medicine", "genomic medicine", "pharmacogenomics", "proteomics", "metabolomics", "microbiome", "gut flora", "probiotic", "prebiotic", "synbiotic", "dysbiosis", "fecal transplant", "microbial diversity", "metagenome", "crispr", "gene drive", "synthetic biology", "biobricks", "igem", "genetic circuit", "toggle switch", "repressilator", "quorum sensing circuit", "bioreactor", "fermenter", "cell culture", "tissue culture", "primary cell", "cell line", "hela", "hek 293", "cho cells", "hybridoma", "monoclonal antibody production", "recombinant dna", "plasmid", "vector", "restriction enzyme", "ligase", "pcr", "gel electrophoresis", "blotting", "southern blot", "northern blot", "western blot", "eastern blot", "microarray", "dna chip", "gene expression profiling", "rna-seq", "chip-seq", "atac-seq", "crispr screen", "knockout", "knockin", "transgenic", "gene targeting", "homologous recombination", "zinc finger nuclease", "talen", "crispr-cas9", "prime editing", "base editing", "rna interference", "sirna", "shrna", "mirna", "antisense rna", "ribozyme", "aptamer", "peptide nucleic acid", "morpholino", "gene therapy", "viral vector", "adenovirus", "adeno-associated virus", "retrovirus", "lentivirus", "herpes simplex virus", "vaccinia virus", "non-viral vector", "liposome", "polymer", "nanoparticle", "electroporation", "gene gun", "sonoporation", "magnetofection", "transfection", "transduction", "transformation", "conjugation", "bacterial artificial chromosome", "yeast artificial chromosome", "human artificial chromosome", "cosmid", "fosmid", "phagemid", "shuttle vector", "expression vector", "inducible promoter", "constitutive promoter", "reporter gene", "gfp", "luciferase", "lacz", "antibiotic resistance gene", "selection marker", "blue-white screening", "colony pcr", "plasmid miniprep", "maxiprep", "megaprep", "gigaprep", "dna sequencing", "sanger method", "next-gen sequencing", "illumina", "pyrosequencing", "ion torrent", "pacbio", "oxford nanopore", "shotgun sequencing", "whole genome sequencing", "exome sequencing", "transcriptome sequencing", "metagenomic sequencing", "de novo assembly", "reference genome", "read mapping", "variant calling", "snp", "indel", "cnv", "structural variation", "haplotype", "phasing", "linkage disequilibrium", "genome-wide association study", "heritability", "mendelian randomization", "polygenic risk score", "personal genome", "direct-to-consumer genetic testing", "23andme", "ancestrydna", "genealogy", "genetic counseling", "carrier screening", "prenatal testing", "amniocentesis", "chorionic villus sampling", "non-invasive prenatal testing", "preimplantation genetic diagnosis", "newborn screening", "pharmacogenetic testing", "predictive testing", "presymptomatic testing", "diagnostic testing", "forensic dna", "codis", "str", "y-str", "mitochondrial dna", "dna fingerprinting", "dna profiling", "genetic privacy", "gina", "hipaa", "data security", "informed consent", "incidental findings", "secondary findings", "return of results", "right not to know", "genetic discrimination", "patenting genes", "myriad genetics", "crispr patent", "bioethics", "eugenics", "designer babies", "gene editing ethics", "three-parent baby", "mitochondrial replacement therapy", "cloning", "reproductive cloning", "therapeutic cloning", "stem cell ethics", "embryonic stem cells", "adult stem cells", "induced pluripotent stem cells", "organoid", "tissue engineering", "artificial organ", "xenotransplantation", "chimera", "human-animal hybrid", "crispr babies", "he jiankui", "germline editing", "somatic editing", "off-target effects", "mosaicismo", "on-target effects", "biohacking", "grinder", "diy biology", "citizen science", "open science", "open access", "preprint", "peer review", "impact factor", "h-index", "citation", "plagiarism", "retraction", "reproducibility crisis", "p-hacking", "harking", "data dredging", "publication bias", "file drawer problem", "meta-analysis", "systematic review", "cochrane collaboration", "prisma", "moose", "strobe", "consort", "spirit", "equator network", "clinical trial registration", "clinicaltrials.gov", "eu clinical trials register", "who ictrp", "protocol", "informed consent form", "case report form", "data management", "monitoring", "audit", "inspection", "good clinical practice", "ich guidelines", "fda regulations", "ema guidelines", "ethics committee", "data safety monitoring board", "interim analysis", "stopping rules", "intent-to-treat analysis", "per-protocol analysis", "missing data", "imputation", "sensitivity analysis", "subgroup analysis", "multiplicity", "bonferroni correction", "false discovery rate", "bayesian statistics", "frequentist statistics", "likelihood", "prior", "posterior", "credible interval", "markov chain monte carlo", "hierarchical model", "mixed effects model", "regression analysis", "linear regression", "logistic regression", "cox regression", "poisson regression", "generalized linear model", "anova", "manova", "ancova", "mancova", "factor analysis", "principal component analysis", "cluster analysis", "discriminant analysis", "survival analysis", "kaplan-meier", "cox model", "parametric survival models", "accelerated failure time", "competing risks", "frailty model", "multi-state model", "joint modeling", "longitudinal data", "repeated measures", "mixed models", "gee", "time series", "arima", "garch", "state space model", "spatial statistics", "geostatistics", "kriging", "moran's i", "spatial autocorrelation", "bayesian hierarchical model", "machine learning", "supervised learning", "unsupervised learning", "semi-supervised learning", "reinforcement learning", "classification", "regression", "clustering", "dimensionality reduction", "decision tree", "random forest", "gradient boosting", "xgboost", "lightgbm", "catboost", "support vector machine", "naive bayes", "k-nearest neighbors", "neural network", "deep learning", "convolutional neural network", "recurrent neural network", "long short-term memory", "transformer", "bert", "gpt", "autoencoder", "generative adversarial network", "reinforcement learning", "q-learning", "deep q-network", "policy gradient", "actor-critic", "monte carlo tree search", "natural language processing", "tokenization", "stemming", "lemmatization", "part-of-speech tagging", "named entity recognition", "sentiment analysis", "topic modeling", "word embedding", "word2vec", "glove", "fasttext", "bert", "transformer", "text generation", "machine translation", "summarization", "question answering", "chatbot", "dialog system", "speech recognition", "text-to-speech", "optical character recognition", "computer vision", "image classification", "object detection", "semantic segmentation", "instance segmentation", "image captioning", "face recognition", "image generation", "style transfer", "super-resolution", "image-to-image translation", "video analysis", "action recognition", "tracking", "3d reconstruction", "augmented reality", "virtual reality", "robotics", "autonomous vehicles", "drone", "robot operating system", "slam", "motion planning", "control theory", "pid controller", "kalman filter", "mpc", "reinforcement learning", "sim-to-real", "digital twin", "industrial iot", "industry 4.0", "smart factory", "predictive maintenance", "anomaly detection", "time series forecasting", "recommender system", "collaborative filtering", "content-based filtering", "matrix factorization", "surprise library", "deep learning for recommendations", "fraud detection", "credit scoring", "risk modeling", "customer churn", "market basket analysis", "a/b testing", "multi-armed bandit", "contextual bandit", "thompson sampling", "bayesian optimization", "hyperparameter tuning", "grid search", "random search", "genetic algorithm", "particle swarm optimization", "automl", "neural architecture search", "transfer learning", "domain adaptation", "few-shot learning", "zero-shot learning", "self-supervised learning", "semi-supervised learning", "active learning", "online learning", "federated learning", "edge computing", "model compression", "pruning", "quantization", "knowledge distillation", "blockchain", "bitcoin", "ethereum", "smart contract", "decentralized application", "consensus algorithm", "proof of work", "proof of stake", "delegated proof of stake", "byzantine fault tolerance", "cryptocurrency", "token", "nft", "defi", "dao", "ipfs", "solidity", "web3", "metaverse", "digital currency", "central bank digital currency", "stablecoin", "cryptography", "symmetric encryption", "aes", "des", "rsa", "ecc", "diffie-hellman", "digital signature", "hash function", "sha", "md5", "hmac", "salt", "pepper", "key derivation function", "pbkdf2", "scrypt", "argon2", "zero-knowledge proof", "zk-snark", "homomorphic encryption", "post-quantum cryptography", "quantum cryptography", "quantum key distribution", "blockchain trilemma", "scalability", "decentralization", "security", "sharding", "layer 2", "lightning network", "rollup", "plasma", "sidechain", "cross-chain", "interoperability", "oracle", "chainlink", "the graph", "decentralized exchange", "uniswap", "sushiswap", "liquidity pool", "automated market maker", "yield farming", "staking", "lending protocol", "compound", "aave", "flash loan", "nft marketplace", "opensea", "rarible", "foundation", "crypto art", "generative art", "metaverse", "virtual land", "decentraland", "cryptovoxels", "sandbox", "axie infinity", "play-to-earn", "gamefi", "nft game", "defi kingdoms", "stepn", "move-to-earn", "socialfi", "dao", "makerdao", "constitutiondao", "molochdao", "aragon", "dao tooling", "snapshot", "gnosis safe", "tally", "sybil", "quadratic voting", "futarchy", "liquid democracy", "token curated registry", "harberger tax", "universal basic income", "web3", "ownership economy", "creator economy", "ssi", "self-sovereign identity", "did", "decentralized identity", "verifiable credential", "soulbound token", "nft", "erc-721", "erc-1155", "erc-20", "eip", "ethereum improvement proposal", "hardhat", "truffle", "remix", "ganache", "infura", "alchemy", "openzeppelin", "smart contract audit", "formal verification", "mythx", "slither", "manticore", "echidna", "reentrancy attack", "dao hack", "flash loan attack", "front-running", "mev", "miner extractable value", "sandwich attack", "time bandit attack", "51% attack", "sybil attack", "p + epsilon attack", "nothing at stake", "long-range attack", "cryptoeconomics", "tokenomics", "inflation", "deflation", "staking rewards", "burn mechanism", "vesting", "vesting schedule", "cliff", "linear vesting", "token lockup", "liquidity mining", "airdrop", "initial coin offering", "ico", "initial exchange offering", "ieo", "security token offering", "sto", "initial dex offering", "ido", "launchpad", "seed round", "private sale", "public sale", "venture capital", "angel investor", "accelerator", "incubator", "pitch deck", "white paper", "litepaper", "yellow paper", "technical documentation", "roadmap", "milestone", "token distribution", "team allocation", "advisor allocation", "foundation allocation", "community treasury", "ecosystem fund", "grants program", "bug bounty", "hackathon", "developer community", "discord", "telegram", "twitter", "reddit", "medium", "github", "gitcoin", "bounty", "ama", "ask me anything", "whitepaper", "roadmap", "partnership", "adoption", "mainnet launch", "testnet", "devnet", "faucet", "gas fee", "transaction fee", "block time", "block size", "throughput", "tps", "transactions per second", "finality", "confirmation time", "scalability trilemma", "sharding", "rollups", "optimistic rollup", "zk-rollup", "validium", "plasma", "state channels", "sidechains", "cross-chain bridges", "interoperability", "polkadot", "cosmos", "avalanche", "polygon", "optimism", "arbitrum", "zksync", "starkware", "solana", "cardano", "algorand", "near", "aptos", "sui", "internet computer", "flow", "tezos", "hedera", "fantom", "klaytn", "celo", "terra", "luna", "ust", "algorithmic stablecoin", "collateralized stablecoin", "fiat-backed stablecoin", "crypto-backed stablecoin", "dai", "usdc", "usdt", "busd", "tether", "usd coin", "binance usd", "trueusd", "paxos standard", "gemini dollar", "husd", "frax", "ampleforth", "fei", "terrausd", "ust depeg", "bank run", "death spiral", "luna crash", "celsius", "voyager", "three arrows capital", "ftx", "sam bankman-fried", "alameda research", "caroline ellison", "gary wang", "blockfi", "crypto winter", "bear market", "market cap", "volume", "liquidity", "order book", "market order", "limit order", "stop loss", "take profit", "margin trading", "leverage", "perpetual swap", "futures", "options", "derivatives", "spot trading", "otc", "over-the-counter", "arbitrage", "market making", "high-frequency trading", "slippage", "spread", "bid-ask spread", "depth chart", "candlestick", "technical analysis", "support", "resistance", "trend line", "moving average", "rsi", "macd", "bollinger bands", "fibonacci retracement", "elliott wave", "wyckoff method", "volume profile", "order flow", "market sentiment", "fear and greed index", "hodl", "fomo", "fud", "shilling", "moon", "lambo", "to the moon", "when lambo", "bagholder", "whale", "diamond hands", "paper hands", "buy the dip", "sell the news", "pump and dump", "rug pull", "exit scam", "honeypot", "scam", "phishing", "sim swap", "social engineering", "malware", "ransomware", "cryptojacking", "dark web", "silk road", "alphabay", "hydra", "tor", "vpn", "proxy", "firewall", "antivirus", "two-factor authentication", "2fa", "multi-factor authentication", "mfa", "password manager", "encryption", "end-to-end encryption", "zero trust", "zero-knowledge proof", "penetration testing", "ethical hacker", "bug bounty", "white hat", "black hat", "grey hat", "script kiddie", "advanced persistent threat", "apt", "nation-state actor", "cyber warfare", "cyber espionage", "cyber terrorism", "cyber crime", "identity theft", "credit card fraud", "bank fraud", "tax fraud", "money laundering", "aml", "anti-money laundering", "kyc", "know your customer", "ctr", "currency transaction report", "sar", "suspicious activity report", "fatf", "financial action task force", "travel rule", "ofac", "office of foreign assets control", "sanctions", "embargo", "compliance", "regulatory risk", "sec", "securities and exchange commission", "cftc", "commodity futures trading commission", "fincen", "financial crimes enforcement network", "occ", "office of the comptroller of the currency", "fdic", "federal deposit insurance corporation", "federal reserve", "ecb", "european central bank", "fca", "financial conduct authority", "mas", "monetary authority of singapore", "finma", "swiss financial market supervisory authority", "mica", "markets in crypto-assets regulation", "gdpr", "general data protection regulation", "ccpa", "california consumer privacy act", "pipl", "personal information protection law", "lgpd", "lei geral de proteção de dados", "hipaa", "health insurance portability and accountability act", "sox", "sarbanes-oxley act", "pci dss", "payment card industry data security standard", "iso 27001", "iso 27002", "soc 2", "nist", "national institute of standards and technology", "cybersecurity framework", "cis controls", "owasp", "open web application security project", "top 10", "sql injection", "cross-site scripting", "xss", "cross-site request forgery", "csrf", "clickjacking", "session hijacking", "man-in-the-middle", "mitm", "phishing", "spear phishing", "whaling", "vishing", "smishing", "pretexting", "baiting", "quid pro quo", "tailgating", "dumpster diving", "shoulder surfing", "eavesdropping", "keylogger", "spyware", "adware", "trojan horse", "rootkit", "backdoor", "logic bomb", "time bomb", "fork bomb", "zombie process", "botnet", "command and control", "c2", "ddos", "distributed denial of service", "dos", "denial of service", "amplification attack", "dns amplification", "ntp amplification", "syn flood", "ping flood", "http flood", "slowloris", "zero-day", "exploit", "vulnerability", "patch", "update", "hotfix", "workaround", "mitigation", "incident response", "disaster recovery", "business continuity", "rto", "recovery time objective", "rpo", "recovery point objective", "backup", "full backup", "incremental backup", "differential backup", "snapshot", "raid", "raid 0", "raid 1", "raid 5", "raid 10", "cold storage", "hot storage", "cloud storage", "s3", "glacier", "azure blob storage", "google cloud storage", "data lake", "data warehouse", "data mart", "etl", "extract, transform, load", "elt", "extract, load, transform", "data pipeline", "batch processing", "stream processing", "apache kafka", "apache flink", "apache spark", "apache beam", "airflow", "luigi", "dagster", "prefect", "dbt", "data build tool", "snowflake", "bigquery", "redshift", "databricks", "hadoop", "hdfs", "mapreduce", "yarn", "hive", "pig", "hbase", "zookeeper", "oozie", "sqoop", "flume", "mahout", "ambari", "spark", "storm", "kafka", "cassandra", "mongodb", "couchbase", "redis", "elasticsearch", "solr", "neo4j", "arangodb", "orientdb", "janusgraph", "titan", "dgraph", "timescaledb", "influxdb", "prometheus", "graphite", "grafana", "kibana", "tableau", "power bi", "looker", "metabase", "superset", "mode", "periscope", "chartio", "data studio", "qlik", "microstrategy", "sas", "spss", "stata", "r", "python", "julia", "matlab", "excel", "google sheets", "airtable", "notion", "confluence", "jira", "trello", "asana", "monday", "smartsheet", "clickup", "basecamp", "slack", "microsoft teams", "zoom", "google meet", "webex", "skype", "discord", "telegram", "whatsapp", "signal", "imessage", "sms", "email", "gmail", "outlook", "protonmail", "tutanota", "pgp", "gpg", "encrypted email", "end-to-end encryption", "zero access encryption", "forward secrecy", "diffie-hellman key exchange", "rsa key exchange", "elliptic curve cryptography", "ecdsa", "eddsa", "ed25519", "curve25519", "nist curves", "brainpool curves", "post-quantum cryptography", "lattice-based", "hash-based", "code-based", "multivariate", "supersingular isogeny", "sidh", "kyber", "dilithium", "falcon", "ntru", "mceliece", "rainbow", "sphincs", "bliss", "newhope", "ring-lwe", "lac", "round5", "saber", "ntru prime", "classic mceliece", "crystals", "bike", "hqc", "sike", "picnic", "qtesla", "frodokem", "ledacrypt", "dme", "rollo", "rqc", "threebears", "titanium"
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

