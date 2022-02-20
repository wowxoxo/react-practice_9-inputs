import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: fistNameValue,
    isValid: fistNameIsValid,
    hasError: fistNameHasError,
    valueChangeHandler: fistNameValueChangeHandler,
    inputBlurHandler: fistNameInputBlurHandler,
    reset: fistNameReset
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameValueChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset
  } = useInput((value) => value.trim().length > 2 && value.includes('@'));

  let formIsValid = false
  if (fistNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true
  }

  const formSubmitHandler = (event) => {
    event.preventDefault()

    console.log(fistNameValue)
    console.log(lastNameValue)
    console.log(emailValue)

    if (!formIsValid) {
      return
    }

    fistNameReset()
    lastNameReset()
    emailReset()
  }

  const fistNameInputClasses = fistNameHasError
    ? "form-control invalid"
    : "form-control";

  const fistNameInput =
    <div className={fistNameInputClasses}>
      <label htmlFor='fistName'>First Name</label>
      <input
        type="text"
        id="firstName"
        onChange={fistNameValueChangeHandler}
        onBlur={fistNameInputBlurHandler}
        value={fistNameValue}
      />
      {fistNameHasError && (
        <p className="error-text">Name must not be empty</p>
      )}
    </div>

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInput =
    <div className={lastNameInputClasses}>
      <label htmlFor='lastName'>Last Name</label>
      <input
        type="text"
        id="lastName"
        onChange={lastNameValueChangeHandler}
        onBlur={lastNameInputBlurHandler}
        value={lastNameValue}
      />
      {lastNameHasError && (
        <p className="error-text">Last name must not be empty</p>
      )}
    </div>

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  const emailNameInput =
    <div className={emailInputClasses}>
      <label htmlFor='email'>E-Mail Address</label>
      <input
        type="email"
        id="email"
        onChange={emailValueChangeHandler}
        onBlur={emailInputBlurHandler}
        value={emailValue}
      />
      {emailHasError && (
        <p className="error-text">Email must be longer 1 character and include @</p>
      )}
    </div>


  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        {fistNameInput}
        {lastNameInput}
      </div>
      {emailNameInput}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
