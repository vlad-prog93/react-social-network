import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <Fragment>

        <div className='wrapper'>
          <Header />
          <Sidebar />
          <div className='wrapper-content'>
            <Routes>
              <Route path='/profile/*' element={<Profile 
                                                profile={props.state.profile}
                                                dispatch={props.dispatch} />} />
              <Route path='/dialogs/*' element={<Dialogs 
                                                state={props.state.dialogs} 
                                                dispatch={props.dispatch} />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/music/*' element={<Music />} />
              <Route path='/settings/*' element={<Settings />} />
            </Routes>
          </div>
        </div>

      </Fragment>
    </BrowserRouter>
  );
}

export default App;
