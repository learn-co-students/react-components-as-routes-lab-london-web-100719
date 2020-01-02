import React, { Fragment } from 'react';
import { movies } from '../data';

const Movies = () => {
	return (
		<div>
			<h1>Movies Page</h1>
			{movies.map( movie => {

				return (
					< div >
						<h2>{movie.title}</h2>
						<h4>{movie.genres.join(", ")} --- {movie.time} minutes</h4>
						{movie.metascore ? <h3>Metascore: {movie.metascore}</h3> : null}
					</div>
				)

			}
			)}
		</div>
	);
};

export default Movies;
