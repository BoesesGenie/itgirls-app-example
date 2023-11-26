import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { CardsPage } from '../../presentation/pages/CardsPage';
import { ManageCardsPage } from '../../presentation/pages/ManageCardsPage';
import { HomePage } from '../../presentation/pages/HomePage';
import { CardPage } from '../../presentation/pages/CardPage';
import ROUTES from './routes';

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <HomePage />,
  },
  {
    path: `${ROUTES.card}/:wordId`,
    element: <CardPage />,
  },
  {
    path: ROUTES.cards,
    element: <CardsPage />,
  },
  {
    path: ROUTES.manageCards,
    element: <ManageCardsPage />,
  },
]);

export default router;
