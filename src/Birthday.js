import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./css/birthday.css";

function Birthday({ people: initialPeople }) {
  const [people, setPeople] = useState([]);
  const [birthdayCount, setBirthdayCount] = useState(0);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1; // JavaScript months are 0-based
    const day = today.getDate();

    const birthdayPeople = initialPeople.filter((person) => {
      const birthMonth = new Date(person.birthday).getMonth() + 1;
      const birthDay = new Date(person.birthday).getDate();

      return birthMonth === month && birthDay === day;
    });

    setPeople(birthdayPeople);
    setBirthdayCount(birthdayPeople.length);
    console.log(birthdayPeople)
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
