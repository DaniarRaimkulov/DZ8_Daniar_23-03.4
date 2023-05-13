import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './routes';

import Redirect from './Redirect';

const Router = () => (
    <Routes>
      {routes.map(({path, Component}, idx) => (
        <Route
        key={idx}
        path={path}
        element={<Component/>}
        />
        ))}
      <Route path='/' element={<Redirect/>} />
    </Routes>
);

export default Router;