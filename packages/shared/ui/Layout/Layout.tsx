import React, { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>{children}</>
  );
};

export default Layout;
