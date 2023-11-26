import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';

const CardPage: FC = () => {
  const { wordId } = useParams();

  return <Layout>Word: {wordId}</Layout>;
};

export { CardPage };
