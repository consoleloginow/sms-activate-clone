import { countriesStackRender, getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async (event) => {
  const item_slug = event.context.params?.item as string

  const item = (await getAllServicesDesktop()).data.map(({
    name,
    shortName,
  }) => ({
    slug: shortName,
    name,
    logoUrl: `https://smsvirtual.ru/static/service_icons/${shortName}.jpeg`,
  })).find(item => item.slug === item_slug)

  const countries = (await countriesStackRender(item_slug)).data?.cards.map(({
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
