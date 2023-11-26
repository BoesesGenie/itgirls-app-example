import React, { FC } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '../application/router';
import './assets/global.scss';

const App: FC = () => <RouterProvider router={router} />;

export { App };
