import React from 'react';

export const TodoListItem = (props) => {
    return (
       <li key={props.id}>{props["title"]}</li>
    )
};
