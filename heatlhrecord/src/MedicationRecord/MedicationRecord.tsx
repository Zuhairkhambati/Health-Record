import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function MedicationRecord({ onAddMedication, onEditMedication, onDeleteMedication }: any) {
  const { id } = useParams<{ id: string }>();
  const [medications, setMedications] = useState<any[]>([]);

  const handleAddMedication = () => {
    onAddMedication(id);
  };

  const handleEditMedication = (index: number, medication: any) => {
    onEditMedication(id, index, medication);
  };

  const handleDeleteMedication = (index: number) => {
    onDeleteMedication(id, index);
  };

  return (
    <div>
      <h1>Medication Records</h1>
      <ul>
        {medications.map((medication, index) => (
          <li key={index}>
            <label>
              Start Day:
              <input type="date" value={medication.startDay} onChange={(e) => handleEditMedication(index, { ...medication, startDay: e.target.value })} />
            </label>
            <label>
              Number of Medicines:
              <input type="number" value={medication.numberOfMedicines} onChange={(e) => handleEditMedication(index, { ...medication, numberOfMedicines: Number(e.target.value) })} />
            </label>
            <label>
              Frequency:
              <input type="text" value={medication.frequency} onChange={(e) => handleEditMedication(index, { ...medication, frequency: e.target.value })} />
            </label>
            <button onClick={() => handleDeleteMedication(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddMedication}>Add Medication</button>
    </div>
  );
}

export default MedicationRecord;