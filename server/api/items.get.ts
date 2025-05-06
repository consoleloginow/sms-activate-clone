import { getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as { search?: string, page?: string }

  const raw = await getAllServicesDesktop()

  if (query.search) {
    raw.data = raw.data.filter(({ nameSearch }) => nameSearch.includes(query.search as string))
  }

  const totalCount = raw.data.length
  const pageSize = 100
  const page = Number.parseInt(query.page ?? '1', 10)
  const nextPage = totalCount > page * pageSize ? page + 1 : null

  raw.data = raw.data.slice((page - 1) * pageSize, page * pageSize)

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

    totalCount,
    pageSize,
    page,
    nextPage,
  }
})
