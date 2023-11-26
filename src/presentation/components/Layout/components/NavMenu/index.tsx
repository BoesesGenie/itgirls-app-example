import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../../../../application/router/routes';

const NavMenu: FC = () => (
  <nav>
    <Link to={ROUTES.home}>Домой</Link>
    <Link to={ROUTES.cards}>Карточки слов</Link>
    <Link to={ROUTES.manageCards}>Управление карточками слов</Link>
  </nav>
);

export { NavMenu };
