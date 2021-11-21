import React, { createContext, useState, useEffect } from "react";
import {firestore} from "../firebase"

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [tweets, setTweets] = useState ([])
    const [body, setBody] = useState ({})
    const [messageTweet, setMessageTweet] = useState("")
    const [userTweet, setUserTweet] = useState("")
    const [edit, setEdit] = useState(false)

  const getAllTweets = () => {
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
            likes: doc.data().likes || 0,
            id: doc.id
        }
      });
      setTweets(tweets)
    })
  }

  const createTweet = (e) => {
    // setEdit(false)
    e.preventDefault();
    firestore.collection("tweets")
    .add(body)
    .then(() =>{
      getAllTweets();
    })
    .catch((err) => {console.error(err.message)})
  }

  const deleteTweet = (id) => {
    firestore.collection("tweets")
    .doc(id)
    .delete()
    .then(() =>{
      getAllTweets();
    })
    .catch((err) => {console.error(err.message)})
  }

  const updateTweet = (tweet) => {
    firestore.doc(`tweets/${tweet.id}`)
    .update({likes: tweet.likes + 1
    })
    .then(()=> {
      // getAllTweets();
    })
    .catch((err) => {console.error(err.message)})
  }
  
  const updateNewTweet = (tweet) => {
    firestore.doc(`tweets/${tweet.id}`)
    .update({message: messageTweet})
    .then(() => {
      setEdit(false)
    })
    .catch((err) => {console.error(err.message)})
  }

  //////////// OBTENER MENSAJE TWEET SELECCIONADO
  // const getMessage = (tweet) => {
  //   const tweetMessage = tweet.message
  //   setMessageTweet(tweetMessage)
  //   setEdit(true)
  //   // console.log(edit)
  // }

  // const editTweet = (tweet) => {
  //   // setEdit(false)
  //   firestore.doc(`tweets/${tweet.id}`)
  //   .update({message: messageTweet
  //   })
  //   .then(()=> {
  //     // getAllTweets();
  //   })
  //   .catch((err) => {console.error(err.message)})
  //   // console.log(message)
  // }


  useEffect(() => {
    // getAllTweets()
    const desuscribir = firestore.collection("tweets")
    .onSnapshot((snapshot) => {
      const tweets = snapshot.docs.map(doc => {
        return {
          message: doc.data().message,
          user: doc.data().user,
          likes: doc.data().likes,
          id: doc.id
        }
      });
      setTweets(tweets)
    })
    return () => desuscribir();
  }, [])

  const handleChange = (e) => {
    let newTweet = {
      ...body,
      [e.target.name]: e.target.value
      // [userTweet]: messageTweet
    };
    setBody(newTweet)
  }
  // const handleMessageTweet = (e) => {
  //   setMessageTweet(e.target.value)
  // }
  // const handleUserTweet = (e) => {
  //   setUserTweet(e.target.value)
  // }
  return (
    <AppContext.Provider value={{tweets, messageTweet, setMessageTweet, createTweet, deleteTweet, updateTweet, handleChange, body, updateNewTweet, edit, setEdit}}>{props.children}</AppContext.Provider>
  );
};
