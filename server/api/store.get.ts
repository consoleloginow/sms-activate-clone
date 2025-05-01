import { getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async () => {
  const items = (await getAllServicesDesktop()).data.map(({
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
