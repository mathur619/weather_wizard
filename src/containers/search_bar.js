import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'
 
class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={
            value:''
        }
        this.onInputChange=this.onInputChange.bind(this)
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onInputChange(event){
        this.setState({value:event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.value)
        this.setState({ value: '' })
    }
    render(){
        return (
            <form onSubmit={ this.onFormSubmit } className="input-group">
                <input
                onChange={this.onInputChange}
                value={this.state.value}
                placeholder="Enter the city for the forecast"
                />
                <span className="input-group-button">
                    <button type="submit" className="btn btn-secondary"> Submit </button>
                </span>
            </form>
        )

    }
}
function mapDispatchToProps(dispatch){
    return (
        bindActionCreators({ fetchWeather },dispatch)
    )
}
export default connect(null,mapDispatchToProps)(SearchBar)