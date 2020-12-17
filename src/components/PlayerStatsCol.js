import React, {Component, Fragment} from 'react';
import { PlayerStatsAux } from '../clases/PlayerStatsAux';

class PlayerStatsCol extends Component {
  render(){

    //const s = new PlayerStatsAux();
    //console.log(this.props.player_stats)
    return(
      <div className="player-stat-col" 
          key={this.props.col}>
        {this.props.player_stats.map((value, index) => {
          // console.log(this.props.player_stats)
          return(  
            <div  className={(index === 0)?"p-table-cell players-table-title":"p-table-cell players-table-value"}
                  key={value.id}> 
                  
                {(index === 0)? this.props.col.toString().toUpperCase(): value[this.props.col]} 
            </div>
          );
        })}

      </div>   
    )  
  }
}

export default PlayerStatsCol;