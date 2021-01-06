import React from 'react';


type CountPropsType = {
     count: number
}

 function Count(props: CountPropsType) {

     return (
         <div className="styleCount">
              {props.count}
              <div className='error'>{props.count === 5}</div>
         </div>
     )
}