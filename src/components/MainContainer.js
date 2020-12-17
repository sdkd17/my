import React, { Component } from 'react';
import Standings from './Standings';
import Leaders from './Leaders';
import Games from './Games';
import data from '../data/games.json';
import teams from '../data/teams.json';

class MainContainer extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         games_played: data,
    //         all_teams: teams,
            
    //     }
    // }
    
    // componentDidMount() {
    //     fetch('https://www.balldontlie.io/api/v1/games?seasons[]=2019')
    //     .then(res => res.json())
    //     .then(
    //         (result)=> {
    //             this.setState({
    //                 games_played: games,
    //             })
    //         })
        
    //         this.setState({
    //             games_played: data,
    //             all_teams: teams
    //         })

    // }

    // componentDidUpdate(){
        
    // }

    render(){
        
        let l_table = [];
        // let t = this.state.all_teams;
        // let g = this.state.games_played;
        if (l_table.length === 0){
            for(let i=1; i<=30;i++){
                l_table[i] = { 'abbreviation': teams[i-1].abbreviation, 
                                'g_played':0,
                                'wins':0,
                                'lost':0,
                                'cwins':0,
                                'clost': 0,
                                'conference' : teams[i-1].conference,
                                'division' : teams[i-1].division,
                            };
            }

            data.forEach(element => {
                element.data.forEach(game => {
                    if (game.status === 'Final' && !game.postseason){
                        l_table[game.home_team.id].g_played++;
                        l_table[game.visitor_team.id].g_played++;
                        if(game.home_team_score > game.visitor_team_score) {
                            //Victorias y derrotas misma conferencia
                            if (game.home_team.conference === game.visitor_team.conference){
                                l_table[game.home_team.id].cwins++;
                                l_table[game.visitor_team.id].clost++;
                            }
                            //Victorias y derrotas global
                            l_table[game.home_team.id].wins++;
                            l_table[game.visitor_team.id].lost++;
                        }else{
                            //Victorias y derrotas misma conferencia
                            if (game.home_team.conference === game.visitor_team.conference){
                                l_table[game.home_team.id].cwins++;
                                l_table[game.visitor_team.id].clost++;
                            }
                            //Victorias y derrotas global
                            l_table[game.visitor_team.id].wins++;
                            l_table[game.home_team.id].lost++;
                        }
                    }
                })
            });
        }

        return(
            <div className='main-container'> 
                <div className='general-stats'>
                    <Standings table={l_table}/>
                    <Leaders />
                </div>
                <div className='games-container'>
                    <Games games={data} date={new Date(2019,11,25,0,0,0)}/>
                </div> 
            </div>
        
        );
    }   
    
}

export default MainContainer;
