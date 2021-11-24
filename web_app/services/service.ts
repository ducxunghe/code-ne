import { useAuthenticationService } from './auth/auth.service';
import { useBusinessContactService } from './bussinessContact/bussinessContact.service';
import { useCandidateService } from './candidate/candidate.service';
import { useCompanyService } from './company/company.service';
import { useContactService } from './contact/contact.service';

// eslint-disable-line
export const useService = () => {
	const candidateService = useCandidateService();
	const companyService = useCompanyService();
	const authenticationService = useAuthenticationService();
	const contactService = useContactService();
	const businessContactService = useBusinessContactService();
	return {
		candidateService,
		companyService,
		authenticationService,
		contactService,
		businessContactService,
	};
};
