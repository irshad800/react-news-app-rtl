import { createSlice } from '@reduxjs/toolkit';  
import type { PayloadAction } from '@reduxjs/toolkit'; 

import i18n from '../../i18n';

type Language = 'en' | 'ar';






interface LanguageState {
  currentLanguage: Language;  }

const savedLanguage = localStorage.getItem('language');

const initialLanguage: Language = (savedLanguage as Language) || 'en';

const languageSlice = createSlice(
    {
  name: 'language',

  initialState: { currentLanguage: initialLanguage } as LanguageState,

  reducers: {
    
    setLanguage: (state, action: PayloadAction<Language>) => 
        {
         state.currentLanguage = action.payload;

               i18n.changeLanguage(action.payload);

               localStorage.setItem('language', action.payload);
               },
           },
}
);










export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;