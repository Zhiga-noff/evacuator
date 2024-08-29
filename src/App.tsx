import React from 'react';
import { Route, Routes } from 'react-router';
import { Layout } from './components/layout';
import { CreatePage, MainPage } from './pages';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/create-ad'} element={<CreatePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
