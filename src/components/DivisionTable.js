import React, {Component} from 'react';
import MiniTable from './MiniTable';

class DivisionTable extends Component {

  render(){
    let atlantic = [];
    let central = [];
    let southeast = [];
    let northwest = [];
    let pacific = [];
    let southwest = [];
    this.props.table.map((entry) => {
      switch(entry.division){
        case 'Atlantic' :
          atlantic.push(entry);
          break;
        case 'Central' :
          central.push(entry);
          break; 
        case 'Southeast' :
          southeast.push(entry);
          break;
        case 'Northwest' :
          northwest.push(entry);
          break;
        case 'Pacific'  :
          pacific.push(entry);
          break;
        case 'Southwest':
          southwest.push(entry);
          break;
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

          <MiniTable table={atlantic} title={'Atlantic'} index={3} />
          <MiniTable table={central} title={'Cental'} index={9} />
          <MiniTable table={southeast} title={'Southwest'} index={15} />
          <MiniTable table={northwest} title={'Northwest'} index={21} />
          <MiniTable table={pacific} title={'Pacific'} index={27} />
          <MiniTable table={southwest} title={'Southwest'} index={33} />
          

        
      </div>
    )
  }
}

export default  DivisionTable;