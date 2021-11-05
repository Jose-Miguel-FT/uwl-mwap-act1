import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import MedicalTreatment from './components/MedicalTreatment';

export default function App() {
  const medicalTreatment = [
    {
      treatId: 'Cream',
      treatCourseId: '15',
      type: 'no idea',
      category: 'oncology',
      name: 'something',
      startDate: new Date(2020, 7, 15),
    },
    {
      treatId: 'Cream',
      treatCourseId: '15',
      type: 'no idea',
      category: 'oncology',
      name: 'something',
      startDate: new Date(2020, 7, 15),
    },
  ];

  return (
    <div>
      <h1>LHM</h1>
      <div>
        <MedicalTreatment
          treatId="Cream"
          treatCourseId="15"
          type="no idea"
          category="oncology"
          name="somwething"
          startDate={medicalTreatment[0].startDate}
        />
      </div>
    </div>
  );
}
