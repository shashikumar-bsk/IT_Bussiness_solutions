import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import NextPage from './components/Main_Home/Home/Emp';
import Acee from './components/Main_Home/Home2/Acee';
import Clients from './components/Main_Home/Clients/client';
import Develop from './components/Main_Home/Develop/Develop';
import Partner from './components/Main_Home/Partner/Partner';
import Data from './components/Main_Home/Data/Data';
import Service from './components/Main_Home/Services/Service';
import Join from './components/Main_Home/Join/Join';
import Footer from './components/Main_Home/Footer/Footer';
import Blank from './components/MainService/Blank/Blank';
import Software from './components/MainService/Software/Software';
import Cyber from './components/MainService/Cyber/Cyber';
import Cloud from './components/MainService/Cloud/Cloud';
import DataAi from './components/MainService/DataAi/DataAi';
import Digital from './components/MainService/Digital/Digital';
import Saas from './components/MainService/Saas/Saas';
import End from './components/MainService/End/End';
import Ites from './components/MainService/Ites/Ites';
import Foot from './components/MainService/Foot/Foot';
import Us from './components/ABOUTUS/Us/Us.jsx'
import Accel from './components/ABOUTUS/Accele/Accel.jsx';
import We from './components/ABOUTUS/StatsSection/StatsSection.jsx';
import Story from './components/ABOUTUS/Story/Story.jsx';
import ContactBlank from './components/Conatct/ContactBlank/ContactBlank.jsx';
import Support from './components/Conatct/ContactBlank/Support/Support.jsx';


function Home() {
  return (
    <div className="font-sans text-gray-900">
      <NextPage />
      <Acee />
      <Clients />
      <Develop />
      <Partner />
      <Data />
      <Service />
      <Join />
      <Footer />
      <hover/>
    </div>
  );
}

// ✅ Define BlankPage Component
function BlankPage() {
  return (
    <div>
      <Blank />
      <Software /> 
      <Cyber />
      <Cloud />
      <DataAi />
      <Digital />
      <Saas />
      <End />
      <Ites />
      <Foot />
    </div>
  );
}

// ✅ Define AboutUs Component Correctly
function AboutUsPage() {
  return (
  <>
    <Us/>
    <Accel/>
    <We/>
    <Story/>
    <Why/>
    <Query/>
    </>
  );
}



function Contact() {
  return (
    <div>
      <ContactBlank />
      <Support/>
      <Footer  />
    </div>
  );
}




// ✅ Define App Component Only Once
function App() {
  return (

    <Router>
      <div className="font-sans text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blank" element={<BlankPage />} />
          <Route path="/about" element={<AboutUsPage />} /> 
          <Route path="/contact" element={<Contact />} />
          
          
        </Routes>
      </div>
     
    </Router>
  );
}

export default App;
