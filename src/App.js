import './App.css';
import Footer from './components/Footer/Footer';
import Lunchcalender from './components/Lunchcalender/Lunchcalender';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Newsandupdate from './components/Newsandupdate/Newsandupdate';
import Newsprops from './components/Newsprops/Newsprops';
import Commets from './components/Commets/Commets';
import Upcomming from './components/Upcomming/Upcomming';

function App() {
  return (
    <div className='text-warning'>
<Header/>
<Hero/>
<Upcomming/>
{/* <Commets/> */}
{/* <Lunchcalender/> */}
{/* <Newsandupdate/> */}
{/* <Newsprops/> */}
{/* <Footer/> */}
    </div>
  );
}

export default App;
