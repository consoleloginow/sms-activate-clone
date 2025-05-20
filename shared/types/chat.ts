export interface ChatActRequest {
  item: {
    slug: string
    name: string
    logoUrl: string
  }

  country: {
    code: number
    name: string
    flagUrl: string
  }

  count: number
  price: number
}

export interface ChatTopUpBalanceMessage {
  worth: number
}
