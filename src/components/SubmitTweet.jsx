import React, {useContext} from 'react'
import { AppContext } from "./AppContext";

const SubmitTweet = () => {
    const {progress, handleUpload, handleChange, body, createTweet} = useContext(AppContext)

    return ( 
    <form className="SubmitTweet" onSubmit={createTweet}>
        <textarea onChange={handleChange} type="text" name="message" value={body.message} placeholder="Escribe tu tweet..."></textarea>
        <hr />
        <input type="file" onChange={handleUpload} />
        <hr />
       { progress > 0 && <progress max="100" value={progress} />}
        <hr />
        <input onChange={handleChange} defaultValue={body.user} type="text" name="user"></input>
        <input type="submit" value="Send" />
    </form>
     );
}
 
export default SubmitTweet;