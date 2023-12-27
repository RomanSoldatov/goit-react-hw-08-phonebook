import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { toastifyOptions } from 'utils/toastifyOptions';

import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
  selectIsLoading,
  selectError,
  selectFilteredContacts,
  selectFilter,
} from '../../redux/selectors';

import { Loader } from 'components/Loader/Loader';

import { Info, List } from './ContactList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const result = useSelector(selectFilteredContacts);

  const getFilteredContacts = data => {
    if (filter.toLowerCase() && !data.length) {
      toast.warn(`No contacts matching your request`, toastifyOptions);
    }
    return data;
  };

  const filteredContacts = getFilteredContacts(result);

  return (
    <>
      {isLoading && filteredContacts?.length === 0 && <Loader />}
      {error && !isLoading && <div>Ooops, error...</div>}
      {!filteredContacts?.length && !error && !isLoading && (
        <Info>Contacts not found</Info>
      )}
      {!error && !isLoading && filteredContacts?.length > 0 && (
        <List>
          {filteredContacts?.map(({ name, phone, id }) => {
            return <ContactItem key={id} name={name} phone={phone} id={id} />;
          })}
        </List>
      )}
    </>
  );
};
