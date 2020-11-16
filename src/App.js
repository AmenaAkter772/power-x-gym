import './App.css';
import OurClassInfo from './components/OurClass/OurClassInfo/OurClassInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PurchaseRateInfo from './components/PurchaseRate/PurchaseRateInfo/PurchaseRateInfo';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';

function App() {
  return (
    <div>
      <OurClassInfo></OurClassInfo>
      <PurchaseRateInfo></PurchaseRateInfo>
      <PersonalDetails></PersonalDetails>
    </div>
  );
}

export default App;
