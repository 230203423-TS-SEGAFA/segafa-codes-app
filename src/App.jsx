import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import WaterCleaningSteps from './components/WaterCleaningSteps';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <GlobalStyles />
      {!user ? (
        <>
          <LoginForm setUser={setUser} />
          <RegistrationForm setUser={setUser} />
        </>
      ) : (
        <Dashboard user={user}>
          <WaterCleaningSteps />
        </Dashboard>
      )}
    </div>
  );
}

export default App;

