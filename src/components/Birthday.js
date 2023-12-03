import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../css/birthday.css";

function Birthday({ people: initialPeople }) {
  const [people, setPeople] = useState([]);
  const [birthdayCount, setBirthdayCount] = useState(0);

  useEffect(() => {
    setPeople(initialPeople);
    setBirthdayCount(initialPeople.length);
  }, [initialPeople]);

  const clearAll = () => {
    setPeople([]);
    setBirthdayCount(0);
  };

  return (
    <div className="birthday">
      <p className="birthday-count-display">{birthdayCount} birthdays today</p>
      {people.map((person) => (
        <Card
          key={person.id}
          image={person.image}
          name={person.name}
          age={person.age}
        />
      ))}
      <button className="clear-all-button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

export default Birthday;
