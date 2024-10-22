import React from 'react';
import styled from 'styled-components';

const StepContainer = styled.div`
  background-color: #b3e5fc;
  padding: 20px;
  border-radius: 10px;
  margin: 20px;
`;

const Step = styled.div`
  margin: 10px 0;
`;

function WaterCleaningSteps() {
  const steps = [
    'Step 1: Gather water from the source.',
    'Step 2: Use a cloth to filter large particles.',
    'Step 3: Boil the water for at least 10 minutes.',
    'Step 4: Let the water cool down before drinking.',
  ];

  return (
    <StepContainer>
      <h2>How to Clean Water</h2>
      {steps.map((step, index) => (
        <Step key={index}>{step}</Step>
      ))}
    </StepContainer>
  );
}

export default WaterCleaningSteps;
