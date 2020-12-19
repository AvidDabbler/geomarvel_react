import React, { Component, setState } from 'react'
import SlidingPane from "react-sliding-pane";
import FilterPanel from './FilterPanel';
import list from '../assets/list.png';
import map from '../assets/map.png';

class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            isPanelOpen: false,
		 };
    }
    render() {
        return (
            <div id={this.props.name} style={{ zIndex: 101, position:'absolute', bottom: '40px', right: '30px'}}>
                <button id='list-view-button ' style={{borderRadius: '1000px'}} onClick={(e) => {
                    this.setState({ isPanelOpen: !this.state.isPanelOpen })
                }}>
                    <img src={this.state.isPanelOpen? map:list} className='h-14 p-3 ring-2 hover:shadow-lg rounded-full' style={{backgroundColor: '#f4fdff'}}/>
                </button>

                <SlidingPane
                    closeIcon={<div><button onClick={()=>{ this.setState({ isPanelOpen: false })}}>Close</button>
                    </div>}
                    style={{zIndex: 101}}
                    isOpen={this.state.isPanelOpen}
                    title={this.props.name}
                    from="right"
                    width="100vw"
                    >
                  <div style={{ height: '100%', width: '100%', padding: 0, margin: 0, zIndex: 101 }}>
                  <FilterPanel 
                        target='list' 
                        alignment='flex-col'
                        style={{
                            backgroundColor: '#f4fdff',
                            position: 'absolute',
                            zIndex:3,
                            top:30,
                            left: 20
                    }} />
                        
                  </div>
                </SlidingPane>
            </div>
        )
    }
}

export default Slider;