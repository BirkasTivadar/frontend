// a <T> -vel azt adom meg, hogy nem tudom előre a típust, mert többféle típus is lehet az adott adat
export class QuestionBase<T> {
    value: T;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;

    constructor(options: {
        value: T,
        key: string,
        label: string,
        required: boolean,
        order: number,
        controlType: string
    }) {
        // for (let k in options) {
        //     this.[k] = options[k];
        // }

        this.value = options.value;
        this.key = options.key;
        this.label = options.label;
        this.required = options.required;
        this.order = options.order;
        this.controlType = options.controlType;
    }
}
