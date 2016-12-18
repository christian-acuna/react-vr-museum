import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class SearchBar extends Component{
	constructor(props){
		super(props)

		this.state = {term: ''}
	}


	render(){
		return(
				<div>
					<TextField
      			hintText="Search art"
      			fullWidth={true} 	
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
      			/>
    		</div>
			)
	}

	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
}

export default SearchBar;