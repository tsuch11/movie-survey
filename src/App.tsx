// ── App ────────────────────────────────────────────────────────────
// Root page: owns survey form state, validation, and success-state swap (in-place, URL unchanged)
// แก้ไขได้: INITIAL_FORM_DATA, handlers, layout wrapper

import { useState } from 'react';
import type { SurveyFormData, SurveyErrors } from './types/survey';
import { validateSurveyForm } from './utils/validation';
import SurveyForm from './components/shared/SurveyForm';
import SurveyResult from './components/shared/SurveyResult';

const INITIAL_FORM_DATA: SurveyFormData = {
	name: '',
	email: '',
	selectedMovie: '',
	comment: '',
};

function App() {
	// ── Hooks ──────────────────────────────────────────────────────
	const [formData, setFormData] = useState<SurveyFormData>(INITIAL_FORM_DATA);
	const [errors, setErrors] = useState<SurveyErrors>({});
	const [isSubmitted, setIsSubmitted] = useState(false);

	// ── Handlers ───────────────────────────────────────────────────
	const handleNameChange = (value: string) => setFormData({ ...formData, name: value });
	const handleEmailChange = (value: string) => setFormData({ ...formData, email: value });
	const handleMovieSelect = (value: string) => setFormData({ ...formData, selectedMovie: value });
	const handleCommentChange = (value: string) => setFormData({ ...formData, comment: value });

	const handleSubmit = () => {
		const validationErrors = validateSurveyForm(formData);

		setErrors(validationErrors);

		if (Object.keys(validationErrors).length === 0) {
			setIsSubmitted(true);
		}
	};

	const handleReset = () => {
		setFormData(INITIAL_FORM_DATA);
		setErrors({});
	};

	const handleRestart = () => {
		handleReset();
		setIsSubmitted(false);
	};

	// ── Render ─────────────────────────────────────────────────────
	return (
		<main className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
			<div className="w-full max-w-md rounded-2xl bg-white shadow-md">
				{isSubmitted ? (
					<SurveyResult formData={formData} onRestart={handleRestart} />
				) : (
					<SurveyForm
						formData={formData}
						errors={errors}
						onNameChange={handleNameChange}
						onEmailChange={handleEmailChange}
						onMovieSelect={handleMovieSelect}
						onCommentChange={handleCommentChange}
						onSubmit={handleSubmit}
						onReset={handleReset}
					/>
				)}
			</div>
		</main>
	);
}

export default App;
