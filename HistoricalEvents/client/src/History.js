import React from "react";
import styled from 'styled-components';

var StyledDiv = styled.div`display: flex;  flex-direction: column; justify-content: flex-start; outline: 5px dotted;`;

var History = (props) => {
  if (!props.description) {
    return null;
  }
  return (
    <div>
      {props.description.map((description, key) => {
        return (
          <StyledDiv key={key}>
            <h4 style={{color: 'green'}}> date: {description.date}</h4>
            <h4 style={{color: 'orange'}}> description: {description.description}</h4>
            <h4 style={{color: 'blue'}}> lang: {description.lang}</h4>
            <h4 style={{color: 'magenta'}}> category1: {description.category1}</h4>
            <h4 style={{color: 'red'}}> category2: {description.category2}</h4>
            <button type="button">Click Me!</button>
          </StyledDiv>
        );
      })}
    </div>
  );
};

export default History;
