import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { SubjectDataType } from '../../../types/subject';

const urlApi = 'https://bgaa.by/test';

export const fetchSubject = createAsyncThunk('subject/fetchSubject', async () => {
  const response = await axios.get(urlApi);
  return response.data;

});


interface SubjectState {
  subject: SubjectDataType,
  loading: boolean,
  error: string | undefined
}

const initialState: SubjectState = {
  subject: {
    data: [],
    teachers: [],
  },
  loading: false,
  error: '',
};

const apiSubjectSlice = createSlice({
  name: 'ApiSubject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSubject.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchSubject.fulfilled, (state, actions) => {
      state.loading = false;
      state.subject = actions.payload;
    });
    builder.addCase(fetchSubject.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.error.message;
    });
  },
});

export default apiSubjectSlice.reducer;


