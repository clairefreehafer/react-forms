import React from 'react';

class Playlist extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	componentDidMount() {
		this.props.selectedPlaylist(this.props.routeParams.playlistId);
	}

	render() {
		return (
			<div>
				{this.props.playlists.map(playlist => {
					return (
						<div>
							<h3>{ playlist.name }</h3>
							<Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
							{ playlist.songs && !playlist.songs.length && <small>No songs.</small> }
						<hr />
						</div>
					)
				})}


			</div>
		)
	}
}

export default Playlist;
