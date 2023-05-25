import React from "react";
import ReactDOM from "react-dom";

function Feedback() {
  return (
    <div style={{ textAlign: "left", position: "absolute", top: "300px" }}>
      <div>
        <br />
        <br />
        <br />
        It is said that sharing makes your heart less heavy and venting helps to
        control extreme feelings. Just try it out, we are always there to
        listen. <br />
        <input type="textbox" style={{ marginTop: "10px" }} />
      </div>
      <div>
        <br />
        As your mood has been known to be extreme, we would be grateful if you
        provide us with some remedies for other users on how to fix it. <br />
        <input type="textbox" style={{ marginTop: "10px" }} />
      </div>
      <div>
        <br />
        <br />
        As per our studies of employ's behaviour so far, we have figured out a
        few common practices that mostly help.
        <ul>
          <li>Try talking to your closed ones</li>
          <li>Try talking to your closed ones</li>
          <li>Try talking to your closed ones</li>
          <li>Try talking to your closed ones</li>
        </ul>
      </div>
    </div>
  );
}

export default Feedback;
