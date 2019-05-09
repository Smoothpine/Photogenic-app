import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
	return (
   <div>
	   <p className='pa2 f3'>
	   		{'This Photo Scanner will detect faces in your photos. Try it out!'}
	   </p>
	   <div className='center'>
	   		<div className='form center pa4 br3 shadow-5'>
		   		<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
		   		<button 
		   			className='w-30 grow f4 link ph3 pv2 dib white button-color'
		   			onClick={onPictureSubmit}	
		   		>{'Scan'}</button>
	   		</div>
	   </div>
   </div>
  );
} 

export default ImageLinkForm;