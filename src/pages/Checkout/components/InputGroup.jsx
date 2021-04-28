import React from 'react';

const InputGroup = ({
    title,
    name,
    inputChange,
    placeHolder,
    form,
    error,
    type = 'text',
    className,
}) => {
    if (!placeHolder) placeHolder = title;

    let randomID = Math.floor(Math.random() * 10000);

    className = className ? `form-group ${className}` : 'form-group';

    return (
        <div className={className}>
            <label htmlFor={randomID}>{title}</label>
            <input
                name={name}
                onChange={inputChange}
                className="form-control form-control-sm"
                id={randomID}
                type={type}
                placeholder={placeHolder}
                value={form[name]}
            />
            {error[name] && <p className="form-error">{error[name]}</p>}
        </div>
    );
};

export default InputGroup;
