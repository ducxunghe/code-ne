export const dateFormat = (date: Date, lang: string): string => {
	const newDate: Date = new Date(date);

	const year = newDate.getFullYear();
	const month = ('0' + (newDate.getMonth() + 1)).slice(-2);
	const day = ('0' + newDate.getDate()).slice(-2);
	const dayOfWeek = newDate.getDay();

	const dayOfWeekStrJa = ['日', '月', '火', '水', '木', '金', '土'][dayOfWeek];
	const dayOfWeekStrEn = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
	const dayOfWeekStrVi = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][dayOfWeek];

	if (lang === 'ja') return `${year}年${month}月${day}日(${dayOfWeekStrJa})`;
	if (lang === 'en') return `${month}/${day}/${year} -- ${dayOfWeekStrEn}`;
	if (lang === 'vi') return `${day}/${month}/${year} -- ${dayOfWeekStrVi}`;
	else return `${day}/${month}/${year}`;
};

export const languageReplace = (strMessage: string, arrParameter: string[]): string => {
	let result: string = strMessage;
	if (!strMessage.trim()) {
		return '';
	}
	if (arrParameter.length === 0) {
		const count: number = (strMessage.match(/$/g) || []).length;
		for (let i: number = 0; i < count; i++) {
			result = strMessage.replace('$' + i, '');
		}
	} else {
		arrParameter.forEach((value, index) => {
			if (!value) {
				result = result.replace('$' + index, '');
			} else {
				result = result.replace('$' + index, value);
			}
		});
	}
	return result;
};
