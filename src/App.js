import {useEffect, useState} from "react"
import {firestore} from "./firebase"

function App() {
  const [tweets, setTweets] = useState ([])
  const [body, setBody] = useState ({})


  let getAllTweets = () => {
    firestore.collection("tweets")
       // .limit(1)
      // .where('likes', '>', number)
      // .orderBy('likes', 'asc')
      // .startAt(30)
      // .endAt(50)
    .get()
     .then((snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          return {
            message: doc.data().message,
            user: doc.data().user,
            id: doc.id
        }
      });
      setTweets(tweets)
    })
  }

  let createTweet = (e) => {
    e.preventDefault();
    firestore.collection("tweets")
    .add(body)
    .then(() =>{
      getAllTweets();
    })
    .catch((err) => {console.error(err.message)})
  }

  let deleteTweet = (id) => {
    firestore.collection("tweets")
    .doc(id)
    .delete()
    .then(() =>{
      getAllTweets();
    })
    .catch((err) => {console.error(err.message)})
  }

  useEffect(() => {
    getAllTweets()
  }, [])

  const handleChange = (e) => {
    let newTweet = {
      ...body,
      [e.target.name]: e.target.value
    };
    setBody(newTweet)
  }
  return (
    <div className="App">
      <div>
        {
          tweets.map((tweet) => {
            return (
              <div id={tweet.id}>
                <p>{tweet.user}</p>
                <p>{tweet.message}</p>
                <button onClick={() => deleteTweet(tweet.id)}>Eliminar tweet</button>
                <hr />
              </div>
            )
          })
        }
      </div>
      <form onSubmit={createTweet}>
        <textarea  onChange={handleChange} name="message"></textarea>
        <input onChange={handleChange} type="text" name="user"></input>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default App;
