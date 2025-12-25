import { createSlice } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

const savedTheme = localStorage.getItem('theme') as Theme | null;
const initialTheme: Theme = savedTheme || 'light';




const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: initialTheme } as ThemeState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme=== 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem('theme', state.theme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;