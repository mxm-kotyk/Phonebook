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
import { logInValidationSchema } from 'helpers/form-validation-schemas';
import { errorToast } from 'helpers/toasts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from 'redux/authApi';
import { setToken } from 'redux/tokenSlice';
import uniqid from 'uniqid';

const LogInPage = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: ({ email, password }) => handleSubmit(email, password),
    validationSchema: logInValidationSchema,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logInUser, { isLoading }] = useLogInUserMutation();

  const emailInputId = uniqid();
  const passwordInputId = uniqid();

  const handleSubmit = async (email, password) => {
    formik.resetForm();
    try {
      const user = await logInUser({ email, password }).unwrap();
      dispatch(setToken(user.token));
      navigate('/contacts');
    } catch (error) {
      errorToast(error.error);
    }
  };

  return (
    <Container>
      <h1>LogIn</h1>
      <StyledForm onSubmit={formik.handleSubmit}>
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
            'LogIn'
          )}
        </AddButton>
      </StyledForm>
      <RedirectWrapper>
        <p>Don't have an account yet?</p>
        <LinkButton type="button" onClick={() => navigate('/register')}>
          Create one here
        </LinkButton>
      </RedirectWrapper>
    </Container>
  );
};

export default LogInPage;
