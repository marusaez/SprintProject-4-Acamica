import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import SubmitTweet from "./SubmitTweet";
import Tweet from "./Tweet";
import { useProtectedContext } from "./Protected";

const Tweets = () => {
  const { body, deleteTweet, updateTweet, tweets, edit, setEdit, user } =
    useContext(AppContext);

  // if (!isLogged) {
  //   return <p>No logueado</p>
  // }
  console.log(body)

  return (
    <div className="Tweets">
      <div>
        {user ? (
          <div>
            <img src={user.photoURL} alt="Foto de perfil" />
            <h4>{user.displayName}</h4>
          </div>
        ) : (
          <div>
            <p>Timeline público</p>
          </div>
        )}
      </div>
      <div>
        {tweets.map((tweet, i) => {
          console.log(tweet)
          return (
            <div id={tweet.id} key={i}>
              {tweet.image && (
                <img
                  width="100"
                  height="100"
                  src={tweet.image}
                  alt="profile picture"
                />
              )}
              <p>Usuario: {tweet.autor}</p>
              {/* {edit ? <Tweet tweet={tweet} /> : <p>{tweet.message}</p>} */}
              <p>{tweet.tweet}</p>
              {/* <p>{body.tweet}</p> */}
              <p>Likes: {tweet.likes}</p>
              {/* <button onClick={() => setEdit(!edit)}>Actualizar tweet</button> */}
              {user.uid === tweet.uid && <button onClick={() => deleteTweet(tweet.id)}>
                Eliminar tweet
              </button>}
             
              {/* <button onClick={() => deleteTweet(tweet.id)}>
                Eliminar tweet
              </button> */}
              
              <button onClick={() => updateTweet(tweet)}>Me gusta</button>
              <hr />
            </div>
          );
        })}
      </div>
      <SubmitTweet />
    </div>
  );
};

export default Tweets;
