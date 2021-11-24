<template>
	<div>
		<div v-for="option in checkboxListOptions" :key="option.BusinessListValue" class="form__checkbox-group animate__animated animate__fadeIn wow">
			<Checkbox
				:checkbox-id="option.BusinessListTitle"
				:checkbox-name="option.BusinessListTitle"
				:checkbox-value="option.BusinessListValue"
				@handleInputChange="handleInputChange($event, option.BusinessListValue)"
			/>
			<CheckboxLabel :checkbox-label-id="option.BusinessListTitle" :checkbox-label="option.BusinessListLabel" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from '@nuxtjs/composition-api';
import Checkbox from '~/components/atoms/Form/Checkbox.vue';
import CheckboxLabel from '~/components/atoms/Form/CheckBoxLabel.vue';
export default defineComponent({
	name: 'CheckboxList',
	components: { Checkbox, CheckboxLabel },
	props: {
		checkboxListOptions: {
			type: Array,
			required: true,
		},
	},
	emits: ['handleInputChange'],
	setup(_, context: SetupContext) {
		let values: Array<string> = [];

		const handleInputChange = ($event: any, value: string): void => {
			if ($event.target.checked) {
				values.push(value);
			} else {
				values = values.filter((v) => v !== value);
			}
			context.emit('handleInputChange', values);
		};

		return {
			handleInputChange,
		};
	},
});
</script>

<style lang="scss" scoped>
.form__checkbox-group {
	margin-bottom: 1rem;
}
</style>
