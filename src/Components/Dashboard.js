import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

function Dashboard({ user, children }) {
  return (
    <Container>
      <h1>Welcome, {user.name || user.email}</h1>
      {children}
    </Container>
  );
}

export default Dashboard;
