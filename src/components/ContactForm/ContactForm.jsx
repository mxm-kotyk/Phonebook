import { useFormik } from 'formik';
import uniqid from 'uniqid';
import { Ring } from '@uiball/loaders';
import {
  StyledForm,
  StyledField,
  FieldWrapper,
  Label,
  ErrorText,
  AddButton,
} from 'components/shared-styles/form.styled';
import {
  useAddContactMutation,
  useGetAllContactsQuery,
} from 'redux/contactsApi';
import { errorToast, successAddToast, warningToast } from 'helpers/toasts';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { contactValidationSchema } from 'helpers/form-validation-schemas';

export const ContactForm = () => {
  const token = useSelector(selectToken);
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetAllContactsQuery(token);

  const formik = useFormik({
    initialValues: { name: '', number: '' },
    onSubmit: ({ name, number }) => handleSubmit(name, number),
    validationSchema: contactValidationSchema,
  });

  const handleSubmit = async (name, number) => {
    formik.resetForm();

    if (
      contacts.some(contact =>
        contact.name.toLowerCase().includes(name.toLowerCase())
      )
    ) {
      warningToast(name);
      return;
    }
    if (contacts.some(contact => contact.number === number)) {
      const originalName = contacts.find(
        contact => contact.number === number
      ).name;
      warningToast(originalName, number);
      return;
    }

    try {
      const contactData = { name, number };
      await addContact({ contactData, token }).unwrap();
      successAddToast(name);
    } catch (error) {
      errorToast(error.error);
    }
  };

  const nameInputId = uniqid();
  const numberInputId = uniqid();
  return (
    <div>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FieldWrapper>
          <StyledField
            type="text"
            name="name"
            id={nameInputId}
            required
            placeholder="."
            className="styled-input"
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
            type="tel"
            name="number"
            id={numberInputId}
            required
            placeholder="."
            className="styled-input"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.number}
          />
          <Label htmlFor={numberInputId}>Number</Label>
          {formik.touched.number && formik.errors.number && (
            <ErrorText>{formik.errors.number}</ErrorText>
          )}
        </FieldWrapper>
        <AddButton type="submit" disabled={isLoading}>
          {isLoading ? (
            <Ring size={40} lineWeight={5} speed={2} color="white" />
          ) : (
            'Add contact'
          )}
        </AddButton>
      </StyledForm>
    </div>
  );
};
