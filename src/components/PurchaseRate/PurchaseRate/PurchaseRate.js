import React from 'react';
import './PurchaseRate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck} from '@fortawesome/free-solid-svg-icons'

const PurchaseRate = (props) => {
    const {img, id, billed, plan, rate, mobile, host, custom, work, customers} = props.purchaseItem;
  return (
    <div className="purchaseCard mt-5 pt-5" style={{backgroundImage:`linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ),url(${img})`}}>
        <h5 className="textColor text-center">{billed}</h5>
        <h1 className="text-white text-center">{plan}</h1>
        <h1 className="secondTextColor text-center">{rate}</h1>
        <div className="text-white ml-5 pl-5">
        <p> <FontAwesomeIcon className="mr-3" icon={faCheck} />{mobile}</p>
        <p> <FontAwesomeIcon className="mr-3" icon={faCheck} />{host}</p>
        <p> <FontAwesomeIcon className="mr-3" icon={faCheck} />{custom}</p>
        <p> <FontAwesomeIcon className="mr-3" icon={faCheck} />{work}</p>
        <p> <FontAwesomeIcon className="mr-3" icon={faCheck} />{customers}</p>
        <button className="button"><strong>PURCHASE</strong></button>
        </div>
    </div>
  );
};

export default PurchaseRate;