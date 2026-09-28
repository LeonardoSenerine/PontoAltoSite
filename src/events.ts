import { EVENTS, type EventItem } from './data'

export const isUpcoming = (e: EventItem, now = new Date()) =>
  // Considera o evento "ativo" até 12h depois do início.
  new Date(e.date).getTime() + 12 * 3600_000 > now.getTime()

export const upcomingEvents = () =>
  EVENTS.filter((e) => isUpcoming(e)).sort((a, b) => a.date.localeCompare(b.date))

export const pastEvents = () =>
  EVENTS.filter((e) => !isUpcoming(e)).sort((a, b) => b.date.localeCompare(a.date))

export const formatDate = (iso: string) => {
  const d = new Date(iso)
  return {
    day: d.toLocaleDateString('pt-BR', { day: '2-digit' }),
    month: d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', ''),
    year: d.getFullYear(),
    weekday: d.toLocaleDateString('pt-BR', { weekday: 'long' }),
    time: d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
  }
}
