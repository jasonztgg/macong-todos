import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onDelete, onClick, completed, text }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none',
    }}
  >
    <span onClick={onClick}>{text}</span>
    <button onClick={onDelete}>Delete</button>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Todo;
