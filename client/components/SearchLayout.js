import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
	searchBar: {
		fontSize: '25px',
		width: '70%',
		height: '80px',
		display: 'block',
		lineHeight: '22px',
		margin: '0 auto',
	},
	floatingLabel: {
		color: '#EC7357'
	},
	underlineStyle: {
    borderColor: 'orange500',
  },
}

class SearchLayout extends Component{
	constructor(props){
		super(props)

		this.state = {term: ''}
	}


	render(){
		return(
				<div>
					<TextField
      			floatingLabelText="Search art or collections"
						floatingLabelStyle={styles.floatingLabel}
						underlineFocusStyle={styles.underlineStyle}
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
						style={styles.searchBar}
      			/>
						{this.props.children}
    		</div>
			)
	}

	onInputChange(term){
		this.setState({term})
		this.props.onSearchTermChange(term)
	}
}

export default SearchLayout;
