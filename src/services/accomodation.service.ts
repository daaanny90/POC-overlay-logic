import { AccomodationData } from "../types/Accomodation.type";

export const getAccomodationData = (): Promise<AccomodationData> => {
  return new Promise(resolve => {
    resolve({
      title: 'Accomodation Informations',
      places: 5,
      services: [
        'swimming pool',
        'breakfast'
      ]
    })
  })
}
