// ── MovieList ──────────────────────────────────────────────────────
// Renders the movies array as a selectable RadioGroup
// แก้ไขได้: option label/description format

import type { Movie } from '../../types/movie';
import RadioGroup from '../ui/RadioGroup';

// ── Types ──────────────────────────────────────────────────────────
type Props = {
	movies: Movie[];
	selectedMovie: string;
	onSelect: (title: string) => void;
	error?: string;
};

// ── Component ────────────────────────────────────────────────────
const MovieList = ({ movies, selectedMovie, onSelect, error }: Props) => {
	const options = movies.map((movie) => ({
		value: movie.title,
		label: `${movie.title} (${movie.year})`,
		description: `Director: ${movie.director}`,
	}));

	// ── Render ─────────────────────────────────────────────────────
	return (
		<RadioGroup
			name="movie"
			options={options}
			selectedValue={selectedMovie}
			onChange={onSelect}
			error={error}
		/>
	);
};

export default MovieList;
