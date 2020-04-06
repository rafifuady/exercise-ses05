import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Provider } from "react-redux";

import './App.css';
import Count from './pages/Count';
import Starwars from './pages/starWars'

import reduxStore from "./redux/store";


class App extends React.Component {
  
  render(){
    
    return (
      <Provider store={reduxStore}>
        <Router>
          <Switch>
            <Route path="/" component={Count} />
            <Route path="/count" component={Count} />
            <Route path="/starwars" component={Starwars} />
            <Route component={() => <div>ErrorPage</div>} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App
// let increment = () => {
//   this.props.incrementAction()
// }
// let decrement = () => {
//   // if (number > 0) {
//         this.props.decrementAction()
//         // } else {
//           // setMessage("Sudah mencapai maximum")
//         // }
// }
// let handleChangeName = () => {
//   this.props.changeName("Rudi")
// }

// // const [state, setState] = useState({
// //   number: 0,
// //   renderErrorComponent: false,
// //   errorMessage: 'error'
// // })

// const dispatch = useDispatch()
  
//   const selector = useSelector((state) => {
//     return {
//       num: state.count,
//       user: state.user
//     } 
//   })

// let App = () => {
//   // const [number, setNumber] = useState(0)
//   // const [message, setMessage] = useState("")

//   // const [state, setState] = useState({
//   //   number: 0,
//   //   renderErrorComponent: false,
//   //   errorMessage: 'error'
//   // })  

//   return (
//     <div className="App">
//       <Provider store={reduxStore}>
//         {/* <Card showNum={this.state.number} /> */}
//         <div className="row">
//             <Card value={number} />
//           </div>
          
//           <div className="row">
//             <div className="col">
//               <Button  className="btn btn-primary" updateNum={increment} sign=' + tambah' />
//             </div>  
//             <div className="col">
//             <Button className="btn btn-danger" updateNum={decrement} sign=' - kurang' />
//             </div>
//           </div>
//           <div className="row">
//             <Card className="alert-warning" value={message} />
            
//             {/* <div className="container">{this.state.message}</div> */}
//           </div>
//       </Provider>
//     </div>
         
//   )
// }

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
//             <div className="App">
//           {/* <Card showNum={this.state.number} /> */}
//           <div className="row">
//             <Card value={this.state.number} />
//           </div>
          
//           <div className="row">
//             <div className="col">
//               <Button className="btn btn-primary" updateNum={this.increment} sign=' + tambah' />
//             </div>  
//             <div className="col">
//               <Button className="btn btn-danger" updateNum={this.decrement} sign=' - kurang' />
//             </div>
//           </div>
//           <div className="row">
//             <Card className="alert-warning" value={this.state.message} />
            
//             {/* <div className="container">{this.state.message}</div> */}
//           </div>

//         </div>
//     );
//   }
// }

