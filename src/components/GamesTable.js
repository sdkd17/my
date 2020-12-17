import React, {Component} from 'react';

class GamesTable extends Component {
  
  render(){
    let options = <div> </div>
    if (this.props.selectedGame !== -1)
      options = 
        <div className="s-options">
          <button onClick={this.props.changeToTeamStats}> Team Stats </button>
          <button onClick={this.props.changeToPlayerStats}> Players Stats </button>
        </div>
    
    return(
      <div >
      <div className="games-table"> 
        {this.props.games.map((value, index) =>
          <button className="game-card" key={value.id} onClick={() => this.props.changeSelectedGame(index)}> 
            <div className="row"> 
              <div className="team">{value.home_team.abbreviation} </div> 
              <div className="score"> {value.home_team_score} </div> 
            </div>

            <div className="row">
               <div className="team"> {value.visitor_team.abbreviation} </div>
               <div className="score"> {value.visitor_team_score} </div> 
            </div>
          </button>
        )}
      </div>
      {options}
    </div>
    )
  }
}

export default GamesTable;