import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: #ffcc80;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  background-color: #ff5722;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e64a19;
  }
`;

function RegistrationForm({ setUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ name, email });
  };

  return (
    <FormContainer>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </form>
    </FormContainer>
  );
}

export default RegistrationForm;
