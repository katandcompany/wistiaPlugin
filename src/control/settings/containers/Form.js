import React from 'react';

const Form = ({ id, formAction, submitHandler, children }) => <form id={id} action={formAction} onSubmit={submitHandler}>{children}</form>;

export default Form;
