
import './App.css';
import {Firebase} from './testingfire/config'
import {getFirestore, collection, getDocs} from 'firebase/firestore/lite';


function App() {
  return (
    <div className="App">
    <button onClick={async () => { 
      const db = getFirestore(Firebase); 
      const prodtCol = collection(db, 'products'); 
      const prodtSnapshot = await getDocs(prodtCol); 
  
        const prodtList = prodtSnapshot.forEach((obj)=>{ 
        console.log(obj.data()) 
      }) 
      return prodtList; 

    }} >Click me</button> 
  <h1>Hello Welcome</h1>
    </div>
  );
}

export default App;
