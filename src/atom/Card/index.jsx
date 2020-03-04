import React from 'react';

let Card = (props) => {
      return(
        //   <div className="row">
        <React.Fragment>
          <div className="container">
            <div className={props.className}>
                {props.value}
            </div>
          </div>
        </React.Fragment>
      )
}
export default Card;