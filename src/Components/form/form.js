import React from "react";
import { useState } from "react";
import Interactive from "../../pages/interactive/playtime";
import "../form/form";

function Form() {
  const [players, setPlayers] = useState([{ name: "Nina", animal: "Elsa" }]);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const gameInformation = players.map(({ name, animalName }) => (
    <Interactive name={name} animalName={animalName} />
  ));

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={gameInformation.name}
            placeholder="name"
            onChange={(e) => setPlayers(e.target.value)}
          />
        </label>

        {!isPending && <button className="btn">Save</button>}
        {isPending && (
          <button type="submit" value="Submit">
            Saving
          </button>
        )}
      </form>
      {gameInformation.name}
      {console.log(gameInformation[0].props.name)}
    </div>
  );
}
export default Form;
