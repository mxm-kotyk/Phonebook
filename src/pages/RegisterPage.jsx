import {
  AddButton,
  ErrorText,
  FieldWrapper,
  Label,
  StyledField,
  StyledForm,
} from 'components/ContactForm/ContactForm.styled';
import { useFormik } from 'formik';
import uniqid from 'uniqid';
import * as yup from 'yup';

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(
      /^[\p{L} '-]+$/u,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters or more')
    .required('Password is required'),
});

function RegisterPage() {
  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    onSubmit: ({ name, email, password }) =>
      handleSubmit(name, email, password),
    validationSchema,
  });

  const handleSubmit = (name, email, password) => {
    formik.resetForm();
    console.table({ name, email, password });
  };

  const nameInputId = uniqid();
  const emailInputId = uniqid();
  const passwordInputId = uniqid();

  return (
    <>
      <h2>Register Page</h2>
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
        <AddButton type="submit">Register</AddButton>
      </StyledForm>
    </>
  );
}

export default RegisterPage;
