import React, { useEffect } from 'react';

import './style/reset.global.css';
import './style/fonts.global.css';
import './style/main.global.css';
import { MyButton } from '@UI/MyButton';
import { useAppDispatch, useAppSelector } from '@hooks/ReduxToolkit-hooks';
import { fetchSubject } from '@store/slice/apiSubjectSlice';
import { SubjectPages } from '@pages/SubjectPages';
import { Container } from '@components/Container';


function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSubject());
  }, [dispatch]);

  const subjectList = useAppSelector(state => state.apiSubject.subject);

  console.log(subjectList);

  return (
    <Container>
      <SubjectPages />
    </Container>
  );
}

export default App;
