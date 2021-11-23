import React, { createContext, useState, useEffect } from "react";
import {firestore, storage} from "../firebase"

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [tweets, setTweets] = useState ([])
    const [body, setBody] = useState ({})
    const [messageTweet, setMessageTweet] = useState("")
    const [userTweet, setUserTweet] = useState("")
    const [edit, setEdit] = useState(false)
    const [file, setFile] = useState ({})
    const [progress, setProgress] = useState (0)

    

//   const getAllTweets = () => {
//     firestore.collection("tweets")
       // .limit(1)
      // .where('likes', '>', number)
      // .orderBy('likes', 'asc')
      // .startAt(30)
      // .endAt(50)
//     .get()
//      .then((snapshot) => {
//         const tweets = snapshot.docs.map((doc) => {
//           return {
//             message: doc.data().message,
//             user: doc.data().user,
//             likes: doc.data().likes || 0,
//             image: doc.data().image || false,
//             id: doc.id
//         }
//       });
//       setTweets(tweets)
//     })
//   }

  const createTweet = (e) => {
    // setEdit(false)
    e.preventDefault();
    const uploadTask = storage.ref().child(`/tweets/img${file.name}`)
    .put(file);

    uploadTask
    .on("state_changed", (snapshot) => {
        /////////////Cuando se está cargando la imagen
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress)
    }, 
    (err) => {
        console.error(err.message)
    }, () => {
        ////////// Cuando la imagen fue cargada, se sube la URL a firestore
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            if (Object.entries(file).length === 0) {
                url = false;
            }
            firestore.collection("tweets")
            .add({...body, image: url})
            .then(() => {
                console.log("Imagen cargada")
            })
            .catch((err) => {console.error(err.message)})
        }) 
        setProgress(0)
    })
  }

  const deleteTweet = (id) => {
    firestore.collection("tweets")
    .doc(id)
    .delete()
    .then(() =>{
    //   getAllTweets();
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

  const handleUpload = (e) => {
    console.log(e)
    setFile(e.target.files[0])
    // storage.ref().child(`/tweets/img${e.target.files[0].name}`)
    // .put(e.target.files[0])
    // .then(() => {
    //     console.log("¡Imagen cargada!")
    // })
  }

  useEffect(() => {
    // getAllTweets()
    const desuscribir = firestore.collection("tweets")
    .onSnapshot((snapshot) => {
      const tweets = snapshot.docs.map(doc => {
        return {
          message: doc.data().message,
          user: doc.data().user,
          likes: doc.data().likes,
          image: doc.data().image || false,
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
    <AppContext.Provider value={{progress, handleUpload, tweets, messageTweet, setMessageTweet, createTweet, deleteTweet, updateTweet, handleChange, body, updateNewTweet, edit, setEdit}}>{props.children}</AppContext.Provider>
  );
};
