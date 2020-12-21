import React, { Component } from 'react'
import SlidingPane from "react-sliding-pane";
import FilterPanel from './FilterPanel';
import {ListPanel} from './ListPanel';
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
            <div 
                id={this.props.name} 
                style={{ 
                    zIndex: 101, 
                    position:'absolute', 
                    bottom: '25px', 
                    right: '30px'}}>
                <button 
                    id='list-view ' 
                    style={{borderRadius: '1000px'}} 
                    onClick={(e) => {
                        this.setState({ isPanelOpen: !this.state.isPanelOpen })
                }}>
                    <img 
                        src={this.state.isPanelOpen? map:list} 
                        className='h-14 p-3 ring-2 hover:shadow-lg rounded-full' 
                        style={{backgroundColor: '#f4fdff'}}
                    />
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
                    <div
                        className='flex flex-row' 
                        style={{ 
                            height: '90%', 
                            zIndex: 101, }}
                    >
                        <FilterPanel 
                                className={`p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2 flex-col mr-48`}
                                target='list' 
                                alignment='flex-col'
                                style={{
                                    backgroundColor: '#f4fdff',
                                    zIndex:3,}} 
                        />
                        <ListPanel
                            className='ml-4 w-1/4 p-3 flex px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white md:py-5 md:text-lg md:px-5 ring-2 '
                            style={{
                                backgroundColor: '#f4fdff',
                                zIndex:2,
                                }}
                            
                        />
                    </div>
                    </SlidingPane>
            </div>
        )
    }
}

export default Slider;