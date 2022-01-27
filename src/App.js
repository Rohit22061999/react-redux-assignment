import './App.css';
import{useSelector,useDispatch} from 'react-redux'

function App() {
  const mycounter=useSelector((state)=>state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Counter</h2>
      <p> {mycounter}</p>
      <button onClick={() =>{dispatch({ type: "INC", payload: 2 })}}>+</button> <button onClick={() =>dispatch({ type: "DEC", payload: 2 })}>-</button> <button onClick={() => dispatch({ type: "RESET"})}>reset</button>
     
    </div>
  );
}
// const mapStateToProps=(state) => {
//   return{
//     mycounter:state
//   }
// }
// const mapDispatchToProps=(dispatch) => {
//   return{
//     counter:function () {
//       dispatch({ type: "INC", payload: 2 });
//     },
//     counter1:function () {
//       dispatch({ type: "DEC", payload: 2 });
//     },
//     counter2:function () {
//       dispatch({ type: "RESET"});
//     }
//   }
// }
export default (App);