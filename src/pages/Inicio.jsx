import {Grid, Typography, Box } from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import ProductCard from '../components/ProductCard';
import ArticuloCard from "../components/Articulos";

export default function Inicio(){

  return (
    <>
    <Grid container spacing={0} sx={{height:"80vh", margin:"auto"}}>
      <Grid item xs={6} sx={{ height:"61vh", background: "linear-gradient(0.25turn, #bca26b8c, #ffffff8e)", padding:"5% 10%" }}>
        <Typography sx={{padding:"5% 10%"}} fontWeight="500" fontSize="5vw" color="secondary">
           Expertos en <br />
           hacer <LocalCafeIcon sx={{ fontSize: 70 }} color="secondary"></LocalCafeIcon><br />
          café ---
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{height:"61vh", position:"relative"}}>
        <img className="img_banner" src="/src/assets/img/capuchino1.jpg" alt="cafe" />
      </Grid>
    </Grid>
    <Box>
      <hr id="hr_1" />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
        <Typography sx={{marginLeft:"-50%", marginTop:"0%"}} fontSize="3.6vh">Variedad de Productos</Typography>
        <div className="products_container">
          <ProductCard  imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cappuccino_PeB.jpg/1200px-Cappuccino_PeB.jpg" productName="Cappucchino " price="3.50" />
          <ProductCard  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKn_lWXEzDOzPbr1eruNWYqco7NHRXk2_kS-WSIk3Ob5VBbrBEh2TN4THSgThEaWDIKQo&usqp=CAU" productName="Caffé Latte " price="2.50" />
          <ProductCard  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nplxo7iaQqWiVbHRu26uM10MhzJqOIqeJCn_VKe-mpJDAL_JsE0IY4fHke1A3xI_UK0&usqp=CAU" productName="Caffé Mocha " price="5.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrSpsHHHCcyaopccBt1JtlUmtPDFAz7SflvqaDeBPeDOXeaVOMSEZWgKDjOwV60dtmHQ&usqp=CAU" productName="Caffé Americano " price="3.50" />
          <ProductCard imageUrl="https://www.gastrolabweb.com/u/fotografias/m/2021/4/17/f850x638-11861_89350_6348.jpg" productName="Caffé Negro " price="4.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqmxUXMEHeOgaRA-odPNpP4SPm6FCnknI98tACVxlea-v0lglUmO55CglpqL9b8LUs9k&usqp=CAU" productName="Caffé Expresso " price="3.50" />
        </div>
      </div>
    </Box>
    <Box>
      <hr id="hr_2" />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography sx={{marginLeft:"-50%", marginTop:"2%"}} fontSize="3.6vh">Articulos de Productos</Typography>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <ArticuloCard
            imageUrl="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg"
            subtitulo="CAFÉ"
            titulo="Disfruta del mejor café"
            descripcion="Descubre nuestra selección de cafés de alta calidad para los amantes del buen café."
          />
          
          <ArticuloCard
            imageUrl="https://www.sweetandcoffee.com.ec/wp-content/uploads/2019/07/SC-MENU-2-400x250.jpg"
            subtitulo="PASTELES"
            titulo="Dulces tentaciones"
            descripcion="Nuestros deliciosos pasteles y postres te harán disfrutar de cada bocado."
          />
          <ArticuloCard
            imageUrl="https://okdiario.com/img/2018/03/19/te.jpg"
            subtitulo="TÉ"
            titulo="Explora el mundo del té"
            descripcion="Sumérgete en la variedad de sabores y aromas de nuestros tés de todo el mundo."
          />
        </div>
      </div>
    </Box>
    </>
  );
}