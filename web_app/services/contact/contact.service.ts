import { RoutesService } from "~/constants/routes.service";
import { ContactFormDto } from "~/models/dtos/contactform.dto";
import { ResponseDto } from "~/models/dtos/response.dto";
import HttpUtils from '~/utilities/http.util';
export const useContactService = () => {
	const doSendContact = (contactForm: ContactFormDto): Promise<ResponseDto> => {
    const url = `${process.env.API_URL}${RoutesService.contact}`;

		return HttpUtils.doPost(url, contactForm);
	};

	return {
		doSendContact,
	};
};