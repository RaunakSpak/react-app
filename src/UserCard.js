import React from 'react';
import './App.css';

const UserCard = ({ name, age, avatar, bio }) => {
    return (
      <div className="user-card">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="user-avatar"
        />
        <h2 className="user-name">{name}</h2>
        <p>Age: {age}</p>
        <p className="user-bio">{bio}</p>
      </div>
    );
  };

export default UserCard;