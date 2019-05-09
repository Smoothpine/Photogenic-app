import React from 'react';
import './Rank.css';


const Rank = ({name, entries}) => {
	return (
   <div>
	   <div className='f3'>
	   		<p>{`${name}, your current number of scans is...`}</p>
	   </div>
	   <div className='f1'>
	   		<p>{entries}</p>
	   </div>
   </div>
  );
} 

export default Rank;