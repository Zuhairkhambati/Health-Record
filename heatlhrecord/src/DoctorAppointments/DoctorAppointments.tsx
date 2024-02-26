import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function DoctorAppointments({ onAddAppointment, onEditAppointment, onDeleteAppointment }: any) {
  const { id } = useParams<{ id: string }>();
  const [appointments, setAppointments] = useState<any[]>([]);

  const handleAddAppointment = () => {
    onAddAppointment(id);
  };

  const handleEditAppointment = (index: number, appointment: any) => {
    onEditAppointment(id, index, appointment);
  };

  const handleDeleteAppointment = (index: number) => {
    onDeleteAppointment(id, index);
  };

  return (
    <div>
      <h1>Doctor Appointments</h1>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <label>
              Date:
              <input type="date" value={appointment.date} onChange={(e) => handleEditAppointment(index, { ...appointment, date: e.target.value })} />
            </label>
            <label>
              Time:
              <input type="time" value={appointment.time} onChange={(e) => handleEditAppointment(index, { ...appointment, time: e.target.value })} />
            </label>
            <label>
              Doctor:
              <input type="text" value={appointment.doctor} onChange={(e) => handleEditAppointment(index, { ...appointment, doctor: e.target.value })} />
            </label>
            <button onClick={() => handleDeleteAppointment(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddAppointment}>Add Appointment</button>
    </div>
  );
}

export default DoctorAppointments;