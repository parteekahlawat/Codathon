import React, { useState } from "react";

const ClickableTile = ({ imagePath, category }) => {
  const [reason, setReason] = useState("");

  const handleClick = () => {
    // Handle click event here
    console.log("Tile clicked!");
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
        border: "1px solid black",
        cursor: "pointer",
        margin: "10px",
      }}
      onClick={handleClick}
    >
      <img
        src={imagePath}
        alt="Tile Image"
        style={{ width: "100%", height: "100%" }}
      />
      <span style={{ marginTop: "5px" }}>{category}</span>
      {category === "Others" && (
        <input
          type="textbox"
          placeholder="Enter Reasons"
          style={{ marginTop: "10px", width: "100%", marginLeft: "0px" }}
          value={reason}
          onChange={handleReasonChange}
        />
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2
        style={{
          display: "inline",
          textTransform: "uppercase",
          width: "100%",
          margin: "20px",
        }}
      >
        {" "}
        Reasons for your Current Mood{" "}
      </h2>
      <div style={{ display: "flex" }}>
        <ClickableTile
          imagePath="https://th.bing.com/th/id/R.6bc3df3b116ef15f71ebd96f330ed534?rik=VKA8omgqdTt92g&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2ffamily-clipart-transparent-background%2ffamily-clipart-transparent-background-6.png&ehk=%2fKMVyXGAksc0HmMS4YhMCzXaYXjTlx9DhBYSho6p9J4%3d&risl=&pid=ImgRaw&r=0"
          category="Family"
        />
        <ClickableTile
          imagePath="https://th.bing.com/th?id=OIP.ozB1ilEpcAtXDn3LgkJCwAHaFF&w=301&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          category="Friends"
        />
        <ClickableTile
          imagePath="https://th.bing.com/th?id=OIP.CyL21c24YlmvVJD4PMa9-wHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          category="Work"
        />
        <ClickableTile
          imagePath="https://th.bing.com/th?id=OIP.2nAjjnXqrswWag9ZdUP_ngHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
          category="Relationship"
        />
        <ClickableTile
          imagePath="https://th.bing.com/th/id/R.8e3f9d10ad10bafa50a514d1093ea179?rik=SwNh2Vj4gZjEiw&riu=http%3a%2f%2fclipartmag.com%2fimages%2fquestions-clipart-free-3.png&ehk=UT4NjwR%2b24tnoFirh8pkHrT5xYu%2fQ6tF8hiXGAB52ow%3d&risl=&pid=ImgRaw&r=0"
          category="Others"
        />
      </div>
    </div>
  );
};

export default App;
