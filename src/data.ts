export const CONTACT = {
  phoneDisplay: '(11) 94795-0405',
  whatsapp: '5511947950405',
  address: 'R. Bruno de Sordi, 300',
  district: 'Jd. Palladino – Itatiba/SP',
  lat: -22.9943535,
  lng: -46.8504048,
}

export const whatsLink = (msg?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${msg ? `?text=${encodeURIComponent(msg)}` : ''}`

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${CONTACT.lat},${CONTACT.lng}`
export const wazeLink = `https://waze.com/ul?ll=${CONTACT.lat},${CONTACT.lng}&navigate=yes`

export type EventItem = {
  id: string
  title: string
  subtitle: string
  date: string // ISO, horário local
  genre: 'Rock' | 'Pagode' | 'Arraial'
  flyer: string
  lineup: string[]
  prices: string[]
}

// Para adicionar um evento novo, basta incluir um item aqui.
export const EVENTS: EventItem[] = [
  {
    id: 'resenha-tk',
    title: 'Resenha do TK',
    subtitle: 'Tcharlinhos Kroos',
    date: '2026-09-26T21:00:00',
    genre: 'Pagode',
    flyer: '/media/flyer-resenha-tk.jpg',
    lineup: ['Tcharlinhos Kroos', 'Part. Sexta Dose', 'Part. Mateus Terra', 'Part. Pegada Nossa'],
    prices: ['Antecipado: homem R$20 · mulher R$10', 'Na hora: homem R$30 · mulher R$20', 'Mulher VIP com nome na lista'],
  },
  {
    id: 'arraial-atormentados',
    title: 'Arraial Atormentados',
    subtitle: 'Creedence & Raimundos cover',
    date: '2026-06-20T16:00:00',
    genre: 'Arraial',
    flyer: '/media/flyer-arraial.jpg',
    lineup: ['Rollin’ River – tributo Creedence', 'Nega Tonteira – cover Raimundos', 'Apoio ATMC Moto Rock Bar'],
    prices: ['Antecipado R$10 · na hora R$20', 'Coletado: antecipado R$5 · na hora R$10'],
  },
  {
    id: 'el-ponto',
    title: 'El Ponto',
    subtitle: 'Rock’n’Roll + Churrasco El Toro',
    date: '2025-12-21T16:00:00',
    genre: 'Rock',
    flyer: '/media/flyer-el-ponto.jpg',
    lineup: ['Blue Army – cover Aerosmith', 'Tributo CBJR – Charlie Brown Jr.', 'Shop Suit – cover System of a Down'],
    prices: ['Antecipado: homem R$20 · mulher R$10', 'Na hora: homem R$30 · mulher R$20'],
  },
]

export const SHOWS = [
  { src: '/media/video-6.mp4', title: 'Banda ao vivo', desc: 'Bateria no talo, palco aceso' },
  { src: '/media/video-5.mp4', title: 'Casa cheia', desc: 'Luzes, fumaça e galera cantando' },
  { src: '/media/video-3.mp4', title: 'Especial MTV', desc: 'A era dos videoclipes' },
  { src: '/media/video-2.mp4', title: 'Noite no Ponto', desc: 'Mesa cheia e som rolando' },
  { src: '/media/video-4.mp4', title: 'Brasa & resenha', desc: 'Churrasco antes do show' },
]

export const PHOTOS = [
  { src: '/media/show-coberto.jpg', alt: 'Público lotando a área coberta durante show' },
  { src: '/media/casa-cheia.jpg', alt: 'Casa cheia à noite, sob as palmeiras' },
  { src: '/media/amigos-1.jpg', alt: 'Amigos curtindo a noite no Ponto Alto' },
  { src: '/media/entrada.jpg', alt: 'Entrada do Ponto Alto iluminada' },
  { src: '/media/amigos-2.jpg', alt: 'Galera reunida no Ponto Alto' },
  { src: '/media/fachada-luzes.jpg', alt: 'Varal de luzes na entrada do Ponto Alto' },
]
