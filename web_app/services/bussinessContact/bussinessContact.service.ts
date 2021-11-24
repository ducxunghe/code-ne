import { RoutesService } from "~/constants/routes.service";
import { BusinessContactFormDto } from "~/models/dtos/businesscontactform.dto";
import { ResponseDto } from "~/models/dtos/response.dto";
import HttpUtils from '~/utilities/http.util';
export const useBusinessContactService = () => {
	const doSendBusinessContact = (businessContactForm: BusinessContactFormDto): Promise<ResponseDto> => {
    const url = `${process.env.API_URL}${RoutesService.businessContact}`;

		return HttpUtils.doPost(url, businessContactForm);
	};

	return {
		doSendBusinessContact,
	};
};