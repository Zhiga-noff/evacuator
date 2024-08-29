import React, { FC } from 'react';

interface IProps {
  children: React.ReactElement;
}

export const Layout: FC<IProps> = ({ children }) => {
  return <div>{children}</div>;
};
