import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { RootState } from '@store/store';

import { SubjectDataType } from '../../../types/subject';

const urlApi = 'https://bgaa.by/test';

export const fetchSubject = createAsyncThunk('GET_Subject/fetchSubject', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(urlApi);

    if (response.status !== 200 && 201) {
      throw new Error('ServerError!');
    }
    const subjectData = response.data;
    return subjectData;

  } catch (error) {
    return rejectWithValue(error);
  }

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
    updateAdditionalInfo: (state, action: PayloadAction<{ uniqueId: string; additionalInfo: string }>) => {
      const dataItem = state.subject.data.find(item => item.uniqueId === action.payload.uniqueId);

      if (dataItem) {
        dataItem.additionalInfo = action.payload.additionalInfo;
      }
    },

    updateLectureTeacher: (state, action: PayloadAction<{ uniqueId: string; lectureTeacher: string; index: number }>) => {
      const { uniqueId, lectureTeacher, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].lectureTeacher = lectureTeacher;
        }
      }
    },

    updateLaboratoryTeacher: (state, action: PayloadAction<{ uniqueId: string; laboratoryTeacher: string; index: number }>) => {
      const { uniqueId, laboratoryTeacher, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].laboratoryTeacher = laboratoryTeacher;
        }
      }
    },

    updatePracticeTeacher: (state, action: PayloadAction<{ uniqueId: string; practiceTeacher: string; index: number }>) => {
      const { uniqueId, practiceTeacher, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].practiceTeacher = practiceTeacher;
        }
      }
    },

    updateSeminarTeacher: (state, action: PayloadAction<{ uniqueId: string; seminarTeacher: string; index: number }>) => {
      const { uniqueId, seminarTeacher, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].seminarTeacher = seminarTeacher;
        }
      }
    },

    updateExamTeacher: (state, action: PayloadAction<{ uniqueId: string; examTeacher: string; index: number }>) => {
      const { uniqueId, examTeacher, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].examTeacher = examTeacher;
        }
      }
    },

    updateOffsetTeacher: (state, action: PayloadAction<{ uniqueId: string; offsetTeacher: string; index: number }>) => {
      const { uniqueId, offsetTeacher, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].offsetTeacher = offsetTeacher;
        }
      }
    },

    updateNumberOfPeople: (state, action: PayloadAction<{ uniqueId: string; countStudents: string; index: number }>) => {
      const { uniqueId, countStudents, index } = action.payload;
      const dataItem = state.subject.data.find(item => item.uniqueId === uniqueId);
      if (dataItem) {
        if (dataItem.podgroups && dataItem.podgroups[index]) {
          dataItem.podgroups[index].countStudents = countStudents;
        }
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
      state.error = actions.error.message as string;
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
  updateNumberOfPeople,
} = apiSubjectSlice.actions;

export const apiSubject = (state: RootState) => state.apiSubject;

export default apiSubjectSlice.reducer;


