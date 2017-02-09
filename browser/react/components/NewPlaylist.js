import React from 'react';

const NewPlaylist = function (props) {
	const tooLong = props.inputValue.length > 16;
	const isEmpty = props.inputValue.length === 0;
	const tooLongWarning = <div className="alert alert-warning">Name must have fewer than 17 characters.</div>;
	const isEmptyWarning = <div className="alert alert-warning">Please enter a name.</div>;

	return (
		<div className="well">
			<form className="form-horizontal" onSubmit={props.handleSubmit}>
				<fieldset>
					<legend>New Playlist</legend>
					<div className="form-group">
					{tooLong ? tooLongWarning : null}
					{isEmpty && props.isEdited ? isEmptyWarning : null}
						<label className="col-xs-2 control-label">Name</label>
						<div className="col-xs-10">
							<input
								className="form-control"
								type="text"
								onChange={props.handleChange}
								value={props.inputValue}
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-xs-10 col-xs-offset-2">
							<button
								type="submit"
								className="btn btn-success"
								disabled={tooLong || isEmpty}
							>
								Create Playlist
							</button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	)
}

export default NewPlaylist;
