import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface PageTransitionState {
  sectionLoading: boolean;
  sectionTimer: boolean;
}

const initialState: PageTransitionState = {
  sectionLoading: false,
  sectionTimer: false,
};

interface SetSectionPayload {
  type: 'loading' | 'timer';
  value: boolean;
}

export const pageTransitionSlice = createSlice({
  name: 'pageTransition',
  initialState,
  reducers: {
    setSection: (state, action: PayloadAction<SetSectionPayload>) => {
      if (action.payload.type === 'loading') {
        state.sectionLoading = action.payload.value;
      } else if (action.payload.type === 'timer') {
        state.sectionTimer = action.payload.value;
      }
    },
  },
});

export const { setSection } = pageTransitionSlice.actions;
export default pageTransitionSlice.reducer;
