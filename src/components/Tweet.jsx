import React, {useContext} from 'react'
import { AppContext } from "../context/AppContext";


const Tweet = ({tweet}) => {
    const {messageTweets, setMessageTweet, tweets, updateNewTweet} = useContext(AppContext)
    return ( 
        <div>
            <textarea onChange={((e) => setMessageTweet(e.target.value))} type="text" name="message" 
            value={messageTweets || tweet.message} 
            />
            <button onClick={() => updateNewTweet(tweet)}>Guardar cambios</button>
        </div>
     );
}
 
export default Tweet;