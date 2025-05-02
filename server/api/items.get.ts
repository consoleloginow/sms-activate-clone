import { getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as { search?: string }

  const raw = await getAllServicesDesktop()

  if (query.search) {
    raw.data = raw.data.filter(({ nameSearch }) => nameSearch.includes(query.search as string))
  }

  const items = raw.data.map(({
    name,
    shortName,
  }) => ({
    slug: shortName,
    name,
    logoUrl: `https://smsvirtual.ru/static/service_icons/${shortName}.jpeg`,
  }))

  return {
    items,
  }
})
