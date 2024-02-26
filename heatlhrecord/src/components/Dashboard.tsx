import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ onAddProfile }: { onAddProfile: () => void }) {
  const [profiles, setProfiles] = useState<any[]>([]);

  const handleAddProfile = () => {
    onAddProfile();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link to={`/profile/${profile.id}`}>{profile.name}</Link>
          </li>
        ))}
      </ul>
      <a href='../Profile/Profile'>
      <button onClick={handleAddProfile}>Add Profile</button>
      </a>
    </div>
  );
}

export default Dashboard;