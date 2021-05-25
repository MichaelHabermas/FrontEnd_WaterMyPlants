import React from 'react';

export default function NewPlant(props) {
	return (
		<div className="newPlant">
			<div className="builder">
				<h2>Add a new Plant!</h2>
				<form id="plant-form">
					<label>
						{' '}
						Plant's Nickname
						<input type="text" name="nickname" id="nickname-input" />
					</label>
					<label>
						{' '}
						Species
						<input type="text" name="species" id="species-input" />
					</label>
					<label>
						{' '}
						Picture for our new friend:
						<input type="file" name="newImage" id="image-input" />
					</label>
					<div className="submit">
						<button id="newPlant-button">Add New Plant!</button>
					</div>
				</form>
			</div>
		</div>
	);
}
