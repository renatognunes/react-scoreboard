import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';


class Player extends PureComponent {

  static propTypes = {
    changeScore: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    isHighScore: PropTypes.bool.isRequired
  }

  render() {
    // Destructuring Props
    const { 
      name,
      score,
      index,
      id,
      changeScore,
      removePlayer,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>
        <Counter 
          index={index}
          score={score}
          changeScore={changeScore}
        />
      </div>
    );
  };
};

export default Player;