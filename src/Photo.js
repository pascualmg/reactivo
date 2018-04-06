import React from 'react';

export default class Photo extends React.Component{
 render = (name,i) => <span key={i} className={"Photo"}>cosa{name}</span>
}
