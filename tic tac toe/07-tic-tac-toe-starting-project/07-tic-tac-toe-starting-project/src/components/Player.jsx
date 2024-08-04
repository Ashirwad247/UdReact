import React, { useState } from "react";

const Player = ({ initialName, symbol, isActive }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  const handleEditClick = () => {
    setIsEditing((ed) => !ed);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value)

  };

  let editableplayerName = <span className="player-name">{playerName}</span>;
  //   let btnCaption = 'Edit'
  if (isEditing === true) {
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    // btnCaption="Save"
  }

  return (
    <li className={isActive?'active':undefined}>
      <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

export default Player;
