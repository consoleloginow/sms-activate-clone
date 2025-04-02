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
    flagUrl: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/country/${country}.svg`,
    count,
    price: prices.min,
  }))

  return {
    countries,
  }
})
