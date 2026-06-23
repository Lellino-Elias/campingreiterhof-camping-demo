import type { CampsiteConfig } from "../types";

const IMG = "/campsites/campingreiterhof";

const campingreiterhof: CampsiteConfig = {
  name: "Camping Reiterhof",
  shortName: "Reiterhof",
  slug: "campingreiterhof",
  ort: "Hopfgarten im Brixental",
  region: "Tirol",
  brandKind: "Camping",
  regionLong: "Ferienregion Hohe Salve · Kitzbüheler Alpen · Tirol",

  heroVariant: "center",

  claim: "Dein Bergcamping im Kelchsauer Tal",
  claimEmphasis: "Kelchsauer Tal",
  emailDetail: "eure ruhige Panoramalage im Kelchsauer Tal mit Blick auf die Hohe Salve",
  intro:
    "Ruhig im Kelchsauer Tal gelegen, nur 2 km von Hopfgarten, erwartet dich unsere kinderfreundliche Panoramaanlage: 130 Komfortplätze auf sonnigen Wiesenterrassen, ganzjährig geöffnet, die Berge direkt vor dem Vorzelt.",

  statement: {
    text: "Seit Jahren empfangen wir dich hier ganz nach unserem Motto: Urlaub bei Freunden.",
    emphasis: "Urlaub bei Freunden",
  },

  pillars: [
    {
      title: "Mitten in der Bergwelt",
      text: "Ruhig im Kelchsauer Tal gelegen, umgeben von Wäldern und Gipfeln — und doch nur 2 km von Hopfgarten.",
      image: { src: `${IMG}/gallery-18cad1de0b.webp`, alt: "Weite Luftaufnahme des Kelchsauer Tals: Camping Reiterhof eingebettet zwischen den Alpen und Wäldern der Kitzbüheler Alpen" },
    },
    {
      title: "Urlaub bei Freunden",
      text: "Familie Treichl führt den Platz persönlich und mit Herz — viele Gäste kommen seit Jahren immer wieder.",
      image: { src: `${IMG}/gallery-a0aab7f804.webp`, alt: "Luftaufnahme von Camping Reiterhof: Stellplätze und Ferienhäuser im sonnigen Kelchsauer Tal" },
    },
    {
      title: "Freizeitanlage nebenan",
      text: "Direkt neben dem Platz lockt das Salvenaland mit Badesee, Pool und Funpark für die ganze Familie.",
      image: { src: `${IMG}/gallery-930e3e7577.webp`, alt: "Badesee und beheizter Pool der Freizeitanlage Salvenaland neben Camping Reiterhof" },
    },
  ],

  usps: [
    "130 Komfortplätze",
    "Ganzjährig geöffnet",
    "Kostenloses WLAN",
    "Hunde willkommen",
    "Freizeitanlage nebenan",
    "Brötchenservice",
  ],

  trust: {
    heading: "Darauf ist im Kelchsauer Tal Verlass",
    headingEmphasis: "Verlass",
    intro:
      "Familie Treichl führt den Platz persönlich — ruhig gelegen, kinderfreundlich und ganzjährig offen. Hier findest du kurze Wege, faire Preise und die Freizeitanlage Salvenaland gleich nebenan.",
  },

  awards: [],

  saison: { von: "Januar", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-2edcdfd678.webp`, alt: "Luftaufnahme: Camping Reiterhof im grünen Tal vor der Hohen Salve" },
  },

  breather: {
    image: { src: `${IMG}/gallery-aa3875b2d3.webp`, alt: "Camping Reiterhof im Abendlicht: Campinggebäude vor rosa Abendhimmel und Bergsilhouette" },
    line: "Wenn die Berge rosa werden, beginnt der schönste Teil des Tages.",
  },

  camping: {
    heading: "Camping am Reiterhof",
    intro:
      "Sonnige Wiesenplätze, ein klarer Bergbach am Rand und alles, was du für entspannte Campingtage brauchst — terrassenförmig angelegt mit viel Platz.",
    features: [
      {
        title: "Stellplätze mit Bergblick",
        text: "Ebene Komfortplätze mit freiem Blick auf die Hohe Salve — morgens der Kaffee, abends das Alpenglühen.",
        image: { src: `${IMG}/gallery-1378baf380.webp`, alt: "Wohnmobil auf einem Stellplatz mit Blick auf die Hohe Salve" },
      },
      {
        title: "Sonnige Wiesenterrassen",
        text: "Terrassenförmig auf gepflegtem Wiesengrund angelegt, sonnig und mit angenehm viel Platz zwischen den Plätzen.",
        image: { src: `${IMG}/gallery-e120e3a29c.webp`, alt: "Luftaufnahme der weitläufigen Stellplätze von Camping Reiterhof mit dem Gebirgsbach am Rand" },
      },
      {
        title: "Wohnmobil, Wohnwagen & Zelt",
        text: "Ob großes Reisemobil oder kleines Zelt — bei uns findest du den passenden Platz mit Stromanschluss.",
        image: { src: `${IMG}/gallery-a93ba1ecf0.webp`, alt: "Wohnmobil, Wohnwagen und Zelt auf den sonnigen Wiesenstellplätzen von Camping Reiterhof" },
      },
      {
        title: "Rezeption & Service",
        text: "An der Rezeption gibt es kostenloses WLAN, Brötchenservice in der Hauptsaison und immer ein offenes Ohr.",
        image: { src: `${IMG}/gallery-0678229a63.webp`, alt: "Eingang und Rezeption des Camping Reiterhof" },
      },
      {
        title: "Direkt am Bergbach",
        text: "Am Rand des Platzes rauscht ein klarer Gebirgsbach — Natur zum Greifen nah und ideal zum Durchatmen.",
        image: { src: `${IMG}/gallery-09c4bf6224.webp`, alt: "Klarer Gebirgsbach am Rand von Camping Reiterhof" },
      },
      {
        title: "Gäste aus ganz Europa",
        text: "Am Eingang wehen die Flaggen vieler Nationen — am Reiterhof triffst du Camper aus halb Europa.",
        image: { src: `${IMG}/gallery-814b3f25dc.webp`, alt: "Sonnige Wiesenstellplätze von Camping Reiterhof mit Kinderspielplatz — ein Treffpunkt für Camper aus ganz Europa" },
      },
    ],
  },

  kinder: {
    heading: "Für die Kleinen wird's nie langweilig",
    intro:
      "Gleich neben dem Platz liegt die Freizeitanlage Salvenaland — Badesee, beheizter Pool und Funpark sorgen für Ferientage, an denen die Kinder kaum noch ins Vorzelt wollen.",
    features: [
      {
        title: "Badesee mit Spielinsel",
        text: "Im Salvenaland gleich nebenan wartet ein Badesee mit schwimmender Spielinsel auf mutige Wasserratten.",
        image: { src: `${IMG}/gallery-3acc7d2974.webp`, alt: "Badesee mit Spielinsel im Salvenaland neben Camping Reiterhof" },
      },
      {
        title: "Beheizter Pool",
        text: "Ein beheiztes Schwimmbad mit eigenem Kinderbecken sorgt auch an kühleren Tagen für Badespaß.",
        image: { src: `${IMG}/gallery-948608c30c.webp`, alt: "Beheizter Pool des Salvenaland vor den Bergen" },
      },
      {
        title: "Funpark & Sommerrodelbahn",
        text: "Sommerrodelbahn, Mini-Carts und Minigolf liegen nur wenige Schritte vom Platz entfernt.",
        image: { src: `${IMG}/gallery-46fe152f47.webp`, alt: "Luftaufnahme der Freizeitanlage Salvenaland mit Badesee, Pool, Funpark und Sommerrodelbahn" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Raus aus dem Vorzelt, rein ins Tal",
    intro:
      "Der Platz ist Ausgangspunkt für Wanderungen, Radtouren und Paragleiten — und die Hohe Salve mit ihrem weiten Gipfelblick liegt direkt vor der Haustür.",
    items: [
      {
        title: "Gipfel Hohe Salve",
        text: "Mit Wanderschuhen oder Bergbahn auf die Hohe Salve — oben wartet ein Rundumblick über die Alpen.",
        image: { src: `${IMG}/gallery-ba9f4fc198.webp`, alt: "Panoramablick von der Hohen Salve über die Berge" },
      },
      {
        title: "Paragleiten & Ballon",
        text: "Vom Tal aus starten Paragleiter und Ballonfahrer — die Bergwelt von oben ist ein eigenes Erlebnis.",
        image: { src: `${IMG}/gallery-ff0ed191f1.webp`, alt: "Blick aus der Luft über das Brixental beim Paragleiten" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Kelchsauer Tal",
    modes: [
      { title: "Mit dem Auto", text: "Über die A12 Inntalautobahn bis Wörgl-Ost, dann via Hopfgarten Richtung Kelchsau — der Platz liegt rund 2 km außerhalb." },
      { title: "Mit der Bahn", text: "Bahnhof Hopfgarten im Brixental, von dort sind es nur wenige Minuten ins Kelchsauer Tal." },
      { title: "Mit dem Flugzeug", text: "Flughafen Innsbruck in rund einer Stunde, Salzburg in etwa eineinhalb Stunden Fahrt." },
    ],
  },

  galerie: {
    heading: "Ein Blick ins Kelchsauer Tal",
    headingEmphasis: "Kelchsauer Tal",
    intro: "Bergbach, Wiesen und weite Talblicke — ein paar Eindrücke von Camping Reiterhof und seiner Umgebung.",
    tag: "Sommer & Winter",
    moreCount: 20,
    images: [
      { src: `${IMG}/gallery-831346e911.webp`, alt: "Camping Reiterhof und Salvenaland von oben: Badesee, Pool und Campinganlage im Tal" },
      { src: `${IMG}/gallery-f8691f59d9.webp`, alt: "Weite Luftaufnahme des Kelchsauer Tals mit Camping Reiterhof und Salvenaland" },
      { src: `${IMG}/gallery-2832a3ef7d.webp`, alt: "Abendliche Luftaufnahme von Camping Reiterhof mit Kelchsauer Ache und Bergtälblick" },
      { src: `${IMG}/gallery-7440abe83c.webp`, alt: "Blick vom Hügel ins Kelchsauer Tal mit Salvenaland und Camping Reiterhof an einem sonnigen Sommertag" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz im Tal",
    headingEmphasis: "deinen Platz",
    intro: "Wähle Zeitraum und Personenzahl — Familie Treichl meldet sich persönlich mit deiner Verfügbarkeit und allen Details.",
    pricesArePlaceholder: false,
    priceNote:
      "Saison-Pauschale laut Website (Sommer), inkl. Stellplatz und 2 Personen — Nebensaison ab € 31,50, Hauptsaison ab € 42 pro Nacht; zzgl. Kurtaxe € 2,60 pro Person/Tag. Bitte bei der Buchung bestätigen.",
    highlight: { title: "Ganzjährig geöffnet", text: "Sommer wie Winter — der Platz ist das ganze Jahr für dich da." },
    categories: [
      { id: "stellplatz-ns", label: "Stellplatz · Nebensaison", perNight: 31.5, perExtraGuest: 7.0 },
      { id: "stellplatz-hs", label: "Stellplatz · Hauptsaison", perNight: 42, perExtraGuest: 10 },
    ],
  },

  kontakt: {
    tel: "+43 5335 3512",
    telHref: "tel:+4353353512",
    mail: "welcome@campingreiterhof.at",
    facebook: "https://www.facebook.com/CampingReiterhof",
    adresse: "Kelchsauer Straße 49 · 6361 Hopfgarten im Brixental · Tirol",
    coords: { lat: 47.4301704, lng: 12.1501011 },
  },

  languages: ["DE", "EN"],

  nav: [
    { label: "Camping", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Service", href: "#camping" },
    ]},
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    { label: "Preise & Lage", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
  ],
};

export default campingreiterhof;
