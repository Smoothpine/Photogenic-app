import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({box, imageUrl}) => {
	return (
   <div className='center ma'>
   		<div className='absolute mt2'>
   			<img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
          {console.log('box in faceRec', box)}
          {
            box.length ?
              box.map((item, i) => <div key={i} className='bounding-box'
                style={
                  {
                    top: item.topRow,
                    right: item.rightCol,
                    bottom: item.bottomRow,
                    left: item.leftCol
                  }
                }></div>) : ''
          }
   		</div>
   </div>
  );
} 

export default FaceRecognition;