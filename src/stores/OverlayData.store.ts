import { defineStore } from 'pinia';
import { getTravelData } from '@/services/travel.service';
import { getAccomodationData } from '@/services/accomodation.service';  

type OverlayName = 'travel' | 'accomodation';

export const useOverlayDataStore = defineStore('overlay-data', {
  state: () => ({ travelData: {}, accomodationData: {} }),
  
  getters: {
    isDataInitialized: (state) => {
      return (overlayName: OverlayName) => Object.keys(state[`${overlayName}Data`]).length > 0
    }
  },

  actions: {
    async initializeTravelData() {
      this.$state.travelData = await getTravelData();
    },
    
    async initializeAccomodationData() {
      this.$state.accomodationData = await getAccomodationData();
    }
  },
});
