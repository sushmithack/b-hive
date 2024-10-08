import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SpaceData } from '../types/index';

interface SpaceState {
  spaces: SpaceData[];
}

const initialState: SpaceState = {
  spaces: [],
};

const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    setSpaces: (state, action: PayloadAction<SpaceData[]>) => {
      state.spaces = action.payload;
    },
  },
});

export const selectSpaces = (state: { space: SpaceState }) => state.space.spaces;

export const { setSpaces } = spaceSlice.actions;
export default spaceSlice.reducer;
