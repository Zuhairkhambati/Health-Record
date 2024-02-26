import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Profile({ onEditProfile, onDeleteProfile }: any) {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [medicalProblems, setMedicalProblems] = useState<string[]>([]);

  const handleSave = () => {
    // Save profile
    onEditProfile(id, { name, age, medicalProblems });
  };

  const handleDelete = () => {
    // Delete profile
    onDeleteProfile(id);
  };

  return (
    <div className='profile'>
      <h1>Profile</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
      </label>
      <label>
        Medical Problems:
        <input type="text" value={medicalProblems.join(', ')} onChange={(e) => setMedicalProblems(e.target.value.split(',').map((s) => s.trim()))} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Profile;