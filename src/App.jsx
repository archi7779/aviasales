import React from 'react';
import SearchWindow from './components/SearchWindow';
import MainLogo from './components/MainLogo';
import OutPutWindow from './components/OutPutWindow';
import { AppWrapper } from './components/styledComponents';

function App() {
  return (
    <AppWrapper>
      <MainLogo />
      <SearchWindow />
      <OutPutWindow />
    </AppWrapper>
  );
}

export default App;
