import { useDispatch } from 'react-redux';
import { Tooltip } from '@chakra-ui/react';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import { IoPersonRemove } from 'react-icons/io5';
import { Btn, ContactDescr, Item } from './ContactItem.styled';

export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <Item>
        <ContactDescr>
          <span>{name} </span>
          <Tooltip label="Call" color="#000" fontSize="xs">
            <span>
              <a href={'tel:' + phone}>{phone}</a>
            </span>
          </Tooltip>
          <Tooltip label="Delete" color="#000" fontSize="xs">
            <Btn type="button" onClick={() => onDeleteContact(id)}>
              <IoPersonRemove size="14" />
            </Btn>
          </Tooltip>
        </ContactDescr>
      </Item>
    </>
  );
};
