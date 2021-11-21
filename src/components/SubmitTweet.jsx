import React, {useContext} from 'react'
import { AppContext } from "./AppContext";

const SubmitTweet = () => {
    const {handleChange, body, createTweet} = useContext(AppContext)

    return ( 
    <form className="SubmitTweet" onSubmit={createTweet}>
        <textarea onChange={handleChange} type="text" name="message" value={body.message} placeholder="Escribe tu tweet..."></textarea>
        <hr />
        <input onChange={handleChange} value={body.user} type="text" name="user"></input>
        <input type="submit" value="Send" />
    </form>
     );
}
 
export default SubmitTweet;