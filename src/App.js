import React, { useState } from 'react';
import './App.css';
import Button from './atom/Button';
import Card from './atom/Card';


let App = () => {
  const [number, setNumber] = useState(0)
  const [message, setMessage] = useState("")
  let increment = () => {
    setNumber(number + 1)
    setMessage("")
  }
  let decrement = () => {
    if (number > 0) {
            setNumber(number - 1)
          } else {
            setMessage("Sudah mencapai maximum")
          }
  }
  return (
    <div className="App">
         {/* <Card showNum={this.state.number} /> */}
         <div className="row">
           <Card value={number} />
         </div>
        
         <div className="row">
           <div className="col">
             <Button  className="btn btn-primary" updateNum={increment} sign=' + tambah' />
           </div>  
           <div className="col">
           <Button className="btn btn-danger" updateNum={decrement} sign=' - kurang' />
           </div>
         </div>
         <div className="row">
           <Card className="alert-warning" value={message} />
          
           {/* <div className="container">{this.state.message}</div> */}
         </div>
       </div>
  )
}
export default App;

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       number: 0,
//       message: ""
//     }
//   }
//   increment = () => {
//     this.setState({
//       number: this.state.number + 1,
//       message: ""
//     })
//   }
//   decrement = () => {
//     if (this.state.number > 0) {
//       this.setState({
//         number: this.state.number - 1
//       })
//     } else {
//       this.setState({
//         message: "sudah mencapai maximum pengurangan"
//       })
//     }
//   }
//   render() { 
//       return (
//       <div className="App">
//         {/* <Card showNum={this.state.number} /> */}
//         <div className="row">
//           <Card value={this.state.number} />
//         </div>
        
//         <div className="row">
//           <div className="col">
//             <Button updateNum={this.increment} sign=' + tambah' />
//           </div>  
//           <div className="col">
//           <Button updateNum={this.decrement} sign=' - kurang' />
//           </div>
//         </div>
//         <div className="row">
//           <Card className="alert-warning" value={this.state.message} />
          
//           {/* <div className="container">{this.state.message}</div> */}
//         </div>

//       </div>
//     );
//   }
// }
