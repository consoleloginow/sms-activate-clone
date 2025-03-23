import { getAllServicesDesktop } from '~/lib/sms-activate/stubs/apiMobile'

export default defineEventHandler(async () => {
  const data = await getAllServicesDesktop()

  const items = data.data.map(({
    name,
    shortName,
  }) => ({
    slug: shortName,
    name,
    logoUrl: `https://smsactivate.s3.eu-central-1.amazonaws.com/assets/ico/${shortName}0.webp`,
  }))

  return {
    items,
  }
})
