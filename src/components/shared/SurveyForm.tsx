// ── SurveyForm ─────────────────────────────────────────────────────
// Form shell only — receives all state and handlers via props, no internal state/logic
// แก้ไขได้: field layout, label text

import type { SurveyFormData, SurveyErrors } from '../../types/survey';
import { movies } from '../../constants/movies';
import TextField from '../ui/TextField';
import Button from '../ui/Button';
import MovieList from './MovieList';

// ── Types ──────────────────────────────────────────────────────────
type Props = {
	formData: SurveyFormData;
	errors: SurveyErrors;
	onNameChange: (value: string) => void;
	onEmailChange: (value: string) => void;
	onMovieSelect: (value: string) => void;
	onCommentChange: (value: string) => void;
	onSubmit: () => void;
	onReset: () => void;
};

// ── Component ────────────────────────────────────────────────────
const SurveyForm = ({
	formData,
	errors,
	onNameChange,
	onEmailChange,
	onMovieSelect,
	onCommentChange,
	onSubmit,
	onReset,
}: Props) => {
	// ── Handlers ───────────────────────────────────────────────────
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		onSubmit();
	};

	// ── Render ─────────────────────────────────────────────────────
	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
			<TextField
				label="ชื่อ"
				name="name"
				value={formData.name}
				onChange={onNameChange}
				required
				error={errors.name}
				placeholder="กรุณากรอกชื่อของคุณ"
			/>

			<TextField
				label="อีเมล"
				name="email"
				type="email"
				value={formData.email}
				onChange={onEmailChange}
				required
				error={errors.email}
				placeholder="example@email.com"
			/>

			<div className="flex flex-col gap-2">
				<label className="text-sm font-medium text-gray-700">
					เลือกหนังที่คุณชอบ
					<span className="text-red-500"> *</span>
				</label>
				<MovieList
					movies={movies}
					selectedMovie={formData.selectedMovie}
					onSelect={onMovieSelect}
					error={errors.selectedMovie}
				/>
			</div>

			<TextField
				label="ความคิดเห็นเกี่ยวกับหนัง"
				name="comment"
				value={formData.comment}
				onChange={onCommentChange}
				multiline
				placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
			/>

			<div className="flex justify-between">
				<Button label="รีเซ็ต" type="button" variant="secondary" onClick={onReset} />
				<Button label="ส่งแบบสำรวจ" type="submit" variant="primary" />
			</div>
		</form>
	);
};

export default SurveyForm;
