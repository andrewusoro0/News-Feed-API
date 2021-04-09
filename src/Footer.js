import React, {useState} from "react";
import firebase from "./firebase/Config";


import "./Footer.css";

const Footer = () => {

    let [comments, setComments] = useState([]);

  firebase
    .firestore()
    .collection("comments")
    .onSnapshot(
      (snapshot) => {
        setComments(snapshot.docs);
        console.log(comments);
      },

      (err) => {
        console.trace(err);
      }
    );

  const uploadComment = (event) => {
    let val = event.target.parentElement.parentElement.querySelector("textarea")
      .value;
    const val2 = val;
    event.target.parentElement.parentElement.querySelector("textarea").value =
      "";
    firebase
      .firestore()
      .collection("comments")
      .add({
        commentBody: val2,
        timeStamp: Date.now(),
      })
      .then((r) => {
        console.log(r);
      })
      .catch((e) => console.trace(e));
  };

 

  return (
    <div className="cards-footer">
      <article className="card-footer">
        <header className='head-comment'>
          <h2>Comment Section</h2>
        </header>
        <form>
        <textarea
          id="w3review"
          name="w3review"
          rows="4"
          cols="50"
          maxlength="50"
          className="cardFooter"
          required> 
          </textarea>
        </form>

        <div className="content-footer">
          <button
            onClick={(event) => uploadComment(event)}
            className="commentbtn"
          >
            Success
          </button>
          <p className="readFooter"> Read and Comment on daily news </p>
        </div>
        
      </article>
        <br />
          {comments.map((c) => {
            return (
              <div id="comment-holder">
                <p className= 'first-comment'> {c.data().commentBody} </p>
                <p> {new Date(c.data().timeStamp).toUTCString()} </p>
              </div>
            );
          })}
    </div>
  );
};

export default Footer;
