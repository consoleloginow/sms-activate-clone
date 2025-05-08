import type responseExample from './countriesStackRender-response-example.json'

export async function countriesStackRender(service: string) {
  const response = await fetch('https://sms-activate.ru/stubs/apiMobile.php', {
    method: 'POST',
    body: new URLSearchParams({
      action: 'countriesStackRender',

      service,

      activationType: '0',
      change: 'true',
      render: 'true',
      forward: '0',
      v: '2',
    }),
  })

  const responseData = await response.json() as typeof responseExample
  return responseData
}
