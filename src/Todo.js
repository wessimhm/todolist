import React, { Component, Fragment } from 'react'

export default class Todo extends Component {

        state = {
            element: '',
            items: []
        }

        onChange = (e) => {
            this.setState({
                [e.target.name] : e.target.value
            })
            // console.log(e.target.name)
        }

        onSubmit = (e) => {
            e.preventDefault();
            this.setState({
                element: '',
                items: [...this.state.items, {element: this.state.element}]

            })
        }

        deleteTodo = (index) => {
            console.log(index);
            const arr = this.state.items;
            arr.splice(index);
            this.setState({
                items: arr
            })
        }

        renderTodo = () => {
            return this.state.items.map((item, index) => {
                return (
                    <div className="card mb-3" key={index}>
                        <div className="card-body">
                        <h4>{item.element}</h4>
                        <i className="fas fa-times" onClick={() => this.deleteTodo(index)} style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
                        </div>
                    </div>
                )
            })
        }

    render() {
        return (
            <Fragment>
            
            <div className="card my-3">
                <div className="card-header"> To-Do-List</div>
                <div className="card-body">
                    <form onSubmit= {this.onSubmit}>
                       <div className="form-group">
                            <label htmlFor="elemet">Chose à faire</label>
                            <input type="text" 
                                    className="form-control form-control-lg"
                                    name="element"
                                    onChange={this.onChange}
                                    value={this.state.element}
                            />

                        </div> 
                        <button className="btn btn-primary btn-block">
                            Ajouter une chose à faire
                        </button>
                    </form>

                    
                </div>
                
            </div>
            {this.renderTodo()}
            </Fragment>
        )
    }
}
