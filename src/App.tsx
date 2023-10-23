import React, { useEffect } from 'react';
import { useAppDispatch } from '@hooks/ReduxToolkit-hooks';
import { fetchSubject } from '@store/slice/apiSubjectSlice';
import { SubjectPages } from '@pages/SubjectPages';
import './style/reset.global.css';
import './style/fonts.global.css';
import './style/main.global.css';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubject());
  }, [dispatch]);

  return (
    <SubjectPages />
  );
}

export default App;
