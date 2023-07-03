import { Ring } from '@uiball/loaders';
import { Container } from 'components/shared-styles/container';
import {
  AddButton,
  ErrorText,
  FieldWrapper,
  Label,
  StyledField,
  StyledForm,
} from 'components/shared-styles/form.styled';
import { LinkButton } from 'components/shared-styles/link-button.styled';
import { RedirectWrapper } from 'components/shared-styles/redirect-block.styled';
import { useFormik } from 'formik';
import { registrationValidationSchema } from 'helpers/form-validation-schemas';
import { errorToast } from 'helpers/toasts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from 'redux/authApi';
import { setToken } from 'redux/tokenSlice';
import uniqid from 'uniqid';

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: ({ name, email, password }) =>
      handleSubmit(name, email, password),
    validationSchema: registrationValidationSchema,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const nameInputId = uniqid();
  const emailInputId = uniqid();
  const passwordInputId = uniqid();

  const handleSubmit = async (name, email, password) => {
    formik.resetForm();
    try {
      const data = await registerUser({ name, email, password }).unwrap();
      dispatch(setToken(data.token));
      setTimeout(() => {
        navigate('/contacts');
      }, 0);
    } catch (error) {
      if (error.status === 400) {
        errorToast('Wrong email or password');
        return;
      }
      errorToast(error.error);
    }
  };

  return (
    <Container>
      <h1>Register</h1>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FieldWrapper>
          <StyledField
            className="styled-input"
            required
            placeholder="."
            type="text"
            name="name"
            id={nameInputId}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Label htmlFor={nameInputId}>Name</Label>
          {formik.touched.name && formik.errors.name && (
            <ErrorText>{formik.errors.name}</ErrorText>
          )}
        </FieldWrapper>
        <FieldWrapper>
          <StyledField
            className="styled-input"
            required
            placeholder="."
            type="email"
            name="email"
            id={emailInputId}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <Label htmlFor={emailInputId}>Email</Label>
          {formik.touched.email && formik.errors.email && (
            <ErrorText>{formik.errors.email}</ErrorText>
          )}
        </FieldWrapper>
        <FieldWrapper>
          <StyledField
            className="styled-input"
            required
            placeholder="."
            type="password"
            name="password"
            id={passwordInputId}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Label htmlFor={passwordInputId}>Password</Label>
          {formik.touched.password && formik.errors.password && (
            <ErrorText>{formik.errors.password}</ErrorText>
          )}
        </FieldWrapper>
        <AddButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <Ring size={40} lineWeight={5} speed={2} color="white" />
          ) : (
            'Register'
          )}
        </AddButton>
      </StyledForm>
      <RedirectWrapper>
        <p>Already registered?</p>
        <LinkButton type="button" onClick={() => navigate('/login')}>
          LogIn
        </LinkButton>
      </RedirectWrapper>
    </Container>
  );
};

export default RegisterPage;
