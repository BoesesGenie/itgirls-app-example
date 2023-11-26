import React, { FC, ReactNode } from 'react';
import { NavMenu } from './components/NavMenu';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div>
    <NavMenu />
    {children}
  </div>
);

export { Layout };
