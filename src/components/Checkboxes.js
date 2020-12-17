import {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props)
        this.state = { checked: true }
        this.handleClick = this.handleClick.bind.this
    }
    handleClick(){
        this.setState({
          checked:!this.state.checked
        })
        
      }
    render() {
        const { item, onClass, type } = this.props; 
        return (
            <label
                className={`flex inline-block py-1 px-3 pr-5`}
            >
                <input
                    defaultChecked={this.state.checked}
                    className={`mr-2 checkbox ${onClass} ${type}`}
                    onChange={e=>this.handleClick}
                    data-item={item}
                    data-type={type}
                    type='checkbox'
                /> 
                {item}
            </label>
        )
    }
};

class Checkboxes extends Component{
    constructor(props) {
        super(props)
    }
    div = this.props.list.map((item) => {
                                return (
                                    <li key={item} className="mr-3 flex">
                                        <Checkbox
                                            item={item} 
                                            onClass={this.props.onClass} 
                                            type={this.props.type}/>
                                    </li>)
                })

    render() {
        return(
            <div className="">
                <ul className="flex flex-col ">
                    {this.div}
                           
                </ul>
            </div>

        )
        
    }
}

export default Checkboxes;