import { countriesStackRender } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async (event) => {
  const itemId = event.context.params?.itemId as string

  const data = await countriesStackRender(itemId)

  const countries = data?.data?.cards.map(({
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
    countries,
  }
})
