import React, { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Button } from '../../ui-kit/Button';

const CardsPage: FC = () => {
  const [, setSearchParams] = useSearchParams();
  const onClickHandler = () => {
    setSearchParams({
      test1: '1',
      test2: '2',
      test3: '3',
    });
  };

  return (
    <Layout>
      <Button onClick={onClickHandler}>Изменить путь</Button>
    </Layout>
  );
};

export { CardsPage };
