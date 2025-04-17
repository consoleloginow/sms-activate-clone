export interface StockItem {
  name: string
  slug: string
  logoUrl: string
}

export interface StockCountry {
  name: string
  code: string
  count: number
  price: number
  flagUrl: string
}

export enum StockVerifType {
  BY_SMS = 'BY_SMS',
  BY_VOICE = 'BY_VOICE',
  BY_TEL_DIGITS = 'BY_TEL_DIGITS',
}
