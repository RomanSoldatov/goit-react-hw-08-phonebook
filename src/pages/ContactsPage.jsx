import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { Header } from 'components/Header/Header';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#defabb',
    },
    secondary: {
      main: '#d4bff9',
    },
  },
});

const Contacts = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100%',
            background: '#ffffffb0',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
            }}
          >
            <Grid container spacing={2}>
              <Section title="PhoneBook">
                <ContactForm />
                <Header title="Contacts" />
                <Filter />
                <ContactList />
              </Section>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={false} sm={6} md={7} />
      </Grid>
    </ThemeProvider>
  );
};

export default Contacts;
