// const instList = [
//   {
//     name: "gtr", 
//     type: "string"
//   },
//   {
//     name: "drums", 
//     type: "percussion"
//   },
//   {
//     name: "flute", 
//     type: "wind"
//   },
//   {
//     name: "Bianzhong(Chinese bronze bells)",
//     type: "string"
//   },
//   {
//     name: "Bianqing(Chinese stone chimes)",
//     type: "percussion"
//   },
//   {
//     name: "Berimbau(Brazilian musical bow)",
//     type: "wind"
//   },
//   {
//     name: "Bifora(Sicilian oboe)", 
//     type: "string"
//   },
//   {
//     name: "Biniou(French bagpip", 
//     type: "percussion"
//   },
//   {
//     name: "Bodhrán(Irish drum)", 
//     type: "wind"
//   },
//   {
//     name: "Boha(French bagpipe)",
//     type: "string"
//   },
//   {
//     name: "Bombarde",
//     type: "percussion"
//   },
//   {
//     name: "Bombardino(Spanish Euphonium)",
//     type: "wind"
//   },

// ];



//   "flute",
//   "violin",
//   "trombone",
//   "viola",
//   "harp",
//   "cornet",
//   "vocal",
//   "shout",
//   "Berimbau(Brazilian musical bow)",
//   "Bianqing(Chinese stone chimes)",
//   "Bianzhong(Chinese bronze bells)",
//   "Bifora(Sicilian oboe)",
//   "Biniou(French bagpipe)",
//   "Biwa(Japanese short - necked lute)",
//   "Bock(German bagpipes)",
//   "Bodega(French bagpipe)",
//   "Bodhrán(Irish drum)",
//   "Boha(French bagpipe)",
//   "Bombarde",
//   "Bombardino(Spanish Euphonium)",
//   "Bongo drum",
//   "Border pipe / lowland bagpipe",
//   "Bordonua(Puerto Rican bass guitar)",
//   "Bouzouki(Greek lute)",
//   "Brian Boru bagpipes",
//   "Bullroarer",
//   "Button accordian",
// ];


var instNames = ["accordina", "harmonica/accordion hybrid", "accordion", "algozey", "alphorn", "alto clarinet", "alto flute", "alto saxophone", "Anglo concertina", "historical hybrid between English and German style concertinas", "arghul", "bagpipe", "bandoneón", "bansuri", "baritone horn", "baritone saxophone", "baroque rackett", "Conical bored compact double reed", "baroque trumpet", "20th century reinvented natural trumpet", "barrel organ", "bass clarinet", "bass flute", "bass harmonica", "bass oboe", "bass recorder", "bass saxophone", "bass trombone", "bass trumpet", "basset clarinet", "basset horn", "bassoon", "bawu", "bayan", "bazooka", "bellow-blown bagpipes", "birbynė", "birch lur", "Wooden natural brass", "boatswain's pipe", "bombarde", "brass", "bronze lur", "Bronze age natural brass", "bugle", "buisine", "button accordion", "calliope", "Cembalet", "an electric piano with reeds", "chalumeau", "chamber organ", "chirimía", "oboe-like double-reed from South-America", "chromatic button accordion", "chromatic harmonica", "cimbasso", "19th century bass trombone", "clarinet", "claviola", "free reed aerophone with pitching pipes.", "concertina", "conch", "contrabass clarinet", "contrabass flute", "contrabass recorder", "contrabass saxophone", "contrabassoon", "cornamuse", "cornet", "19th century brass trumpet-like", "cornett", "Wooden medieval wind instrument", "crumhorn", "daegeum", "danso", "Korean educational end-blown bamboo flute", "descant recorder / soprano recorder", "diatonic accordion / melodeon", "didgeridoo", "đing buốt", "đing năm", "ding tac ta", "dizi", "double reed", "duck call", "duduk", "dulcian", "dulzaina", "E-flat clarinet", "end-blown flute", "English concertina", "unisonoric concertina", "English flageolet", "English \"improved\" flageolet", "English horn", "Transposing oboe", "euphonium", "fife", "fipple flute", "flabiol", "Small Catalan fipple flute", "flageolet", "french 16th century fipple flute", "flugelhorn", "flumpet", "Hybrid between trumpet and flugelhorn", "flute", "flûte d'amour", "fourth flute", "free reed", "French horn", "fujara", "garklein recorder", "gemshorn", "Medieval chamois or goat horn", "German concertina", "bisonoric concertina", "gralla", "great bass recorder / c-bass recorder", "guan", "härjedalspipa", "fipple flute from Härjedalen, sweden", "harmonica", "mouth organ", "harmonium", "reed organ", "heckelphone", "helicon", "hichiriki", "hmông flute", "horn", "hotchiku", "hue puruhau", "Māori taonga pūoro large bass gourd", "hulusi", "Indian bamboo flutes", "Irish flute", "19th century transverse flute", "jug", "k'lông pút", "Vietnamese Air Xylophone", "kagurabue", "bamboo transverse flute", "kaval", "kèn bầu", "kèn lá", "keyed brass instruments", "khèn Mèo", "khene", "khlui", "ki pah", "kōauau", "Māori taonga pūoro small cross-blown flute", "kōauau ponga ihu", "Māori taonga pūoro tiny gourd nose flute", "kortholt", "launeddas", "limbe", "low whistle", "mellophone", "melodica", "Free-reed keyboard mouth-organ", "mijwiz", "twin bamboo single reed pipe", "mirliton", "mouth organ", "musette de cour", "nabal", "nadaswaram", "nagak", "nai", "natural brass instruments", "natural horn", "Valveless and keyless ancestor of the modern horn", "natural trumpet", "Valveless ancestor of the modern trumpet", "ney", "nguru", "Māori taonga pūoro small vessel flute", "nohkan", "Northumbrian pipes", "nose flute", "nose whistle", "oboe", "oboe d'amore", "oboe da caccia", "ocarina", "olifant", "Ivory natural brass hunting horn", "ophicleide", "organ", "pan flute", "pang gu ly hu hmông", "pi", "pi nai", "pí thiu", "piano accordion", "piccolo", "piccolo oboe", "piccolo trumpet", "pipe organ", "piri", "pocket trumpet", "poi āwhiowhio", "Māori taonga pūoro swung whistling gourd", "porotiti", "Māori taonga pūoro humming discs", "pōrutu", "Māori taonga pūoro two harmonic flute", "post horn", "practice chanter", "pūkaea", "Māori taonga pūoro wooden announcement trumpet", "pūmotomoto", "Māori taonga pūoro long one-holed flute", "pūpakapaka", "Māori taonga pūoro long necked conch trumpet", "pūtātara", "Māori taonga pūoro conch shell trumpet", "pūtōrino", "Māori taonga pūoro wooden dual-voiced flute", "quadruple reed", "quena", "rauschpfeife", "recorder", "reed organ", "reeds", "regal", "Portable bellowed reed organ", "rehu", "Māori taonga pūoro long flute", "renaissance rackett", "Renaissance era compact double reed", "rondador", "ryuteki", "sackbut", "saduk", "samba whistle", "sáo meò", "saó ôi flute", "sáo trúc", "sarrusophone", "saxophone", "Schwyzerörgeli", "Scottish smallpipes", "serpent", "shakuhachi", "shawm", "shehnai", "sheng", "shinobue", "sho", "shofar", "Ram's horn natural brass", "shruti box", "siku", "single reed", "slide brass instruments", "slide whistle", "sopilka", "sopranino recorder", "sopranino saxophone", "soprano clarinet", "soprano flute", "soprano saxophone", "sousaphone", "spilåpipa", "subcontrabass recorder", "suling", "suona", "Swedish bagpipes", "syrinx", "taepyeongso", "taragot", "tarota", "Wooden keyless shawm from Catalonia", "tenor horn / alto horn", "tenor recorder", "tenor saxophone", "tenor trombone", "tenora", "Catalonian double reed descendant of shawm", "theatre organ", "three-hole pipe", "european 11th century pipe", "tible", "Catalan valved shawm used in cobla", "tiêu", "tin whistle", "Tonette", "plastic fipple flute", "tràm plè", "trắng jâu", "trắng lu", "transverse flute", "treble flute", "treble recorder / alto recorder", "trikiti", "Basque button accordion", "trombone", "tromboon", "trumpet", "tuba", "tubax", "tungso", "Korean notched end-blown bamboo flute", "txistu", "Basque fipple flute", "uilleann pipes", "valve trombone", "valved brass instruments", "venu", "vessel flute", "vibrandoneon", "accordina with piano keys", "Vienna horn", "vuvuzela", "plastic horn", "Wagner tuba", "whistle", "small, simple, singletoned flute", "willow flute", "wind instruments", "woodwind", "wot", "Xaphoon", "xiao", "Chinese end-blown flute", "xun", "żaqq", "zhaleika", "zurna", "12 string guitar", "17-string bass koto", "acoustic bass guitar", "acoustic fretless guitar", "acoustic guitar", "aeolian harp", "ajaeng", "alto viol", "Alto member of the viol family", "alto violin", "Alto or vertical violin, for French \"alto\" credits, choose viola", "Appalachian dulcimer", "archlute", "archtop guitar", "arpeggione", "bass viol with guitar frets and tuning", "autoharp", "baglama", "bajo sexto", "balalaika", "bandora", "bandura", "Ukraininan lute-zither", "bandurria", "banhu", "northern coconut huqin", "banjitar", "banjo", "banjo-ukulele", "banjo ukulele hybrid", "banjolin", "banjo and mandolin/violin hybrid", "barbat", "ancient asian/persian lute", "baritone guitar", "baroque guitar", "baryton", "Bowed with pluckable strings", "bass guitar", "bass viol", "Bass member of the viol family", "bass violin", "Sixteenth century precursor of the (violon)cello", "berda", "begeš, large bass serbo-croatian plucked stringinstrument", "berimbau", "bhapang", "Rajasthani string membranophone", "bisernica", "prim, small serbo-croatian plucked stringinstrument", "biwa", "Blaster Beam", "long metal bar with strings", "bolon", "bouzar / gouzouki", "hybrid of bouzouki and guitar", "bouzouki", "bowed piano", "bowed psaltery", "bowed string instruments", "brač", "basprim, serbo-croatian plucked stringinstrument", "bugarija", "kontra, serbo-croatian plucked stringinstrument", "bulbul tarang", "buzuq", "cavaquinho", "cello", "čelo", "čelović or csello, counter serbo-croatian plucked stringinstrument", "chakhe", "chanzy", "Chapman stick", "charango", "chikuzen biwa", "chitarra battente", "Italian strumming 17th century guitar", "chitra veena", "Ancient South Indian fretless Carnatic slide lute", "chuurqin", "ancient predecessor of the Morin khuur", "cimbalom", "European hammered dulcimer", "citole", "cittern", "cizhonghu", "large huqin", "classical guitar", "classical kemençe", "clavichord", "Clavinet", "cò ke", "concert harp", "craviola", "guitar/Viola caipira like plucked string instrument", "Cretan lyra", "crwth", "cuatro", "cümbüş", "Turkish oud like", "đàn bầu", "đàn nguyệt", "đàn nhị", "đàn tam", "đàn tam thập lục", "Vietnamese hammered dulcimer", "đàn tranh", "đàn tứ", "đàn tứ dây", "đàn tỳ bà", "daruan", "Bass ruan", "diddley bow", "dilruba", "diyingehu", "bass gehu (huqin)", "djoza", "ancient Iraqi bowed string instrument", "dobro", "dolceola", "dombra", "domra", "donso ngɔni", "doshpuluur", "double bass", "Contrabass of modern violin family", "dramyin", "dulce melos", "dutar", "duxianqin", "ektara", "electric bass guitar", "electric cello", "electric fretless guitar", "electric grand piano", "electric guitar", "electric harp", "electric lap steel guitar", "electric sitar", "electric guitar variant of sitar", "electric upright bass", "electric viola", "electric violin", "erhu", "Middle range huqin", "esraj", "fiddle", "five-string banjo", "flamenco guitar", "Guitar used in flamenco", "folk harp", "fortepiano", "four-string banjo", "fretless bass", "gadulka", "gaohu", "High pitched huqin", "gayageum", "gehu", "cello huqin", "geomungo", "German harp", "ghaychak", "Perisan double-chambered bowl lute", "ghijak", "Uyghur spike fiddle", "ģīga", "gittern", "medieval lute-like guitar forerunner", "grand piano", "Gravikord", "Modern 24-stringed stainless steel kora", "Greek baglama", "gudok", "guitalele", "guitar", "guitarrón chileno", "guitarrón mexicano", "gumbri", "guqin", "gusli", "Traditional Russian plucked psaltery", "gut guitar", "gut-stringed acoustic guitar", "guzheng", "haegeum", "Korean silk-string fiddle", "hammered dulcimer", "hardingfele", "harp", "harp guitar", "harpejji", "Electric guitar-piano tapping instrument", "harpsichord", "Hawaiian guitar", "heike biwa", "hurdy gurdy", "igil", "Irish bouzouki", "Irish harp / clàrsach", "jeli ngɔni", "West African four-stringed grigot lute", "jing'erhu", "Beijing opera supporting erhu (huqin)", "jinghu", "Beijing opera upmost small & high pitch huqin", "jouhikko", "kamalen ngɔni", "modern ngoni made of calabash with more strings", "kamancheh", "kanklės", "Traditional Lithuanian plucked psaltery", "kannel", "Traditional Estonian plucked psaltery", "kantele", "Traditional Finnish plucked psaltery", "kanun", "kemençe of the Black Sea", "kemenche", "khim", "Thai and Cambodian hammered dulcimer", "kinnor", "kithara", "kokle", "Traditional Latvian plucked psaltery", "kokyu", "Traditional Japanese bowed spikefiddle.", "komuz", "kora", "koto", "krar", "langeleik", "laouto", "Greek long-neck lute", "lap harp", "simplified zither", "lap steel guitar", "laúd", "spanish plucked chordophone", "lautenwerck", "lavta", "lirone", "liuqin", "Small pearshaped chinese lute", "lute", "luthéal", "lyra viol", "Small bass viol", "lyre", "mandocello", "mandoguitar", "mandolin / electric guitar hybrid", "mandola", "mandolin", "mandolute", "mandora / gallichon", "18th century bass lute", "marxophone", "Mexican vihuela", "minipiano", "morin khuur", "traditional bowed Mongol fiddle", "musical bow", "ngɔni", "njarka", "Malian single string gourd-fiddle", "nyatiti", "nyckelharpa", "nylon guitar", "nylon-stringed acoustic guitar", "octave mandolin", "octavilla", "Spanish melody & strumming guitar", "octavina", "Filipino rondalla guitar", "octobass", "Extralarge 3-string Bass", "oktawka", "orpharion", "orphica", "late 18th century portable piano with shoulder strap", "oud", "oval spinet", "late 17th century oval harpsichord", "Paraguayan harp", "pardessus de viole", "Smallest member of the viol family", "pedal piano", "pedal steel guitar", "piano", "piano spinet", "small drop action piano", "pipa", "Pearshaped chinese lute", "plucked string instruments", "Portuguese guitar", "prepared piano", "psaltery", "ravanahatha", "rebab", "rebec", "Medieval bowed lyre", "resonator guitar", "Rhodes piano", "ruan", "rubab", "Plucked lute member of the bowed rebab family", "rudra veena", "Ancient large North Indian tube zither", "samica", "solo serbo-croatian plucked lute", "sanshin", "santoor", "Traditional Indian dulcimer", "santur", "Persian/Iran hammered dulcimer", "sanxian", "sarangi", "Saraswati veena", "Ancient Carnatic veena lute", "šargija", "sarod", "sasando", "Indonesian tube zither", "satsuma biwa", "saw duang", "saw sam sai", "saw u", "saz", "setar", "shamisen", "shichepshin", "shudraga", "sitar", "slide guitar", "soprano violin", "Spanish acoustic guitar", "spinet", "A smaller harpsichord, strings at an angle", "spinettone", "extralong spinet with deep bass register", "steel guitar", "steel-string guitar", "strings", "Stroh violin", "struck string instruments", "suka", "sursingar", "large lute-sarod from India", "swarmandal", "table steel guitar", "tack piano", "taishogoto", "talharpa", "tambura", "Macedonian/Bulgarian long-necked lute", "tanbur", "Persian/Turkish ancient long-necked lute", "tangent piano", "tanpura", "Indian drone long-necked lute", "tar", "lute", "te kū", "Māori taonga pūoro single string bow", "tenor banjo", "tenor guitar", "tenor viol", "Tenor member of the viol family", "tenor violin", "theorbo", "Extended necked many-stringed lute", "tiple", "tololoche", "tonkori", "topshuur", "toy piano", "treble viol", "Treble/descant member of the viol family", "treble violin", "Smallest member of the new violin family", "tres", "tromba marina", "tube zither", "tumbi", "Turkish baglama", "tzoura", "ukeke", "ukulele", "upright piano", "ütőgardon", "valiha", "vichitra veena", "vielle", "Vietnamese guitar", "vihuela", "Spanish string instrument.", "viola", "viola caipira", "Brazilian música caipira guitar", "viola d'amore", "Baroque fretless similar to both viols and violins.", "viola da gamba", "Generic member of the viol family, Use for \"Viol\" Credits", "viola organista", "violin", "violino piccolo", "viololyra", "cretan lyra / violin hybrid", "violoncello piccolo", "for violoncello use \"cello\"", "violone", "Contra/double-bass member of the viol family", "violotta", "virginal", "Warr guitar", "washtub bass", "wire-strung harp", "xalam", "yangqin", "Chinese hammered dulcimer", "yatga", "yaylı tanbur", "Turkish bowed lute", "yehu", "southern coconut huqin", "yoochin", "Mongolian wire-stringed hammered dulcimer", "yueqin", "Traditional Chinese lute", "zhonghu", "Alto huqin", "zhongruan", "zhuihu", "Wooden huqin", "zither", "afoxé", "afuche / cabasa", "agogô", "akete", "set of Nyabinghi drums", "alfaia", "amadinda", "aman khuur", "mongolian jew's harp", "ankle rattlers", "anvil", "ashiko", "cone shaped west african frame-drum", "atabaque", "atarigane", "baandu", "Nyabinghi bass drum", "balafon", "bamboo angklung", "bangu", "barrel drum", "bass drum", "Batá drum", "bell tree", "bells", "bendir", "bicycle bell", "bin-sasara", "bodhrán", "body percussion", "bones", "Folk music idiophone", "bongos", "boobam", "arrangement of bamboo tube-drums", "brushes", "buk", "caixa", "Brazilian Samba snare-drum", "cajón", "calabash", "carillon", "castanets", "Pair of concave shells", "caxixi", "celesta", "çevgen", "chacha", "chande", "chap", "chau gong", "chime bar", "chimes", "ching", "clapper", "egyptian ancient clappers", "claves", "congas", "cowbell", "Cristal Baschet", "crotales", "cuíca", "cylindrical drum", "cymbal", "daf", "daire", "daluo", "darbuka", "davul", "dhol", "dholak", "djembe", "dohol", "doyra", "drum", "Generic drums of any kind.", "drums (drum set)", "Set of drums in modern music", "duggi", "indian clay kettle drum", "dulcitone", "idiophone keyboard instrument with tuning forks", "dunun", "electronic drum set", "finger cymbals", "finger snaps", "foot percussion", "frame drum", "friction drum", "friction idiophone", "frottoir", "fundeh", "Nyabinghi middle pitch drum", "gankogui", "ganzá", "garifuna drum", "ghatam", "glass harmonica", "Glass bowls mounted on spindle", "glass harp", "Musical Glasses", "glockenspiel", "goblet drum", "gong", "gong bass drum", "gramorimba", "güira", "Dominican metal scraper", "güiro", "handbell", "Open hand-rung bell", "handclaps", "handpan", "Tuned metal ufo", "hi-hat", "hourglass drum", "hue puruwai", "Māori taonga pūoro shaking gourd", "hyoshigi", "Japanese concussion idiophone", "idiophone", "janggu", "jew's harp", "jing", "junjung", "Sacred royal Serer war drum", "kanjira", "kartal", "kettle drum", "khong wong", "khong wong lek", "khong wong yai", "khulsan khuur", "bamboo mongolian jew's harp", "kkwaenggwari", "klong khaek", "klong song na", "klong that", "klong yao", "kös", "kotsuzumi", "krakebs", "kudüm", "lamellophone", "lithophone", "madal", "maddale", "maracas", "marimba", "marímbula", "mark tree", "mbira", "membranophone", "generic drums of any kind", "mendoza", "metal angklung", "metallophone", "morsing", "Indian mouth harp", "mridangam", "mukkuri", "Ainu jew's harp", "musical box", "nagadou-daiko", "não bạt / chập chõa", "naobo", "ocean drum", "octoban", "racked 4 or 8 tom-toms", "ōtsuzumi", "pahū", "Māori taonga pūoro large signalling drum", "pahū pounamu", "Māori taonga pūoro gong made of jade and bone", "pakhavaj", "pākuru", "Māori taonga pūoro tapping sticks", "pātē", "percussion", "phách", "pkhachich", "plucked idiophone", "poi", "Māori taonga pūoro flax leaf balls used in dancing", "primero", "qilaut", "quijada", "quinto", "rainstick", "rammana", "ranat ek", "ranat kaeo", "ranat thum", "ratchet", "rattle", "reco-reco", "repeater", "Nyabinghi smaller pitch drum", "repinique", "rhythm sticks", "riq", "rōria", "Māori taonga pūoro jew's harp", "rototom", "sabar", "saron", "segunda", "sênh tiền", "shakers", "shekere", "shime-daiko", "singing bowl", "sistrum", "slit drum", "snare drum", "song loan", "spoons", "steelpan", "struck idiophone", "surdo", "t'rưng", "tabla", "tabor", "one-handed sidedrum", "taiko", "talking drum", "tamborim", "tambourine", "tanbou ka", "tap dancing", "taphon", "tar", "drum", "tef", "temple blocks", "temür khuur", "steel mongolian jew's harp", "thavil", "The Great Stalacpipe Organ", "electrically actuated lithophone", "thon", "ti bwa", "Tibetan water drum", "timbales", "timpani", "tinya", "tōkere", "Māori taonga pūoro castanets", "tom-tom", "triangle", "trống bông", "tubular bells", "tubulum", "PVC pipe instrument", "tumutumu", "Māori taonga pūoro ancient struck percussion", "tuned percussion", "txalaparta", "Traditional Basque idiophone", "typewriter", "udu", "vibraphone", "vibraslap", "washboard", "waterphone", "whip / slapstick", "Hinged percussion", "wind chime", "wood block", "wooden fish", "Wurlitzer electric piano", "xiaoluo", "xylophone", "xylorimba", "yonggo", "yu", "wooden tiger scraped with bamboo whisk", "zabumba", "żafżafa", "zarb", "zill", "analog synthesizer", "uses analogue circuits to produce sound", "bass pedals", "bass synthesizer", "chamberlin", "An electromechanical piano", "clavioline", "electronic keyboard, forerunner to analogue synthesizers", "continuum", "Denis d'or", "disk drive", "drum machine", "Dubreq Stylophone", "ebow", "electronic instruments", "electronic organ", "elektronium", "electronic keyboard accordion", "EWI", "farfisa", "floppy disk drive", "guitar synthesizer", "Guitaret", "electric lamellophone", "guitorgan", "el guitar / el organ hybrid", "Hammond organ", "hard disk drive", "keyboard", "electronic or digital keyboard", "keyboard bass", "keytar", "laser harp", "Lyricon", "marimba lumina", "mellotron", "An electromechanical piano", "Minimoog", "Moog", "omnichord", "ondes Martenot", "ondioline", "early analogue synth with various sounds and \"vibrato\" keyboard", "Otamatone", "Toy synthesizer", "Pianet", "an electromechanical piano", "Reactable", "sampler", "synclavier", "synthesizer", "telharmonium", "gigantic electronic organ transmitted through telephone wires.", "theremin", "trautonium", "monophonic electric instrument from 1930's", "tubon", "analogue electronic monophonic Organ", "video game console", "sound chip from gaming consoles", "vocoder", "voice synthesizer", "wavedrum", "wind synthesizer", "synthesizer played like a wind instrument", "bass", "bullroarer", "effects", "electric piano", "gizmo", "Elguitar/bass effect device", "hydraulophone", "\"woodwater\" flute made with hydraulics", "kazoo", "lasso d'amore", "musical saw", "other instruments", "pūrerehua", "Māori taonga pūoro bullroarer", "suikinkutsu", "talkbox", "tape", "turntable", "vacuum cleaner", "żummara", "chirimía and drum", "pair of double-reed and drum. from South America.", "gamelan", "Indonesian traditional ensemble", "piano trio", "ensemble of violin, cello and piano", "pipe and tabor", "pair of flute and drum, each played by one hand", "saxophone quartet", "Serbo-Croatian tamburica orchestra", "string quartet", "ensemble of 1st violin, 2nd violin, viola and cello", "string trio", "ensemble of violin, viola and cello", "taonga pūoro", "Māori traditional instrument ensemble", "traditional basque ensemble", "violin octet", "New modern streamlined family of violins", "Baltic psalteries", "Family of Baltic box-zithers", "concert flute", "guitar family", "huqin", "trumpet family", "Family of the brass instrument trumpet", "veena", "Family of ancient Indian chordophones", "viol family", "Viola de gamba family", "violin family", "Modern violin family", "claviorganum", "Fifteenth century organ harpsichord hybrid"]

// loop through instNames
// for each, create an object with a type property
// push these objects into a new array

// var result = [];

var result = instNames.map((inst) => {
  return (
    {
      name: inst,
      type: ''
    }
  )
})
console.log(result)

export default result;