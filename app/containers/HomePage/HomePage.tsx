import React from 'react';
import Typography from '@material-ui/core/Typography';
import FillParent from 'components/FillParent';

const HomePage: React.FC = () => {
  return (
    <FillParent>
      <article>
        <header>
          <Typography variant="h3" gutterBottom>
            React + TypeScript + Material UI
          </Typography>
          <Typography variant="subtitle1">
            Reliable, production grade foundation for your next React project,
            focusing on performance and community best practices.
          </Typography>
        </header>
      </article>
    </FillParent>
  );
};

export default HomePage;
