import {Component} from 'react';

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = { button: true }
        this.handleClick = this.handleClick.bind.this
    }
    handleClick(){
        this.setState({
          button:!this.state.button
        })
      }
    render() {
        const { item, onClass } = this.props; 
        return (
            <>
                <button
                    className={`${this.state.button ? "button-on" : "button-off"} inline-block border rounded py-1 px-3 ${onClass}`}
                    onClick={e=>this.handleClick}
                    data-item={item}
                >
                    {item}
                </button>  
            </>
        )
    }
};

class ButtonsGroup extends Component{
    constructor(props) {
        super(props)
    }
    div = this.props.list.map((item) => {
                                console.log(item)
                                return (
                                    <li key={item} className="mr-3 mx-auto">
                                        <Button item={item} onClass={this.props.onClass} />
                                    </li>)
                })

    render() {
        return(
            <div className="flex mx-auto">
                <ul className="flex flex-col mx-auto">
                    {this.div}
                           
                </ul>
            </div>

        )
        
    }
}

export default ButtonsGroup;