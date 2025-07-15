import placeholder from "@/assets/images/placeholder.webp"

import a1 from "@/assets/images/artists/AdrianoTenore.webp"
import a2 from "@/assets/images/artists/ClarissaFalco.webp"
import a3 from "@/assets/images/artists/EmilioVavarella.webp"
import a4 from "@/assets/images/artists/LorenzoLunghi.webp"

// Adriano Tenore works
import w1 from "@/assets/images/artworks/AdrianoTenore/1.webp"

// Clarissa Falco
import w2 from "@/assets/images/artworks/ClarissaFalco/1.webp"

// Emilio Vavarella works
import w3 from "@/assets/images/artworks/EmilioVavarella/1.webp"

// Lorenzo Lunghi
import w4 from "@/assets/images/artworks/LorenzoLunghi/1.webp"
import w5 from "@/assets/images/artworks/LorenzoLunghi/2.webp"

export interface Artist {
    id: string
    name: string
    title: string
    description: string
    descriptionIT?: string;
    shortDescription?: string;
    shortDescriptionIT?: string;
    image: string
    works: number
    detailedWorks: DetailedWork[]
    bio: string
    bioIT?: string;
    statement: string
    statementIT?: string;
}

export interface DetailedWork {
    id: number
    title: string
    description?: string;
    descriptionIT?: string;
    medium: string
    dimensions: string
    year: string
    price: string
    fiatPrice: string
    image: string
    available: boolean
    technique?: string
    techniqueIT?: string;
    provenance?: string
    tokenId?: number
}
export const artists: Artist[] = [
    {
      id: "AdrianoTenore",
      name: "Adriano Tenore",
      title: "Digital Metamorphosis",
      description:
        "Exploring the intersection of traditional Neapolitan art and blockchain technology through immersive digital experiences.",
      shortDescription: "His practice combines AI, sound design, and primordial signs in immersive environments where meaning and perception emerge from context, activating experiences that question identity and artifice.",
      shortDescriptionIT: "La sua pratica combina AI, sound design e segni primordiali in ambienti immersivi dove significato e percezione emergono dal contesto, attivando esperienze che interrogano identità e artificio.",
      image: a1.src,
      works: 8,
      detailedWorks:[
        {
          id: 1,
          title: "Bestiario Sintetico",
          description: "The Synthetic Bestiary brings together a selection of surreal underwater creatures, born from an evolutionary process contaminated by human environmental impact. In this scenario, the introduction of artificial elements forces marine organisms to integrate foreign materials into new forms of biological adaptation. The result is an ecosystem of hybrid creatures, disturbing yet plausible, blending nature and artifice in a precarious and fascinating balance.",
          descriptionIT: "Il Bestiario Sintetico raccoglie una selezione di creature sottomarine surreali, nate da un processo evolutivo contaminato dall’impatto ambientale dell’uomo. In questo scenario, l’introduzione di elementi artificiali costringe gli organismi marini ad integrare materiali estranei in nuove forme di adattamento biologico. Il risultato è un ecosistema di creature ibride, inquietanti eppure plausibili, che fondono natura e artificio in un equilibrio precario e affascinante.",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.35",
          fiatPrice: "900",
          image: w1.src,
          available: true,
        },
        {
          id: 2,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0.00",
          image: placeholder.src,
          available: true,
        },
        {
          id: 3,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0",
          image: placeholder.src,
          available: true,
        },
        {
          id: 4,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0.00",
          image: placeholder.src,
          available: true,
        },
        {
          id: 5,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0.00",
          image: placeholder.src,
          available: true,
        },
        {
          id: 6,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0.00",
          image: placeholder.src,
          available: true,
        },
        {
          id: 7,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0.00",
          image: placeholder.src,
          available: true,
        },
        {
          id: 8,
          title: "Coming Soon",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "0.00",
          fiatPrice: "0.00",
          image: placeholder.src,
          available: true,
        },
      ],
      bio: "(Naples, 1991) is an Italian-French multimedia artist. Today he works as a CG Lead and Art Director, with an increasingly strong interest in interactive design and immersive experiences based on Artificial Intelligence. His works reflect on the relationship between humans and AI, questioning the boundaries of transhumanism and experimenting with new connections between nature and technology. Among his most recent exhibitions: Water me (2025); Synthetic Bestiary (La Santissima, Naples, 2025); Exodus (Fondazione Morra Greco, Naples, 2024; Casa delle Donne, Rome); ZTA (Naples); Kung flu (LightBox.NY Studios, 2018); Onironautica (Ex Asilo Filangieri, Naples, 2016).",
      bioIT: "(Napoli, 1991) è un artista multimediale italo-francese. Oggi lavora come CG Lead e Art Director, con un interesse sempre più marcato verso il design interattivo e le esperienze immersive basate sull’Intelligenza Artificiale. Le sue opere riflettono sul rapporto tra umano e AI, mettendo in discussione i confini del transumanesimo e sperimentando nuove connessioni tra natura e tecnologia. Tra le mostre più recenti: Water me (2025); Bestiario sintetico (La Santissima, Napoli, 2025); Exodus (Fondazione Morra Greco, Napoli, 2024; Casa delle Donne, Roma); ZTA (Napoli); Kung flu (LightBox.NY Studios, 2018); Onironautica (Ex Asilo Filangieri, Napoli, 2016).",
      statement: "With a background in Anthropology and Sociology, he develops research that views human culture as a set of scattered and discontinuous creative processes, yet capable of converging into a shared flow of meaning. His broad and transversal perspective combines cultural and biological dimensions, exploring how evolution and technology shape our experience of the world. His practice focuses on immersive and interactive audiovisual environments, where meaning arises not only from content, but also from context and direct experience. Central to his approach is a return to simple, visceral signs, capable of touching profound and universal emotional chords.",
      statementIT: "Con un background in Antropologia e Sociologia, sviluppa una ricerca che guarda alla cultura umana come un insieme di processi creativi sparsi e discontinui, ma capaci di convergere in un flusso condiviso di significati. Il suo sguardo, ampio e trasversale, unisce dimensioni culturali e biologiche, esplorando come evoluzione e tecnologia plasmino la nostra esperienza del mondo. La sua pratica si concentra su ambienti audiovisivi immersivi e interattivi, in cui il senso non nasce solo dai contenuti, ma anche dal contesto e dall’esperienza diretta. Al centro del suo approccio c’è un ritorno a segni semplici, viscerali, capaci di toccare corde emotive profonde e universali."
    },
    {
      id: "ClarissaFalco",
      name: "Clarissa Falco",
      title: "Crypto Vesuvius",
      description: "Volcanic landscapes reimagined through generative algorithms and smart contract interactions.",
      shortDescription: "Her practice, which spans visual and performing arts, investigates the body as a mechanical device: identity dissolves into repetitive gestures, transforming into a cog in a system.",
      shortDescriptionIT: "La sua pratica, tra arti visive e performative, indaga il corpo come dispositivo meccanico: l’identità si dissolve in gesti ripetitivi, trasformandosi in ingranaggio di un sistema.",
      image: a2.src,
      works: 1,
      detailedWorks:[
        {
          id: 1,
          title: "Dream Of A Synthetic Body#3",
          description: "Whole core 150cm x 150cm x 110cm; total weight approximately 20kg",
          descriptionIT: "Nucleo intero 150cm x 150cm x 110cm; peso totale circa 20kg",
          medium: "Digital Art, NFT",
          dimensions: "150x150x150 cm",
          year: "2024",
          price: "1.53",
          fiatPrice: "4000",
          image: w2.src,
          available: true,
          technique: "Installation made with different materials that addresses the concept of relationship between body and machine",
          techniqueIT: "Installazione realizzata con diversi materiali che affronta il concetto di relazione tra corpo e macchina",
          provenance: "Studio Clarissa Falco, Savona, Italia",
          tokenId: 2,
        },
      ],
      bio: "Clarissa Falco (Genoa, 1995) earned a Master's degree in Visual Arts and Curatorial Studies at NABA in 2020. obsessive. Recent exhibitions include: Crashing Ceramics, curated by Feng Boyi and Longquan Wangou, in China; 4003, Galleria Ipercubo, Milan (2024); Master Control Program, a performance with K. Jarnuszkiewicz included in the exhibition Adolf Ryszka. Space bears shadow, Zachęta, National Gallery of Art, Warsaw (2023); Maybe One Animal Bit It Twice at ScopeBLN, curated by Boris Kostadinov, Berlin (2023); Frictions, curated by Galleria Monti and Ilaria Monti at the MUG Giannini Museum in Latina (2022); Mirrored in Spectral Machines, with Camilla Alberti, SpazioSerra, Milan (2022).",
      bioIT: "Clarissa Falco (Genova, 1995) ha conseguito nel 2020 un Master in Arti Visive e Studi Curatoriali presso la NABA. ossessivo. Tra le mostre più recenti: Crashing Ceramics, a cura di Feng Boyi e Longquan Wangou, in Cina; 4003, Galleria Ipercubo, Milano (2024); Master Control Program, una performance con K. Jarnuszkiewicz parte della mostra Adolf Ryszka. Space bears shadow, Zachęta, National Gallery of Art, Varsavia (2023); Maybe One Animal Bit It Twice alla ScopeBLN, curata da Boris Kostadinov, Berlino (2023); Frictions, curata da Galleria Monti e Ilaria Monti al MUG Giannini Museum di Latina (2022); Mirrored in Spectral Machines, con Camilla Alberti, SpazioSerra, Milano (2022).",
      statement: "Her artistic practice oscillates between visual and performance art, investigating the body as a device in dialogue with the mechanical element. Central to her research is the stripping away of the subject's visual identity, which transforms it into the engine and cog of a system. In the performative dimension, the body-machine pairing manifests itself through automatic and repetitive gestures, inscribed in a constant and obsessive temporal loop.",
      statementIT: "La sua pratica artistica oscilla tra arte visiva e performativa, indagando il corpo come dispositivo in dialogo con l’elemento macchinico. Al centro della sua ricerca vi è la spoliazione dell’identità visiva del soggetto, che si trasforma in motore e ingranaggio di un sistema. Nella dimensione performativa, il binomio corpo-macchina si manifesta attraverso gesti automatici e ripetitivi, inscritti in un loop temporale costante e ossessivo."
    },
    {
      id: "EmilioVavarella",
      name: "Emilio Vavarella",
      title: "Mediterranean Tokens",
      description: "NFT interpretations of classical Mediterranean motifs with contemporary blockchain aesthetics.",
      shortDescription: "Vavarella combines interdisciplinary research and media experimentation, exploring the relationships between technology, the body, and cognitive experience.",
      shortDescriptionIT: "Vavarella coniuga ricerca interdisciplinare e sperimentazione mediale, esplorando le relazioni tra tecnologia, corpo ed esperienza cognitiva.",
      image: a3.src,
      works: 1,
      detailedWorks:[
        {
          id: 1,
          title: "Animal Cinema",
          description: "Video, edition 3 of 3, metal DVD case and artist's book",
          descriptionIT: "Video, edizione 3 di 3, cofanetto DVD in metallo e il libro d’artista",
          medium: "Digital Art, NFT",
          dimensions: "3840 × 2160 px",
          year: "2024",
          price: "2.48",
          fiatPrice: "6500",
          technique: "Animal Cinema is composed solely of fragments of videos posted on YouTube that I have been collecting since 2012. All the videos share a common characteristic: they were filmed by animals who found themselves face to face with a video camera and took possession of it. Bodily movements, pincers, tentacles, fangs, claws, and paws replace any directorial premeditation. The result is a constantly unfolding vortex of forms of awareness and ways of being: a concatenation of actions and passions that offers a new glimpse into the complicated assemblage of humans, animals, and technologies of which we are all a part. Animal Cinema continues my research into non-anthropocentric forms of creativity and the sensorial, visceral, intellectual, and emotional relationships that such forms evoke.",
          techniqueIT: "Animal Cinema è composto unicamente da frammenti di video postati su YouTube che ho collezionato a partire dal 2012. Tutti i video sono accomunati da una comune caratteristica: sono stati girati da animali che si sono trovati faccia a faccia con una videocamera e se ne sono impossessati. Movimenti di corpi, chele, tentacoli, zanne, artigli e zampe si sostituiscono a qualsiasi premeditazione registica. Il risultato è un vortice di forme di consapevolezza e modi di essere in continuo dispiegarsi: una concatenazione di azioni e passioni che apre un inedito spiraglio sul complicato assemblaggio di uomini, animali e tecnologie di cui noi tutti siamo parte. Animal Cinema continua la mia ricerca su forme di creatività non antropocentriche e sul rapporto sensoriale, viscerale, intellettivo ed emotivo, che tali forme evocano.",
          image: w3.src,
          available: true,
        },
      ],
      bio: "(Monfalcone, 1989), Ph.D. at Harvard University. He is also Assistant Professor of Media and Film Studies at Skidmore College (NY) and artist in residence at the Broad Institute of MIT and Harvard. His work has been exhibited at the 18th Venice Biennale (Italian Pavilion, Architecture), MAXXI Museum in Rome, Reina Sofia Museum in Madrid, Hermitage Museum in St. Petersburg, The Photographers’ Gallery in London, KANAL – Centre Pompidou in Brussels, MAMbo – Museum of Modern Art in Bologna, Madre – Museum of Contemporary Art in Naples, Museum of Contemporary Art in Zagreb, Museu de Ciències Naturals in Barcelona, Museo Nacional Bellas Artes in Santiago de Chile, Museum of Contemporary Art Vojvodina in Novi Sad (Serbia), the MBAL Museum (Switzerland), the National Art Center in Tokyo, the Eyebeam Art + Technology Center in New York, the Off – Cairo Biennale, the BJCEM – Mediterranean Biennale, and the Kiev Biennale. His films have been screened at the Toronto Images Festival, the Torino Film Festival, Jeu de Paume (Paris), HKW – Haus der Kulturen der Welt (Berlin), and at numerous media arts festivals, including the EMAF – European Media Art Festival in Osnabrück, the JMAF – Japan Media Arts Festival in Tokyo, the Filmwinter – Festival for Expanded Media in Stuttgart, and the NYEAF – New York Electronic Arts Festival. Vavarella has received numerous awards and recognitions and has won numerous artistic and scientific calls and competitions. Among the most significant are the Italian Council Award (2019) and the Harvard Horizon Fellowship (2023). His work appears regularly in newspapers, trade magazines, and scientific publications.",
      bioIT: "(Monfalcone, 1989), Ph.D. presso la Harvard University. Egli è inoltre Assistant Professor of Media and Film Studies allo Skidmore College (NY) e artista in residenza presso il Broad Institute di MIT e Harvard. Il suo lavoro è stato esposto alla 18ma Biennale di Venezia (Padiglione Italia, Architettura), Museo MAXXI di Roma, Museo Reina Sofia di Madrid, Museo dell’Hermitage di S. Pietroburgo, The Photographers’ Gallery di Londra, KANAL – Centre Pompidou a Bruxelles, MAMbo – Museo d’Arte Moderna di Bologna, Madre – Museo d’Arte Contemporanea di Napoli, Museum of Contemporary Art di Zagabria, Museu de Ciències Naturals di Barcellona, Museo Nacional Bellas Artes di Santiago del Cile, Museum of Contemporary Art Vojvodina di Novi Sad (Serbia), il Museo MBAL (Svizzera), il National Art Center di Tokyo, l’Eyebeam Art + Technology Center di New York, la Off – Biennale de Il Cairo, la BJCEM – Biennale del Mediterraneo, e la Biennale di Kiev. I suoi film sono stati proiettati presso il Toronto Images Festival, il Torino Film Festival, Jeu de Paume (Parigi), HKW – Haus der Kulturen der Welt (Berlino), e in molteplici festival di arti mediali, tra cui l’EMAF – European Media Art Festival di Osnabrück, il JMAF – Japan Media Arts Festival di Tokyo, il Filmwinter – Festival for Expanded Media di Stoccarda, e il NYEAF – New York Electronic Arts Festival. Vavarella è stato insignito di numerosi premi e riconoscimenti ed è stato vincitore di numerosi bandi e competizioni artistiche e scientifiche. Tra i più significativi si segnalano l’Italian Council Award (2019) e l’Harvard Horizon Fellowship (2023). Il suo lavoro appare regolarmente su quotidiani, riviste di settore e pubblicazioni scientifiche.",
      statement: "Emilio Vavarella is an artist and researcher who works at the intersection of interdisciplinary artistic practice, theoretical research, and media experimentation. Through museum exhibitions, film screenings, and publications, Vavarella explores the relationship between life and technology and operates at the forefront of experimental thought and practice.",
      statementIT: "Emilio Vavarella è un artista e ricercatore che lavora all'intersezione tra pratica artistica interdisciplinare, ricerca teorica e sperimentazione mediatica. Attraverso mostre museali, proiezioni cinematografiche e pubblicazioni, Vavarella esplora il rapporto tra vita e tecnologia e opera all'avanguardia nel pensiero e nella prassi sperimentale."
    },
    {
      id: "LorenzoLunghi",
      name: "Lorenzo Lunghi",
      title: "Decentralized Dreams",
      description: "Abstract compositions inspired by blockchain architecture and decentralized network structures.",
      shortDescription: "His practice, intertwined with technology and the human psyche, explores the latent threats of a surveilled present. Sculptures and performative actions operate as hybrid devices that destabilize the perception of the self, embodying parasitic entities in a disintegrated and hallucinatory reality.",
      shortDescriptionIT: "La sua pratica, tra tecnologia e psiche umana, indaga le minacce latenti di un presente sorvegliato. Sculture e azioni performative operano come dispositivi ibridi che destabilizzano la percezione del sé, incarnando entità parassite in un reale disgregato e allucinato.",
      image: a4.src,
      works: 3,
      detailedWorks:[
        {
          id: 1,
          title: "Spie (Fontana V.2)",
          description: "Borosilicate glass, oxygen, aluminum, plexiglass, servomotors, Raspberry Pi, Raspberry Pi module, Black camera, LED light, 40x15x10 cm, 2025",
          descriptionIT: "Vetro Borosilicato, Ossigeno, Alluminio, Plexiglass, Servomotori, Raspberry Pi, Raspberry Modulo, Telecamera 3 Noir, Luce a leD, 40x15x10 cm, 2025",
          medium: "Digital Art, NFT",
          dimensions: "40x12x8 cm",
          year: "2024",
          price: "0.01",
          fiatPrice: "3500",
          image: w4.src,
          available: true,
          technique: "Spy (Fountain v.3) is a surveillance tool composed of a glass sculpture. Like a small, independent organism, this module, called Spy, observes us via a facial recognition system. It thus takes control of the hierarchy of vision and whispers to us the persistent power dynamics of the present. The sculpture is connected to an oxygen concentrator that continuously releases invisible gas into the exhibition space and, in particular, onto the observing viewer. This manifestation of the sculpture aims to restabilize lifeless scenarios by supplying us with a substance essential to our survival: oxygen. Excessive oxygen intake sends a message to the brain to slow breathing and induces states of trance and relaxation, while too little oxygen deprives the tissues in the brain and heart of oxygen and causes memory loss or cardiac irregularities, anxiety, and death. One has the sensation of being in front of a sophisticated, transparent fountain that nourishes and oxygenates our body. According to the artist, this object is a psychic filter. It observes us and feeds us as if we have lost control of both our vision and our psyche.",
          techniqueIT: "Spia (Fontana v.3) è uno strumento di sorveglianza composto da una scultura di vetro. Come un piccolo organismo indipendente, questo modulo, denominato Spia, ci osserva tramite un sistema di riconoscimento facciale. Prende quindi il controllo della gerarchia della visione e ci sussurra le persistenti dinamiche di potere del presente. La scultura è collegata a un concentratore di ossigeno che rilascia continuamente gas invisibile nello spazio espositivo ed in particolare sullo spettatore che osserva. Questo manifestarsi della scultura ha la pretesa di ristabilizzare scenari privi di vita rifornendoci di una sostanza indispensabile per la nostra sopravvivenza, l’ossigeno. L’assunzione di un’eccessiva quantità di ossigeno invia un messaggio al cervello di rallentare la respirazione e induce stati di trans e rilassamento, mentre troppo poco ossigeno priva i tessuti nel cervello e nel cuore di ossigeno e causa perdita di memoria o irregolarità cardiache, ansia e morte. Si ha la sensazione di trovarsi di fronte ad una sofisticata e trasparente fontana che nutre e ossigena il nostro corpo. Questo oggetto secondo l’artista è un filtro psichico. Ci osserva e ci nutre come se avessimo perso il controllo sia della nostra visione che della nostra psiche.",
          provenance: "Studio Lorenzo Lunghi, Milano, Italia",
          tokenId: 3,
        },
        {
          id: 2,
          title: "Vomito",
          description: "pewter, tin, dimensions variable, 2025",
          descriptionIT: "peltro, stagno, dimensioni variabili, 2025",
          medium: "Generative Art, Smart Contract",
          dimensions: "50x30 cm",
          year: "2024",
          price: "0.01",
          fiatPrice: "2500",
          image: w5.src,
          available: true,
          technique: "Vomito (Vomito) is a series of sculptures of an indigestible nature, the result of widespread malaise in sculptural form. Exhausted by the frustration, anxiety, and performative discomfort that lurk in the cultural landscape, all that remains is to vomit. In this most extreme manifestation of the body, the artist seeks to exaggerate and make visible what cannot be said out loud, but is deeply felt.",
          techniqueIT: "Vomito è una serie di sculture di natura indigesta, frutto di malessere generalizzato in aspetto scultoreo. Esausto dalle situazioni di frustrazione, ansia e disagio performativo che si annidano nel panorama culturale, non resta che vomitare. In questa manifestazione del corpo più estrema, si cerca di esasperare e rendere visibile quello che non si può dire ad alta voce, ma che in fondo si pensa.",
          provenance: "Studio Lorenzo Lunghi, Milano, Italia",
          tokenId: 4,
        },
      ],
      bio: "(Crema, 1993) lives and works in Milan. After a three-year degree at the Accademia Carrara, Bergamo (2018), he obtained a Master's degree at HEAD, Geneva (2021). He has exhibited in various contexts, including: Bacio (Bern, 2024) La Rada (Locarno, 2023); Manifattura Tabacchi (Florence, 2022); Plattform (Kulturhaus Palazzo, 2022); Giulietta (Basel, 2021); ANCONTEMPORANEA (Ancona, 2021); Localedue (Bologna, 2021); Palazzo delle Esposizioni (Rome, 2020); Sonnenstube (Spazio Morel, 2019). He was part of the DITTO collective (2016-2019). Since 2019, he has curated exhibitions and workshops in extra-urban spaces: Brillano nella notte (Dolomiti Contemporanee, 2023-ongoing), Erbacce (Brugherio, 2020), and Miraggio (Fontanile Fontanone, 2019).",
      bioIT: "(Crema, 1993) vive e lavora a Milano. Dopo il Triennio presso Accademia Carrara, Bergamo (2018), consegue il Master presso HEAD, Ginevra (2021). Ha esposto in diversi contesti, fra cui: Bacio (Berna, 2024) La Rada (Locarno, 2023); Manifattura Tabacchi (Firenze, 2022); Plattform (Kulturhaus Palazzo, 2022); Giulietta (Basilea, 2021); ANCONTEMPORANEA (Ancona, 2021); Localedue (Bologna, 2021); Palazzo delle Esposizioni (Roma, 2020); Sonnenstube (Spazio Morel, 2019). Ha fatto parte del collettivo DITTO (2016-2019). Dal 2019 cura mostre e workshop in spazi extraurbani: Brillano nella notte (Dolomiti Contemporanee, 2023-ongoing) Erbacce (Brugherio, 2020); Miraggio (Fontanile Fontanone, 2019).",
      statement: "His research lies at the intersection of technology and the human psyche, delving into the hidden threats of a world under constant surveillance, where self-perception oscillates between distorted awareness and paranoid alienation. His sculptures and performative actions function as observation tools, magnifying glasses, and mirrors that distort perception, embodying parasitic entities that act as silent witnesses to a schizophrenic contemporary world.",
      statementIT: "La sua ricerca si colloca nell’intersezione tra tecnologia e psiche umana, scavando tra le minacce nascoste di un mondo sotto costante sorveglianza, dove la percezione del sé oscilla tra consapevolezza distorta e alienazione paranoica. Le sue sculture e azioni performative operano come strumenti di osservazione, lenti d’ingrandimento e specchi che deformano la percezione, incarnando entità parassite che agiscono come testimoni silenziosi di una contemporaneità schizofrenica."
    },
  ]