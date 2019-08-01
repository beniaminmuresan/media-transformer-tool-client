import React from 'react';

const List = ({list}) =>
  <div className="single-list" key={list.id}>
    <h4>{list.name}</h4>
    <p>{list.description}</p>
  </div>

export default List;
