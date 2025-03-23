import type responseExample from './getAllServicesDesktop-response-example.json'

export async function getAllServicesDesktop() {
  const response = await fetch('https://sms-activate.guru/stubs/apiMobile.php', {
    method: 'POST',
    body: new URLSearchParams({
      action: 'getAllServicesDesktop',
      render: 'true',
    }),
  })

  const responseData = await response.json() as typeof responseExample
  return responseData
}
