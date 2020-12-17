import React, {Component, Fragment} from 'react';

class MiniTable extends Component {

  render(){
    return (
      <Fragment>
        <div style={{order:this.props.index}} className='s-table-cell'>
        <strong  > {this.props.title} </strong>
        </div >  
        <div style={{order:this.props.index}} className='s-table-cell'> </div>   
        <div style={{order:this.props.index}} className='s-table-cell'> </div>
        <div style={{order:this.props.index}} className='s-table-cell'> </div>
      
        { this.props.table.map((entry, index) => 
                <Fragment key={index}>
                <div style={{order:index+1+this.props.index}} className='s-table-cell'>
                  <span  > {entry.abbreviation} </span>
                </div >  
                <div style={{order:index+1+this.props.index}} className='s-table-cell'>
                  <span > {entry.g_played} </span>
                </div>   
                <div style={{order:index+1+this.props.index}} className='s-table-cell'> 
                  <span > {entry.wins} </span>
                </div>
              
                <div style={{order:index+1+this.props.index}} className='s-table-cell'>  
                  <span  > {entry.lost} </span>
                </div>

              </Fragment> 
            )}
     </Fragment>
    )
  }
}

export default MiniTable;