import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [listItem, setListItem] = useState([]);

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick() {
    setListItem((prev) => {
      return [...prev, item];
    });

    //clear input
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button>
          <span onClick={handleClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {listItem.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
