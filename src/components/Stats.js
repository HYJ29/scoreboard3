import React from 'react';

const Stats = ({players}) => {
  const totalPlayer = players.length;
  const totalScore = players.reduce((total, player)=>{
    return total + player.score;
  }, 0);

  return (
    <table className="stats">
  <tbody>
    <tr>
      <td>Players:</td>
      <td>{ totalPlayer }</td>
    </tr>
    <tr>
      <td>Total Points:</td>
      <td>{ totalScore }</td>
    </tr>
  </tbody>
</table>
  )
}

export default Stats;
