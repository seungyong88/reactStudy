import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nick: '',
    password: '',
  })

  const {name, nick, password} = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name] : value,
    });
  }

  return (
    <div>
      <input name="name" placeholder='이름' onChange={onChange} value={name} />
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