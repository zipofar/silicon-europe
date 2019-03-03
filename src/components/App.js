import React from 'react';
import LegalEntity from './LegalEntity';
import Pharmacy from './Pharmacy';
import ContractTerms from './ContractTerms';
import Results from './Results';
import NavbarLeft from './NavbarLeft';
import MenuTop from './MenuTop';

const App = () => (
  <div>
    <NavbarLeft />
    <MenuTop />
    <div className="container-fluid">
      <div className="content">
        <LegalEntity />
        <Pharmacy />
        <ContractTerms />
        <Results />
      </div>
    </div>
  </div>
);

export default App;
