import { defineStore } from 'pinia';
import { TravelData } from '../types/Travel.type';
import { AccomodationData } from '../types/Accomodation.type';

type OverlayName = 'travel' | 'accomodation';

export const useOverlayStore = defineStore('overlay', {
  state: () => ({ visibleOverlay: '', travelData: {}, accomodationData: {} }),
  
  getters: {
    isDataInitialized: (state) => {
      return (overlayName: OverlayName) => Object.keys(state[`${overlayName}Data`]).length > 0
    }
  },

  actions: {
    toggleOverlay(overlayName: OverlayName) {
      if (this.$state.visibleOverlay === overlayName) {
        this.clearOverlay();
        return;
      }

      this.$state.visibleOverlay = overlayName;
    },

    clearOverlay() {
      this.$state.visibleOverlay = '';
    },

    async initializeOverlayData(service: () => Promise<TravelData | AccomodationData>, overlayName: OverlayName) {
      const data = await service();

      switch(overlayName){
        case 'travel':
          this.$state.travelData = data;
          break;
        case 'accomodation':
          this.$state.accomodationData = data;
          break;
      } 
    }
  },
});
