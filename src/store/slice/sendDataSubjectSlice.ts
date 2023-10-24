import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '@store/store';

import { SubjectDataType } from '../../../types/subject';

const urlApi = 'https://bgaa.by/test_result';
// PUT PATCH-лучше?
const sendDataToServer = async (data: SubjectDataType) => {
  try {
    const response = await axios.post(urlApi, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      throw new Error('Ошибка отправки данных на сервер');
    }

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchSentSubject = createAsyncThunk('SentSubject/fetchSentSubject', async (data: SubjectDataType) => {
  const response = await sendDataToServer(data);
  return response;
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

const sendDataSubjectSlice = createSlice({
  name: 'SentSubject',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSentSubject.pending, state => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(fetchSentSubject.fulfilled, (state, actions) => {
      state.loading = false;
      state.subject = actions.payload;
    });
    builder.addCase(fetchSentSubject.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.error.message;
    });
  },
});

export const sendDataSubject = (state: RootState) => state.sendDataSubject;

export default sendDataSubjectSlice.reducer;