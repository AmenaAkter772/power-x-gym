import './App.css';
import OurClassInfo from './components/OurClass/OurClassInfo/OurClassInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PurchaseRateInfo from './components/PurchaseRate/PurchaseRateInfo/PurchaseRateInfo';

function App() {
  return (
    <div>
      <OurClassInfo></OurClassInfo>
      <PurchaseRateInfo></PurchaseRateInfo>
    </div>
  );
}

export default App;
