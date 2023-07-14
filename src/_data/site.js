module.exports = {
  meta: {
    title: "Lenguaje Máquina",
    description: "Un Blog para ayudarte en tu vida cotidiana como programador.",
    lang: "es",
    siteUrl: process.env.URL || "http://localhost:8080/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Un Blog cristiano para ayudarte en tu vida cotidiana.",
    filename: "atom.xml",
    path: "/atom.xml",
    id: process.env.URL || "http://localhost:8080/",
    authorName: "Yonaiker Barreto & Hermary Teran",
    authorEmail: "ybarretomaterano@gmail.com"
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "Bienvenido a Lenguaje Máquina",
    description: "Un Blog para ayudarte en tu vida cotidiana como programador"
  }
}
