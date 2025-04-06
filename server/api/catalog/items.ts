import { getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async () => {
  const data = await getAllServicesDesktop()

  const items = data.data.map(({
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
