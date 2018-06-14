import React, { Component } from 'react';

const Project = function (props) {
  return (
    <div>
      <h3>{ props.title }</h3>
      <p>{ props.description }</p>
    </div>
  )
}

export default Project
