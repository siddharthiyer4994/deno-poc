import React, {Component}  from 'react'

export class AddTodo extends Component{
    state= {
        title :''
    };

    handleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            title:''
        });
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter a ToDo</label>
                    <input type='text' onChange={this.handleChange}/>
                </form>
                </div>
        )
    }
}


export default AddTodo;