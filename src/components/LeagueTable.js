import React, {Component, Fragment} from 'react';

class LeagueTable extends Component {

  render() {
    return (
      <div className='s-table s-table--4cols'>
          <div style={{order:1}} className='s-table-cell'>
            <strong  > Team </strong>
          </div >  
          <div style={{order:1}} className='s-table-cell'>
            <strong > GP </strong>
          </div>   
          <div style={{order:1}} className='s-table-cell'> 
            <strong > W </strong>
          </div>
         
          <div style={{order:1}} className='s-table-cell'>  
            <strong  > L </strong>
          </div>
           
          { this.props.table.map((entry, index) => 
            <Fragment key={index}>
              <div style={{order:index+1}} className='s-table-cell'>
                <span  > {entry.abbreviation} </span>
              </div >  
              <div style={{order:index+1}} className='s-table-cell'>
                <span > {entry.g_played} </span>
              </div>   
              <div style={{order:index+1}} className='s-table-cell'> 
                <span > {entry.wins} </span>
              </div>
            
              <div style={{order:index+1}} className='s-table-cell'>  
                <span  > {entry.lost} </span>
              </div>

            </Fragment> 
          )}
        </div>
    )
  }
}

export default LeagueTable;