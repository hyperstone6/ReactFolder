import React, { useState } from "react";

function Lmao() {
  const [newText, setNewText] = useState("");
  const handleNewText = (event) => {
    setNewText(event.target.value);
  };

  function handleClick() {
    if (newText === "") {
      return alert("Text field cannot be empty");
    } else if (newText.length > 20) {
      return alert(
        "Text is too long. You are allowed a maximum of 20 characters."
      );
    }
    return alert(newText.toUpperCase());
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="LMAO" onChange={handleNewText} />
      <button style={{ display: "block" }} onClick={handleClick}>
        Submit the lolzy text lol
      </button>
    </form>
  );
}

export default Lmao;
