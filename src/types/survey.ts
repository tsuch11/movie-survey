export interface SurveyFormData {
	name: string;
	email: string;
	selectedMovie: string;
	comment: string;
}

export interface SurveyErrors {
	name?: string;
	email?: string;
	selectedMovie?: string;
}
