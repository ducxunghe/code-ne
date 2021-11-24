export const useCompanyService = () => {
	const getFullname = (name: string): string => {
		return 'this is company service:' + name;
	};

	return {
		getFullname,
	};
};
