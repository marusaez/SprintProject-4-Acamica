import {useEffect} from "react"
import {firestore} from "./firebase"

function App() {
  useEffect(() => {
    firestore.collection("tweets").get().then(snapshot => {
      snapshot.forEach(doc => {
        console.log(doc.data())
      })
    })
  }, [])
  return (
    <div className="App">
      APP
    </div>
  );
}

export default App;
