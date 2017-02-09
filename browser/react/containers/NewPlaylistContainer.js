import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

class NewPlaylistContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playlistName: '',
			isEdited: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {
		this.setState({
			playlistName: event.target.value,
			isEdited: true
		});
	}

	handleSubmit (event) {
		this.props.createPlaylist();
		this.setState({
			playlistName: '',
			isEdited: false
		});
		event.preventDefault();
	}

	render() {
		return (
			<NewPlaylist
				handleSubmit={this.handleSubmit}
				handleChange={this.handleChange}
				inputValue={this.state.playlistName}
				isEdited={this.state.isEdited}
			/>
		);
	}
}

export default NewPlaylistContainer;
