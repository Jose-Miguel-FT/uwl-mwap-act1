import React from 'react';
import ReactDOM from 'react-dom';

export default function MedicalTreatment(props) {
  return (
    <div>
      {props.treatId},
      {props.treatCourseId},
      {props.type},
      {props.category},
      {props.name},
      {props.startDate}
    </div>
  );
}
