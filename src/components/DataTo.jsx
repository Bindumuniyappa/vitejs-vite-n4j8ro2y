import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DataTo = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const users = [
    { id: '1', name: 'Alice', age: 25 },
    { id: '2', name: 'Bob', age: 30 },
    { id: '3', name: 'Charlie', age: 28 },
  ];
  useEffect(() => {
    const findUser = users.find((user) => user.id === id);
    setUser(findUser);
  }, [id]);
  if (!user) return <h1>User not found</h1>;
  return (
    <>
      <h1>user details</h1>
      <div>{user.id}</div>
    </>
  );
};
export default DataTo;
