import React from 'react';

const Task = () => (
  <li clasNames="list-item">
    <input type="checkbox" className="list-item__checkbox" />
    Learn React
    <button className="list-item__delete-btn"></button>
  </li>
);

export default Task;
