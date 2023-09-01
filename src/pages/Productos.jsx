import { Button} from '@mui/material';
import ProductCard from '../components/ProductCard'; // Ruta relativa a la ubicación de main.jsx
import ControlPointIcon from '@mui/icons-material/ControlPoint';

export default function Productos(){

  return (
    <div style={{padding: "2% 6%", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
    <h1>Categorias de productos</h1>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
      <Button variant="contained" sx={{ width: '23%', height: '5vh', borderRadius: '20px', border: '1px solid var(--bg-yellow-1)', display: 'flex', columnGap: '4%', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2, whiteSpace: 'nowrap' }}>
          Categoria 1 <ControlPointIcon style={{ fontSize: '20px' }} />
      </Button>
      <Button variant="contained" sx={{ width: '23%', height: '5vh', borderRadius: '20px', border: '1px solid var(--bg-yellow-1)', display: 'flex', columnGap: '4%', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2, whiteSpace: 'nowrap' }}>
          Categoria 2 <ControlPointIcon style={{ fontSize: '20px' }}/>
      </Button>
      <Button variant="contained" sx={{ width: '23%', height: '5vh', borderRadius: '20px', border: '1px solid var(--bg-yellow-1)', display: 'flex', columnGap: '4%', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2, whiteSpace: 'nowrap' }}>
          Categoria 3 <ControlPointIcon style={{ fontSize: '20px' }}/>
      </Button>
      <Button variant="contained" sx={{ width: '23%', height: '5vh', borderRadius: '20px', border: '1px solid var(--bg-yellow-1)', display: 'flex', columnGap: '4%', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2, whiteSpace: 'nowrap' }}>
          Categoria 4 <ControlPointIcon style={{ fontSize: '20px' }}/>
      </Button>
      <Button variant="contained" sx={{ width: '23%', height: '5vh', borderRadius: '20px', border: '1px solid var(--bg-yellow-1)', display: 'flex', columnGap: '4%', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 2, whiteSpace: 'nowrap' }}>
          Categoria 5 <ControlPointIcon style={{ fontSize: '20px' }}/>
      </Button>    
    </div>
        <br />
        <div className="products_container">
          <ProductCard  imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cappuccino_PeB.jpg/1200px-Cappuccino_PeB.jpg" productName="Cappucchino " price="3.50" />
          <ProductCard  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKn_lWXEzDOzPbr1eruNWYqco7NHRXk2_kS-WSIk3Ob5VBbrBEh2TN4THSgThEaWDIKQo&usqp=CAU" productName="Caffé Latte " price="2.50" />
          <ProductCard  imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6nplxo7iaQqWiVbHRu26uM10MhzJqOIqeJCn_VKe-mpJDAL_JsE0IY4fHke1A3xI_UK0&usqp=CAU" productName="Caffé Mocha " price="5.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrSpsHHHCcyaopccBt1JtlUmtPDFAz7SflvqaDeBPeDOXeaVOMSEZWgKDjOwV60dtmHQ&usqp=CAU" productName="Caffé Americano " price="3.50" />
          <ProductCard imageUrl="https://www.gastrolabweb.com/u/fotografias/m/2021/4/17/f850x638-11861_89350_6348.jpg" productName="Caffé Negro " price="4.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqmxUXMEHeOgaRA-odPNpP4SPm6FCnknI98tACVxlea-v0lglUmO55CglpqL9b8LUs9k&usqp=CAU" productName="Caffé Expresso " price="3.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrSpsHHHCcyaopccBt1JtlUmtPDFAz7SflvqaDeBPeDOXeaVOMSEZWgKDjOwV60dtmHQ&usqp=CAU" productName="Caffé Americano " price="3.50" />
          <ProductCard imageUrl="https://www.gastrolabweb.com/u/fotografias/m/2021/4/17/f850x638-11861_89350_6348.jpg" productName="Caffé Negro " price="4.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqmxUXMEHeOgaRA-odPNpP4SPm6FCnknI98tACVxlea-v0lglUmO55CglpqL9b8LUs9k&usqp=CAU" productName="Caffé Expresso " price="3.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrSpsHHHCcyaopccBt1JtlUmtPDFAz7SflvqaDeBPeDOXeaVOMSEZWgKDjOwV60dtmHQ&usqp=CAU" productName="Caffé Americano " price="3.50" />
          <ProductCard imageUrl="https://www.gastrolabweb.com/u/fotografias/m/2021/4/17/f850x638-11861_89350_6348.jpg" productName="Caffé Negro " price="4.50" />
          <ProductCard imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqmxUXMEHeOgaRA-odPNpP4SPm6FCnknI98tACVxlea-v0lglUmO55CglpqL9b8LUs9k&usqp=CAU" productName="Caffé Expresso " price="3.50" />
        </div>
      </div>
  );
}