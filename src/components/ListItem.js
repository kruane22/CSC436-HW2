import React from "react";
import styled from "styled-components";
import {GrCheckbox} from 'react-icons/gr'
import {GrCheckboxSelected} from 'react-icons/gr'

function ListItem({ id, title, description, author, dateCreated, complete, dateComplete, handleCompletedBox}) {

  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{author}</p>
      <p>{dateCreated}</p>
      <button onClick={()=>handleCompletedBox(id)}>{complete?<GrCheckboxSelected /> : <GrCheckbox /> }</button>
      <p>{dateComplete}</p>
    </Wrapper>
  );
}

export default ListItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: solid black;
  margin: 15px;
`;
