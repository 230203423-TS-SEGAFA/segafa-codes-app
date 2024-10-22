import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import WaterCleaningSteps from './components/WaterCleaningSteps';
import GlobalStyles from './styles/GlobelStyles';

function App() {
  const [isRegistered, setIsRegistered] = useState(true);

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <div>
      <GlobalStyles />
      {isRegistered ? (
        <LoginForm toggleForm={toggleForm} />
      ) : (
        <RegistrationForm toggleForm={toggleForm} />
      )}
    </div>
  );
}

export default App;
