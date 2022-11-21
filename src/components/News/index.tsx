import React from 'react';

import { Container } from './styles';

const News: React.FC = () => {
  return (
    <Container>
        <div>
          <span>Futebol</span>
          <strong>Flamengo maior time Brasileiro</strong>
          <span>54.6K Tweets</span>
        </div>
        <div>
          <span>Tecnologia</span>
          <strong>Musk compra o Twitter</strong>
          <span>57.8K Tweets</span>
        </div>
        <div>
          <span>Política</span>
          <strong>Bolsominios fazem greve</strong>
          <span>10K Tweets</span>
        </div>
    </Container>
  );
}

export default News;