import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Switch} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import Dashboard from './components/Dashboard';
import Profile from './Profile/Profile';
import MedicationRecord from './MedicationRecord/MedicationRecord';
import GoogleCalendar from './GoogleCalendar/GoogleCalendar';
import DoctorAppointments from './DoctorAppointments/DoctorAppointments';
import "./App.css"
function App() {
  const [profiles, setProfiles] = useState<any[]>([]);

  const handleAddProfile = () => {
    const id = profiles.length + 1;
    setProfiles([...profiles, { id, name: '', age: 0, medicalProblems: [], medications: [], appointments: [] }]);
  };

  const handleEditProfile = (id: string, profile: any) => {
    setProfiles(profiles.map((p) => (p.id === Number(id) ? profile : p)));
  };

  const handleDeleteProfile = (id: string) => {
    setProfiles(profiles.filter((p) => p.id !== Number(id)));
  };

  const handleAddMedication = (id: string) => {
    setProfiles(
      profiles.map((p) =>
        p.id === Number(id)
          ? { ...p, medications: [...p.medications, { startDay: new Date().toISOString().split('T')[0], numberOfMedicines: 0, frequency: '' }] }
          : p
      )
    );
  };

  const handleEditMedication = (id: string, index: number, medication: { [key: string]: any }) => {
    setProfiles(
      profiles.map((p) =>
        p.id === Number(id)
          ? { ...p, medications: p.medications.map((m: any, i: number) => (i === index ? { ...m, ...medication } : m)) }
          : p
      )
    );
  };

  const handleDeleteMedication = (id: string, index: number) => {
    setProfiles(
      profiles.map((p) =>
        p.id === Number(id)
          ? { ...p, medications: p.medications.filter((m: any, i: number) => i !== index) }
          : p
      )
    );
  };

  const handleAddAppointment = (id: string) => {
    setProfiles(
      profiles.map((p) =>
        p.id === Number(id)
          ? { ...p, appointments: [...p.appointments, { date: new Date().toISOString().split('T')[0], time: '00:00', doctor: '' }] }
          : p
      )
    );
  };

  const handleEditAppointment = (id: string, index: number, appointment: any) => {
    const { date, time, doctor } = appointment; // extract the properties from the appointment object
    setProfiles(
      profiles.map((p) =>
        p.id === Number(id)
          ? { ...p, appointments: p.appointments.map((a: any, i: number) => (i === index ? { ...a, date, time, doctor } : a)) }
          : p
      )
    );
  };

  const handleDeleteAppointment = (id: string, index: number) => {
    setProfiles(
      profiles.map((p) =>
        p.id === Number(id)
          ? { ...p, appointments: p.appointments.filter((a: any, i: number) => i !== index) }
          : p
      )
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage onLogin={() => {}} />
        </Route>
        <Route path="/dashboard">
          <Dashboard onAddProfile={handleAddProfile} />
        </Route>
        <Route path="/profile/:id">
          <Profile
            onEditProfile={handleEditProfile}
            onDeleteProfile={handleDeleteProfile}
            medications={profiles}
            onAddMedication={handleAddMedication}
            onEditMedication={handleEditMedication}
            onDeleteMedication={handleDeleteMedication}
            appointments={profiles}
            onAddAppointment={handleAddAppointment}
            onEditAppointment={handleEditAppointment}
            onDeleteAppointment={handleDeleteAppointment}
          />
        </Route>
        <Route path="/medication-record/:id">
          <MedicationRecord medications={profiles} onEditMedication={handleEditMedication} onDeleteMedication={handleDeleteMedication} />
        </Route>
        <Route path="/google-calendar">
          <GoogleCalendar />
        </Route>
        <Route path="/doctor-appointments/:id">
          <DoctorAppointments appointments={profiles} onEditAppointment={handleEditAppointment} onDeleteAppointment={handleDeleteAppointment} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;