import { defineStore } from 'pinia';

type OverlayName = 'travel' | 'accomodation';

export const useOverlayStateStore = defineStore('overlay-state', {
  state: () => ({ visibleOverlay: ''}),
  
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
  },
});
