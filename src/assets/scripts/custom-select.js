const element = document.querySelector('#category');
const choices = new Choices(element, {
    silent: false,
    items: [],
    choices: [
        {
            value: 'painting',
            label: 'Живопись',
            selected: true,
            disabled: false,
        },
        {
            value: 'drawing',
            label: 'Рисунок',
            selected: false,
            disabled: false,
        },
        {
            value: 'sculpture',
            label: 'Скульптура',
            selected: false,
            disabled: false,
        },
    ],
    renderChoiceLimit: -1,
    maxItemCount: -1,
    addItems: true,
    addItemFilter: null,
    removeItems: true,
    removeItemButton: false,
    editItems: false,
    allowHTML: true,
    duplicateItemsAllowed: true,
    delimiter: ',',
    paste: true,
    searchEnabled: false,
    searchChoices: false,
    searchFloor: 1,
    searchResultLimit: 4,
    searchFields: ['label', 'value'],
    resetScrollPosition: true,
    shouldSort: true,
    shouldSortItems: false,
    placeholder: false,
    searchPlaceholderValue: null,
    renderSelectedChoices: 'auto',
    itemSelectText: '',
    classNames: {
        containerOuter: 'select',
        containerInner: 'select__inner',
        input: 'select__input',
        inputCloned: 'choices__input--cloned',
        list: 'select__list',
        listSingle: 'select__list--single',
        listDropdown: 'select__list--dropdown',
        item: 'select__item',
        itemSelectable: 'select__item--selectable',
        itemDisabled: 'select__item--disabled',
        itemChoice: 'select__item--choice',
        activeState: 'select__list--active',
        focusState: 'select--focused',
        openState: 'select--opened',
        disabledState: 'is-disabled',
        highlightedState: 'select__item--highlighted',
        selectedState: 'select__item--selected',
    },
});