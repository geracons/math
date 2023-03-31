import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import TuneIcon from '@mui/icons-material/Tune';
import LanguageIcon from '@mui/icons-material/Language';
import Person3Icon from '@mui/icons-material/Person3';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Clase suelta',
    price: '€15',
    description: [
      '1 Clase suelta ',
      '1 hora de duración',
      '100% personalizada',
      'Individual',
    ],
    buttonText: 'Contáctanos',
    buttonVariant: 'outlined',
  },
  {
    title: '2 / Semana',
    subheader: 'Más popular',
    price: '€96',
    description: [
      '2 veces por semana',
      '8 clases en total',
      '100% personalizada',
      'Individual',
      '20% Descuento'
    ],
    buttonText: 'Contáctanos',
    buttonVariant: 'outlined',
  },
  {
    title: ' 4 / Semana - Intensivo',
    price: '€176',
    description: [
      '4 veces por semana',
      '16 clases en total',
      '100% personalizada',
      'Individual',
      '27% Descuento',
      'Soporte whatsApp'
    ],
    buttonText: 'Contáctanos',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />

      {/* Hero unit */}
      <div className='bg-pink h-auto w-full '>
          <Typography className=' z-10 pt-14 pb-14 text-white font-semibold' variant="h3" align="center" component="p">
            ¿Qué te ofrecemos?

          </Typography>
          </div>
      <Container id='price' disableGutters maxWidth="sm" component="main" sx={{ pt: 0, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >


         
        
       

         
         
          
        </Typography>
        <Typography align="center" className="pt-10 text-pink ">
          <TuneIcon sx={{ fontSize: 60 }} />
        </Typography>
        <Typography className='pt-2' variant="h4" align="center" color="text.secondary" component="p">
          Clases personalizadas

        </Typography>
        
        <Typography className='pt-2' variant="h5" align="center" color="text.secondary" component="p">
          Adaptadas 100% a tus necesidades. Clase en base a temarios y currícula.
        </Typography>
        <Typography align="center" className="pt-10  text-pink">
          <LanguageIcon sx={{ fontSize: 60 }} />
        </Typography>
        <Typography className='pt-2' variant="h4" align="center" color="text.secondary" component="p">
          Modalidad online
        </Typography>
        <Typography className='pt-2' variant="h5" align="center" color="text.secondary" component="p">
          Puedes tomar clases desde cualquier sitio. Tenemos horarios flexibles.

        </Typography>

        <Typography align="center" className="pt-10  text-pink">
          <Person3Icon sx={{ fontSize: 60 }} />
        </Typography>
        <Typography className='pt-2' variant="h4" align="center" color="text.secondary" component="p">
          Clases individuales
        </Typography>
        <Typography className='pt-2' variant="h5" align="center" color="text.secondary" component="p">
          Las clases son indidivuales, lo que te permitirá resolver mejor tus dudas
          y avanzar más rápido.

        </Typography>
        
      </Container>

      <div className='bg-pink h-auto w-full mb-10'>
      <Typography className='pt-14 pb-14 text-white font-semibold' variant="h3" align="center" component="p">
        Precios
     
      </Typography>
      </div>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className="pb-20">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >


              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mes
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        fontSize="20px"
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button href='https://wa.me/34602661162' fullWidth variant={tier.buttonVariant} className="text-pink border-pink">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}