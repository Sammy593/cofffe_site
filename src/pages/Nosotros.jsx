import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider ,Typography, CardMedia } from '@mui/material';

const NosotrosCard = ({ title, children }) => {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>{title}</Typography>
        {children}
      </CardContent>
    </Card>
  );
};

NosotrosCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default function Nosotros(){

  return (
    <Box>
    <Divider sx={{ backgroundColor: 'orange', borderTop: '2px solid orange' }} />
    <NosotrosCard title="Misión">
      <Typography>
        Nuestra misión es brindar a nuestros clientes la mejor experiencia en café, ofreciendo productos de alta calidad y un servicio excepcional.
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image="https://kaffee-fee.com/media/wysiwyg/coffeeTable2.jpg"
        alt="Imagen de Misión"
      />
    </NosotrosCard>
    <Divider sx={{ backgroundColor: 'orange', borderTop: '2px solid orange' }} />
    <NosotrosCard title="Visión">
      <Typography>
        Nuestra visión es convertirnos en la principal opción para los amantes del café, destacando por nuestra innovación, sostenibilidad y pasión por el buen café.
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image="https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/fhmyneid/880cf4d6-2871-405c-9083-8295ed562673.jpg"
        alt="Imagen de Visión"
      />
    </NosotrosCard>
    <Divider sx={{ backgroundColor: 'orange', borderTop: '2px solid orange' }} />
    <NosotrosCard title="Sobre Nosotros">
      <Typography>
        CoffeScript es una empresa dedicada a la venta de cafés y capuchinos de alta calidad. Nuestra pasión por el café nos impulsa a ofrecer una experiencia única a cada cliente.
      </Typography>
      <CardMedia
        component="img"
        height="200"
        image="https://www.civitatis.com/blog/wp-content/uploads/2021/11/cafe-granos.jpg"
        alt="Imagen de Sobre Nosotros"
      />
    </NosotrosCard>
  </Box>
  );
}