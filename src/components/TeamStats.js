import React, {Component, Fragment} from 'react';

import {Stats} from '../clases/Stats';
class TeamStats extends Component {

  render(){
    

    return (
      
      <div className="full-game-stats s-table s-table--3cols">
         
        <div className="s-table-cell table-title" style={{order:1}} > <strong> {this.props.game.visitor_team.abbreviation} </strong> </div>
        <div className="s-table-cell table-title center" style={{order:1 }} > <strong> {this.props.game.date.slice(0,10)} </strong> </div>
        <div className="s-table-cell table-title right" style={{order:1}} > <strong> {this.props.game.home_team.abbreviation} </strong> </div>
        {Object.keys(this.props.home_stats).map((entry, index) => {
          if(entry.substring(0,1) !== 'f'){
            
            return (
            <Fragment key={index}>
              <div className="s-table-cell" style={{order:index+1}} > {this.props.visitor_stats[entry]} </div>
              <div className="s-table-cell center" style={{order:index+1}} > <strong> {entry.toUpperCase()} </strong> </div>
              <div className="s-table-cell right" style={{order:index+1}} > {this.props.home_stats[entry]} </div>
            </Fragment>
            )
          }else{
            return (
              <Fragment> </Fragment>
            );
          }
        }
          
        )}
     </div>
    )
  }
}

export default TeamStats;