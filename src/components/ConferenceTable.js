import React, {Component} from 'react';
import MiniTable from './MiniTable';

class ConferenceTable extends Component {

  render(){
    let east = [];
    let west = [];
    this.props.table.map((entry) => {
      if (entry.conference === 'East') {
        east.push(entry);
      }else if (entry.conference === 'West'){
        west.push(entry);
      }
    })
    return(
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
           
          <MiniTable table={east} title={'East'} index={2}/>
          <MiniTable table={west} title={'West'} index={17}/>

         
      </div>
    )
  }
}

export default ConferenceTable;

