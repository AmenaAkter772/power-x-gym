import React from 'react';
import './OurClass.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom';

const OurClasses = (props) => {
  const {img, id, name} = props.classItem;
    const history = useHistory();

  function handleClick() {
    history.push(`/about/${id}`);
  }
  return (
    <div className="cartStyle mt-5 pt-5" style={{backgroundImage:`url(${img})`}}>
      <div className="textCardStyle">
         <h5 className="text-center pt-3">{name} <FontAwesomeIcon onClick={handleClick} style={{marginLeft:'25px', cursor:'pointer'}} icon={faArrowRight} /></h5>
      </div>
    </div>
  );
};

export default OurClasses;