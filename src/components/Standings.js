import React, {Component} from 'react';
import LeagueTable from './LeagueTable';
import ConferenceTable from './ConferenceTable';
import DivisionTable from './DivisionTable';

class Standings extends Component {
  constructor(props){
    super(props);
    this.state = { //1 -> league, 2-> conference, 3 -> division
      order: 1, 
    }
  }

  leagueOrder = () => {
    if (this.state.order !== 1) {
      this.setState({
        order:1
      })
    }
  }

  conferenceOrder = () => {
    if (this.state.order !== 2) {
      this.setState({
        order:2
      })
    }
  }

  divisionOrder = ()=> {
    if (this.state.order !== 3) {
      this.setState({
        order:3
      })
    }
  }

  render(){
    
    let l_table = this.props.table.sort((a,b) =>{ 
    if (b.lost === a.lost) {
      return b.wins > a.wins? 1:-1; 
    }else{
      return b.lost < a.lost? 1:-1
    } });

    let r_table;
    let cnameButton = ['active', '', ''];

    if (this.state.order === 1) { // Orden por victorias
      r_table = <LeagueTable table={l_table} />
      cnameButton = ['active','',''];
    }else if (this.state.order === 2){ // orden por conferencia
      
      r_table = <ConferenceTable table={l_table}/>
      cnameButton = ['','active',''];
    }else {
      r_table = <DivisionTable table={l_table}/>
      cnameButton = ['','','active'];
    }
    
  
    return(
      <div className='standings'>
        <div className='title'> Season year </div>
        <div className='s-options'> 
          <button className= {cnameButton[0]} onClick={this.leagueOrder}>League</button>
          <button className= {cnameButton[1]} onClick={this.conferenceOrder}>Conference</button>
          <button className= {cnameButton[2]} onClick={this.divisionOrder}>Division</button>
        </div>

        {r_table}
        

      </div>
    );
  }
}

export default Standings;
