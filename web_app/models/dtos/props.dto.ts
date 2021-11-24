import { ValidationRuleSchema } from 'vee-validate/dist/types/types';

/**  COLLAPSE  **/
export interface CollapseButtonProps {
	collapseText: string;
	collapseId?: string;
	classes?: string;
}

export interface CollapseItemProps {
	collapseContent?: string;
	collapseId?: string;
	classes?: string;
}

export interface CollapseProps {
	collapseTitle: string;
	collapseId?: string;
	classes?: string;
	collapseContent?: string;
}

/**  CUSTOM TAG  **/
export interface CustomHighlightTagProps {
	tagName: string;
	tagId?: string;
	classes?: string;
	highlight: string;
	highlightClasses?: string;
}

export interface CustomTagProps {
	tagName: string;
	tagId?: string;
	classes?: string;
	tagText: string;
}

/**  FORM  **/
export interface ButtonProps {
	classes?: string;
	buttonId?: string;
	buttonTitle?: string;
	buttonLabel: string;
	buttonType?: string | number;
}

export interface CheckboxProps {
	checkboxName?: string;
	checkboxValue?: string;
	checkboxId?: string;
	classes?: string;
}

export interface CheckboxLabelProps {
	checkboxLabelId?: string;
	checkboxLabel: string;
	classes?: string;
}

export interface CheckboxListProps {
	checkboxListOptions: Array<string>;
}

export interface BusinessListProps {
	BusinessListTitle: string;
	BusinessListLabel: string;
	BusinessListValue: string;
}

export interface InputProps {
	inputType?: string | number;
	inputTitle?: string;
	inputId?: string;
	classes?: string;
	inputPlaceholder?: string;
	inputMaxlength?: number;
	inputValidate?: {
		name: string;
		schema: ValidationRuleSchema;
	};
}
export interface InputFieldProps {
	inputFieldType?: string | number;
	inputFieldTitle?: string;
	inputFieldLabel: string;
	inputFieldId?: string;
	classes?: string;
	inputFieldPlaceholder?: string;
	inputFieldRules?: string;
	inputFieldField?: string;
	inputFieldMaxlength?: number;
}

export interface LabelProps {
	labelId?: string;
	labelText: string;
	classes?: string;
}

export interface TextareaProps {
	textareaTitle?: string;
	textareaId?: string;
	classes?: string;
	textareaPlaceholder?: string;
	textareaRows?: number;
	textareaCols?: number;
	textareaMaxlength?: number;
	textareaValidate?: {
		name: string;
		schema: ValidationRuleSchema;
	};
}
export interface TextareaFieldProps {
	textareaFieldTitle?: string;
	textareaFieldId?: string;
	classes?: string;
	textareaFieldPlaceholder?: string;
	textareaFieldRows?: number;
	textareaFieldCols?: number;
	textareaFieldMaxlength?: number;
}

/**  IMAGE  **/
export interface ImageAtomProps {
	imgTitle?: string;
	imgId?: string;
	classes?: string;
	imgSrc: string;
	imgAlt?: string;
}

/**  ICONS  **/
export interface IconProps {
	iconId?: string;
	classes?: string;
	iconText?: string;
}

/**  LOGOS  **/
export interface LogoProps {
	logoSrc: string;
	logoAlt?: string;
}

/**  LINK  **/
export interface LinkProps {
	classes?: string;
	linkId?: string;
	linkText: string;
	link?: string;
	linkType?: string | number;
	externalType?: string | number;
}

/**  NAVIGATION  **/
export interface NavigationListProps {
	link: string;
	class?: string;
	text: string;
	isActive?: boolean;
}

/**  PAGING  **/
export interface PagingItemProps {
	pagingItemAriaLabel?: string;
	pagingItemId?: string;
	classes?: string;
	pagingItemIcon?: string;
	pagingItemText?: string;
}

export interface PagingProps {
	pagingAriaLabel?: string;
	pagingId?: string;
	classes?: string;
	item?: number;
}

/**  PRELOADING  **/
export interface PreloadingProps {
	loadingId?: string;
	loadingActive?: boolean;
}

/**  CAPTION  **/
export interface CaptionProps {
	captionTag: string;
	class?: string;
	captionText: string;
}

/**  INTROTEXT  **/
export interface IntroTextProps {
	introText: string;
}

export interface PropertyProps {
	to: string;
	class?: string;
	linkText: string;
}
