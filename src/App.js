import React from 'react';
import './App.css';
import GettingStartedForm from './forms/GettingStartedForm/GettingStartedForm';
import CustomFieldsForm from './forms/CustomFieldsForm/CustomFieldsForm';

function App() {
  return (
    <div className="App">
      <GettingStartedForm />
      <CustomFieldsForm />
    </div>
  );
}

export default App;
