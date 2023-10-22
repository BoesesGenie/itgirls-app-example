import React, { FC, ReactNode } from 'react';
import './styles.scss';

interface ButtonProps {
  onClick(): void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onClick();
  };

  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export { Button };
