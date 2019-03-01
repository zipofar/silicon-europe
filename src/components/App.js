import React from 'react';
import LegalEntity from './LegalEntity';
import Pharmacy from './Pharmacy';
import ContractTerms from './ContractTerms';
import Results from './Results';

const App = () => (
  <div className="container">
    <LegalEntity />
    <Pharmacy />
    <ContractTerms />
    <Results />
  </div>
);

export default App;
