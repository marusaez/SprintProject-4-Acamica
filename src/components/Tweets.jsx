import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import { AppContext } from "./AppContext";
import SubmitTweet from "./SubmitTweet"
import Tweet from './Tweet';
import {useProtectedContext} from "./Protected"

const Tweets = () => {
    const {deleteTweet, updateTweet, tweets, edit, setEdit} = useContext(AppContext)
    

    // if (!isLogged) {
    //   return <p>No logueado</p>
    // }

    return ( 
    <div className="Tweets">
        <div>
        {
          tweets.map((tweet, i) => {
            return (
              <div id={tweet.id} key={i}>
                {tweet.image && <img width="100" height="100" src={tweet.image} alt="profile picture" />}
                <p>User: {tweet.user}</p>
                {edit ? <Tweet tweet={tweet}/> : <p>{tweet.message}</p> }
                <p>Likes: {tweet.likes}</p>
                <button onClick={() => setEdit(!edit)}>Actualizar tweet</button>
                <button onClick={() => deleteTweet(tweet.id)}>Eliminar tweet</button>
                <button onClick={() => updateTweet(tweet)}>Me gusta</button>
                <hr />
                <Link to="/">Volver al Home</Link>
              </div>
              
            )
          })
        }
        </div>
        <SubmitTweet/>
    </div>

     );
}
 
export default Tweets;