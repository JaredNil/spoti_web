export interface AuthSchema {
	username: string;
	password: string;
	isValid: boolean;
	isLoading: boolean;
	error?: string;
}
