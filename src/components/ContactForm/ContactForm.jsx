import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { schema } from 'shared/schemaYup';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from '../../redux/contacts/contacts-operations';
import { BsFillTelephoneFill, BsPersonFill } from 'react-icons/bs';
import { IoMdPersonAdd } from 'react-icons/io';

import {
  Form,
  FormField,
  FieldFormik,
  ErrorMessage,
  StyledButton,
  LabelWrapper,
} from './ContactForm.styled';

const initialValues = { name: '', phone: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const onAddContact = data => {
    dispatch(addContact(data));
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values });
        resetForm();
      }}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <FormField>
          <LabelWrapper>
            <BsPersonFill />
            Name
          </LabelWrapper>
          <FieldFormik type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          <LabelWrapper>
            <BsFillTelephoneFill />
            Number
          </LabelWrapper>
          <FieldFormik type="tel" name="phone" />
          <ErrorMessage name="phone" component="span" />
        </FormField>
        <StyledButton type="submit">
          <IoMdPersonAdd size="16" />
          Add contact
        </StyledButton>
      </Form>
    </Formik>
  );
};
