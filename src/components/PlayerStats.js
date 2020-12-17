import React, {Component, Fragment} from 'react';
import { PlayerStatsAux } from '../clases/PlayerStatsAux';
import PlayerStatsCol from './PlayerStatsCol';

class PlayerStats extends Component {
  render(){

      let s = new PlayerStatsAux(); //Titulos de las columnas
      let home_player_stats_table = [];
      let visitor_player_stats_table = [];
      home_player_stats_table.push(s);
      visitor_player_stats_table.push(s);
      this.props.home_stats.forEach(player_stat => {
        home_player_stats_table.push(new PlayerStatsAux(player_stat));
      });
      this.props.visitor_stats.forEach(player_stat => {
        visitor_player_stats_table.push(new PlayerStatsAux(player_stat));
      });
      
    return(
      <div className="home-team-player-stats">
        {/* Home team */}
        <div className="team-title"> {this.props.home_stats[0].team.name} </div>
        <div className="p-table s-table--18cols">
          {Object.keys(s).map((key, index) => {
            return(
              <PlayerStatsCol player_stats={home_player_stats_table} col={key} key={key} />
            )
          })}
        </div>

        {/* Visitor team */}
        <div className="team-title"> {this.props.visitor_stats[0].team.name} </div>
        <div className="p-table s-table--18cols">
          {Object.keys(s).map((key, index) => {
            return(
              <PlayerStatsCol player_stats={visitor_player_stats_table} col={key} key={key} />
            )
          })}
        </div>

      </div>
    )
  }
}

export default PlayerStats;