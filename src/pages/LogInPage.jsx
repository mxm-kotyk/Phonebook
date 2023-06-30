import {
  AddButton,
  ErrorText,
  FieldWrapper,
  Label,
  StyledField,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLogInUserMutation } from 'redux/authApi';
import { setToken } from 'redux/tokenSlice';
import uniqid from 'uniqid';
import * as yup from 'yup';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters or more')
    .required('Password is required'),
});

const LogInPage = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: ({ email, password }) => handleSubmit(email, password),
    validationSchema,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logInUser, { error }] = useLogInUserMutation();

  const emailInputId = uniqid();
  const passwordInputId = uniqid();

  const handleSubmit = async (email, password) => {
    formik.resetForm();
    try {
      const user = await logInUser({ email, password }).unwrap();
      dispatch(setToken(user.token));
      navigate('/contacts');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>LogIn Page</h2>
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
        <AddButton type="submit">LogIn</AddButton>
      </StyledForm>
    </>
  );
};

export default LogInPage;
