
import React, { useState } from 'react';
import Player from './Player';
import PlayersData from './Players';
import { Container } from 'react-bootstrap';

const PlayersList = () => {
  return (
    <Container>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {PlayersData.map((element, index) => (
          <Player key={index} {...element} />
        ))}
      </div>
    </Container>
  );
};

export default PlayersList;


