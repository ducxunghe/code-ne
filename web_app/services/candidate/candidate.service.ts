export const useCandidateService = () => {
	const getFullname = (name: string): string => {
		return 'this is candidate service:' + name;
	};

	return {
		getFullname,
	};
};
