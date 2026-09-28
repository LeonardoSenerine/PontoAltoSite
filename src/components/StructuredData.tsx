import { CONTACT, whatsLink, type EventItem } from '../data'
import { upcomingEvents } from '../events'

const SITE = __SITE_URL__

const address = {
  '@type': 'PostalAddress',
  streetAddress: CONTACT.address,
  addressLocality: 'Itatiba',
  addressRegion: 'SP',
  addressCountry: 'BR',
}

const venue = {
  '@type': 'BarOrPub',
  '@id': `${SITE}/#local`,
  name: 'Ponto Alto – Clube da Música',
  url: `${SITE}/`,
  image: `${SITE}/og-image.jpg`,
  telephone: '+55 11 94795-0405',
  address,
  geo: { '@type': 'GeoCoordinates', latitude: CONTACT.lat, longitude: CONTACT.lng },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${CONTACT.lat},${CONTACT.lng}`,
}

// "Blue Army – cover Aerosmith" -> "Blue Army"; "Part. Sexta Dose" -> "Sexta Dose"
const performerName = (line: string) => line.split(' – ')[0].replace(/^Part\.\s*/, '').trim()

const musicEvent = (e: EventItem) => ({
  '@type': 'MusicEvent',
  name: `${e.title} no Ponto Alto`,
  description: `${e.subtitle}. ${e.lineup.join(', ')}.`,
  startDate: `${e.date}-03:00`,
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  image: [`${SITE}${e.flyer}`],
  location: { '@type': 'Place', name: venue.name, address },
  organizer: { '@type': 'Organization', name: venue.name, url: `${SITE}/` },
  performer: e.lineup.map((l) => ({ '@type': 'PerformingGroup', name: performerName(l) })),
  offers: {
    '@type': 'Offer',
    price: e.priceFrom,
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    url: whatsLink(`Olá! Quero ingresso para ${e.title}.`),
  },
})

/** Dados estruturados (schema.org) para o Google mostrar a casa e os próximos shows. */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@graph': [venue, ...upcomingEvents().map(musicEvent)],
  }
  return (
    <script
      type="application/ld+json"
      // JSON gerado a partir dos nossos próprios dados; "<" escapado por segurança.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  )
}
