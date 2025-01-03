import React from 'react';
import './App.css';

//landing rounter page
import Navbar from './Landing_Pages/Navbar';
import Main from './Landing_Pages/Main';
import Footer from './Landing_Pages/Footer';

//login router page
import Login from './Landing_Pages/Login';
import Register from './Landing_Pages/Register';

//page not found router page
import Pagenotfound from './Landing_Pages/Pagenotfound';

//main website app router page 
import Welcome from './Website/Welcome';
import Mainnav from './Website/Mainnavbar';
import Profile from './Website/Profile';
import Mainwebsite from './Website/Mainwebsite';
import CarbonIQ from './Website/CarbonIQ';
import Discoveryengine from './Website/Discoveryengine';
import BigQuery from './Website/BigQuery';
import Database from './Website/Databases';
import Networking from './Website/Networking';
import Artificial_Intelligence from './Website/Artificial Intelligence';
import IntegrationServices from './Website/IntegrationServices';
import CloudStorage from './Website/CloudStorage';
import Monitoring from './Website/Monitoring';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="mainnav">
        <Router>
          <Routes>
            {/* landing page routers */}
            <Route path='/' element={<> <Navbar /><Main /><Footer /> </>} />
            <Route path='/login' element={<><Login /> </>} />
            <Route path='/register' element={<><Register /></>} />
            <Route path="/pagenotfound" element={<><Pagenotfound /></>} />

            {/* welcome pagestarts */}
            <Route path="/welcome" element={<> <Welcome /> </>} />
            {/* <Route path="/welcome" element={<> <Mainnav/></>} /> */}
            <Route path='/welcome/pagenotfound' element={<> <Pagenotfound /> </>} />
            <Route path='/welcome/Profile' element={<> <Mainnav /><Profile /> </>} />
            <Route path='/welcome/TryCarbonIQ' element={<><CarbonIQ /> </>} />
            <Route path='/welcome/Products/Discovery Engine' element={<> <Mainnav /><Discoveryengine /> </>} />
            <Route path='/welcome/Products/BigQuery' element={<> <Mainnav /><BigQuery /> </>} />
            <Route path='/welcome/Products/Database' element={<> <Mainnav /><Database /> </>} />
            <Route path='/welcome/Products/Networking' element={<> <Mainnav /><Networking /> </>} />
            <Route path='/welcome/Products/Artificial Intelligence' element={<> <Mainnav /><Artificial_Intelligence /> </>} />
            <Route path='/welcome/Products/Integration Services' element={<> <Mainnav /><IntegrationServices /> </>} />
            <Route path='/welcome/Products/Cloud Storage' element={<> <Mainnav /><CloudStorage /> </>} />
            <Route path='/welcome/Products/Monitoring' element={<> <Mainnav /><Monitoring /> </>} />

          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;