import React, { Component, setState } from 'react'
import SlidingPane from "react-sliding-pane";
import FilterPanel from './FilterPanel';
import list from '../assets/list.png'


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
            <div id={this.props.name} style={{ zIndex: 101, position:'absolute', bottom: '40px', right: '10px',  backgroundColor: 'rgba(0,0,255,0)' }}>
                <button id='list-view-button ' onClick={(e) => {
                    this.setState({ isPanelOpen: !this.state.isPanelOpen })
                }}>
                    {list}
                </button>

                <SlidingPane
                    closeIcon={<div><button onClick={()=>{ this.setState({ isPanelOpen: false })}}>Close</button>
					</div>}
                    isOpen={this.state.isPanelOpen}
                    title={this.props.name}
                    from="right"
                    width="100vw"
                    >
                  <div style={{ height: '100%', width: '100%', padding: 0, margin: 0 }}>

                        
                  </div>
                </SlidingPane>
            </div>
        )
    }
}

export default Slider;