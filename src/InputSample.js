import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nick: '',
    password: '',
  })
  const nameInput = useRef();

  const { name, nick, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const onReset = () => {
     setInputs({
       name: '',
       nick : '',
       password: '',
     })

     nameInput.current.focus();
  }


  return (
    <div>
      <button onClick={onReset}>초기화</button>
      <input name="name" placeholder='이름' onChange={onChange} value={name}  ref={nameInput} />
      <input name="nick" placeholder='닉네임' onChange={onChange} value={nick} />
      <input name="password" placeholder='패스워드' onChange={onChange} value={password} />
      <div>
        <b>값: </b>
        {name} ({nick}) {password}
      </div>
    </div>
  )
}

export default InputSample;