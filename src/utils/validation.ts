import type { SurveyFormData, SurveyErrors } from '../types/survey';

export const validateEmail = (email: string): boolean => {
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	return emailPattern.test(email);
};

export const validateSurveyForm = (data: SurveyFormData): SurveyErrors => {
	const errors: SurveyErrors = {};

	if (!data.name.trim()) {
		errors.name = 'โปรดใส่ชื่อของคุณ';
	}

	if (!data.email.trim()) {
		errors.email = 'โปรดใส่อีเมลของคุณ';
	} else if (!validateEmail(data.email)) {
		errors.email = 'รูปแบบอีเมลไม่ถูกต้อง';
	}

	if (!data.selectedMovie) {
		errors.selectedMovie = 'กรุณาเลือกหนังที่คุณชอบ';
	}

	return errors;
};
