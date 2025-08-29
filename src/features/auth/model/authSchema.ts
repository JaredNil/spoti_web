export interface AuthSchema {
	authUser: string
	authPass: string

	isValid: boolean
	isLoading: boolean
	error?: string

	// DEPRECATED
	// isOpen: boolean;
	// onClose: ()=>void;
	// onOpen: ()=>void;
}
