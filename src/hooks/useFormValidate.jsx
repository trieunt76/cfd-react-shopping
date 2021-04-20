import { useState } from 'react';

let emailPattern = /^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/i;
let phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/i;
// eslint-disable-next-line no-useless-escape
let urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;

const useFormValidate = (initialForm, validate) => {
    let { rules, messages } = validate;

    let [form, setForm] = useState(initialForm);
    let [error, setError] = useState({});

    const inputChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        let type = e.target.type;

        if (type === 'checkbox') {
            value = e.target.checked;
        }

        setError({
            ...error,
            [name]: '',
        });

        setForm({
            ...form,
            [name]: value,
        });
    };
    const check = () => {
        let errors = {};

        for (let i in rules) {
            let rule = rules[i];
            let message = messages?.[i] || null;

            if (rule.required && !form[i]) {
                errors[i] =
                    message?.required || 'Vui lòng nhập vào trường này!';
            }

            if (rule.pattern && form[i]) {
                let pattern = rule.pattern;

                if (pattern === 'email') {
                    pattern = emailPattern;
                }
                if (pattern === 'phone') {
                    pattern = phonePattern;
                }
                if (pattern === 'url') {
                    pattern = urlPattern;
                }

                try {
                    if (!pattern.test(form[i])) {
                        errors[i] =
                            message?.pattern ||
                            'Trường này không đúng định dạng';
                    }
                } catch (error) {}
            }
        }

        setError(errors);
        return errors;
    };

    return {
        form,
        error,
        inputChange,
        check,
    };
};

export default useFormValidate;
