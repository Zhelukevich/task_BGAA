import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '@store/store';

import { SubjectDataType } from '../../../types/subject';

const urlApi = 'https://bgaa.by/test';

export const fetchSubject = createAsyncThunk('GET_Subject/fetchSubject', async () => {
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
  name: 'Subject',
  initialState,
  reducers: {
    updateAdditionalInfo: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);

      if (dataItem) {
        dataItem.additionalInfo = action.payload.additionalInfo;
      }
    },
    updateLaboratoryTeacher: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);
      if (dataItem) {
        dataItem.podgroups[0].laboratoryTeacher = action.payload;
      }
    },

    updateLectureTeacher: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);
      if (dataItem) {
        dataItem.podgroups[0].lectureTeacher = action.payload.lectureTeacher;
      }
    },

    updatePracticeTeacher: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);
      if (dataItem) {
        dataItem.podgroups[0].practiceTeacher = action.payload.practiceTeacher;
      }
    },

    updateSeminarTeacher: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);
      if (dataItem) {
        dataItem.podgroups[0].seminarTeacher = action.payload.seminarTeacher;
      }
    },

    updateExamTeacher: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);
      if (dataItem) {
        dataItem.podgroups[0].examTeacher = action.payload.examTeacher;
      }
    },

    updateOffsetTeacher: (state, action) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);
      if (dataItem) {
        dataItem.podgroups[0].offsetTeacher = action.payload;
      }
    },
  },

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

export const {
  updateAdditionalInfo,
  updateLaboratoryTeacher,
  updateLectureTeacher,
  updatePracticeTeacher,
  updateSeminarTeacher,
  updateExamTeacher,
  updateOffsetTeacher,
} = apiSubjectSlice.actions;

export const apiSubject = (state: RootState) => state.apiSubject;

export default apiSubjectSlice.reducer;


