import React from 'react';
import Home from './routes/Home';
import Inquiry from './routes/Inquiry';
import Reservation from './routes/Reservation';
import Navigation from './components/Navigation';
import { HashRouter, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {//Navigation에서 Link를 사용하므로 Router 안에 넣어줘야 함
  return (
    <>
    <HashRouter>
      <Navigation />
      <Route path='/' component={Home} exact={true} />
      <Route path='/inquiry' component={Inquiry} />
      <Route path='/reserve' component={Reservation} />
    </HashRouter>
    <Footer />
    </>
  );//여러개의 components 동시에 사용하기 위해 <> </> fragments insert해야함
}

export default App;
