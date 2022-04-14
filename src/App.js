import React from 'react';
import Wrapper from './Wrapper';
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";


function App() {
  return (
    <Wrapper>
      <Counter />
      <InputSample />
      <UserList />
    </Wrapper>
  )
}

export default App;