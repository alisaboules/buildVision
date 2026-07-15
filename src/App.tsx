import './App.css'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Panels } from './Panels/Panels'
import { Projects } from './Projects/Projects';
import { Dashboard } from './Dashboard/Dashboard';
import { AiAnalysis } from './AI Analysis/AiAnalysis';
import { ArInspection } from './Ar Inspection/ArInspection';
import { Reports } from './Reports/Reports';
import { Settings } from './Settings/Settings';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/arinspection" element={<ArInspection />} />
            <Route path="/aianalysis" element={<AiAnalysis />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />}/>
            
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

function Layout() {
  return (
    <div className="app-layout">
      <Panels />

      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export { App };
