import React, { Component } from 'react'
import SlidingPane from "react-sliding-pane";


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
            <div id={this.props.name} style={{ display: 'flex', backgroundColor: 'rgba(0,0,255,0)', width: '50%' }}>
                <button onClick={() => {
                    this.setState({ isPanelOpen: true })
                }}>
                    {this.props.name}
                </button>

                <SlidingPane
                    closeIcon={<div><button onClick={()=>{ this.setState({ isPanelOpen: false })}}>Close</button>
					</div>}
                    isOpen={this.state.isPanelOpen}
                    title={this.props.name}
                    from="right"
                    width="80vw"
                    onRequestClose={() => setState({ isPaneOpenLeft: false })}
                    >
                  <div style={{ height: '100%', width: '100%', padding: 0, margin: 0 }}>
                        <iframe src={this.props.src} style={{height: '100%', width: '100%', padding: 0, margin: 0 }}></iframe>
                  </div>
                </SlidingPane>
            </div>
        )
    }
}

export default Slider;