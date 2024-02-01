import { TravelData } from "../types/Travel.type"

export const getTravelData = (): Promise<TravelData> => {
  return new Promise(resolve => {
    resolve({
      title: 'My Travel',
      hotelName: 'Hilton',
      price: '1000 €',
    })
  })
}
