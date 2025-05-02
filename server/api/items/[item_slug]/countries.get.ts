import { countriesStackRender, getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async (event) => {
  const params = getRouterParams(event) as { item_slug: string }
  const query = getQuery(event) as { search?: string }

  const item = await (async () => {
    const { name, shortName } = (await getAllServicesDesktop()).data.find(({ shortName }) => shortName === params.item_slug)!

    return {
      slug: shortName,
      name,
      logoUrl: `https://smsvirtual.ru/static/service_icons/${shortName}.jpeg`,
    }
  })()

  const raw = await countriesStackRender(params.item_slug)

  if (query.search) {
    raw.data.cards = raw.data.cards.filter(({ searchName }) => searchName.includes(query.search!))
  }

  const countries = raw.data.cards.map(({
    name,
    country,
    count,
    prices,
  }) => ({
    name,
    code: country,
    flagUrl: `https://smsvirtual.ru/static/country_icons/${country}.png`,
    count,
    price: prices.min,
  }))

  return {
    item,
    countries,
  }
})
