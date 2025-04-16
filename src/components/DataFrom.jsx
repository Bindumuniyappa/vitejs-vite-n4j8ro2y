import React from 'react';
import { useNavigate } from 'react-router-dom';

const DataFrom = () => {
  const navigate = useNavigate();
  const users = [
    { id: '1', name: 'Alice', age: 25 },
    { id: '2', name: 'Bob', age: 30 },
    { id: '3', name: 'Charlie', age: 28 },
  ];

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };
  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <div onClick={() => handleClick(user.id)}>{user.name}</div>
        </div>
      ))}
    </>
  );
};

export default DataFrom;
