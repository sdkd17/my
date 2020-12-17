import React, {Component} from 'react';
import GamesTable from './GamesTable';
import TeamStats from './TeamStats';
import PlayerStats from './PlayerStats';
import {Stats} from '../clases/Stats';
import games from '../data/games.json';
import stats from '../data/stats.json'

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGame: -1,
      teamStats: true,
      
    }
  }
  
  changeSelectedGame = (index) => {
    if (index === this.state.selectedGame){
      this.setState({
        selectedGame: -1,
        teamStats: true,
      })
    } else 
      this.setState({
        selectedGame: index,
        teamStats: true,
      })
    
  }

  changeToTeamStats = () => {
    if (!this.state.teamStats) 
      this.setState({
        teamStats: true,
      })
  }

  changeToPlayerStats = () => {
    if (this.state.teamStats) 
      this.setState({
        teamStats: false,
      })
  }


  render(){
    
    const now = this.props.date;
    const today = new Date (now.getFullYear(), now.getMonth(), now.getDate(),-3,0,0);
    
    let d_games = [];
    games.forEach(element =>{
      let filtered = element.data.filter(game => game.date === today.toISOString());
      d_games = d_games.concat(filtered);
    })

    let game = <div> </div>;
    if (this.state.selectedGame !== -1) {
      let selectedG = d_games[this.state.selectedGame];
      
      if (this.state.teamStats){
        
        let home_stats = new Stats();
        let visitor_stats = new Stats();
        // let visitor_stats = home_stats; Mantiene referencias a memoria, modif uno modifica al otro. Y no es lo que quiero
        
        
        stats.forEach(element => {
          if (element.game.id === selectedG.id){
            if (element.team.id === selectedG.home_team.id) {
              // players.push(element.player.last_name);
              Object.keys(home_stats).forEach(key => {
                home_stats[key] += element[key];
              })
            }else if (element.team.id === selectedG.visitor_team.id) {
              // players.push(element.player.last_name);
              Object.keys(visitor_stats).forEach(key => {
                visitor_stats[key] += element[key];
              })
            }
          }
        });
        
        home_stats.makeTotals();
        visitor_stats.makeTotals();

        game =  <TeamStats  game={d_games[this.state.selectedGame]} 
                              visitor_stats={visitor_stats}
                              home_stats={home_stats} 
                />

      }else {
        let home_player_stats = []
        let visitor_player_stats = []
        stats.forEach(element => {
          if (element.game.id === selectedG.id){
            if (element.team.id === selectedG.home_team.id) {
              home_player_stats.push(element);
            }else if(element.team.id === selectedG.visitor_team.id){
              visitor_player_stats.push(element)
            }  
          }
        })
        game = <PlayerStats game={d_games[this.state.selectedGame]}
                            visitor_stats={visitor_player_stats}
                            home_stats={home_player_stats} />
      }
    }

    return(
      <div className='games'>
        <div className='title'>Latest Games</div>
          <GamesTable games={d_games} 
                      selectedGame={this.state.selectedGame}
                      changeSelectedGame={this.changeSelectedGame} 
                      changeToTeamStats={this.changeToTeamStats}
                      changeToPlayerStats={this.changeToPlayerStats}
          />
          
          {game}
        </div>
    );
  }
}

export default Games;
