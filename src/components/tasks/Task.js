import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Task = ({ title, todo, notes }) => {
  return (
    <Fragment>
      <div className='card'>
        <h1 className='large'>{title}</h1>
        {todo.length > 0 && (
          <ul>
            {todo.map(todo => (
              <li
                className='card bg-light'
                style={{ fontFamily: "Roboto", fontSize: "1.1rem" }}
              >
                <input type='checkbox' /> {todo}
              </li>
            ))}
          </ul>
        )}
        {notes !== "" && <h3 className='my-1 m-1'>{notes}</h3>}
      </div>
    </Fragment>
  );
  // Will add functionality for adding more todos and notes for a specific taskItem
};

Task.propTypes = {
  title: PropTypes.object.isRequired,
  todo: PropTypes.array.isRequired,
  notes: PropTypes.string.isRequired
};

export default Task;
