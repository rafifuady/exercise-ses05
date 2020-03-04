import React from 'react';

let Button = (props) => {
    //   console.log(this.props);
      return(
          <div>
            <button className={props.className} 
            onClick={props.updateNum}>{props.sign}</button>
        </div>
      )
}
export default Button;