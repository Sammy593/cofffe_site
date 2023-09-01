import { Card, CardContent, CardMedia, Typography, IconButton, Divider } from '@mui/material';
import { Tag, AddCircle } from '@mui/icons-material';

// eslint-disable-next-line react/prop-types
const ProductCard = ({ imageUrl, productName, price }) => {
    return (
        <Card sx={{ width: '32%' ,cursor: 'pointer' }}>
            <CardMedia className="card_img" sx={{minHeight:"60%", maxHeight:"60%"}} component="img" image={imageUrl} alt="" />
            <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 900, color:"secondary.main" }}>
                    {productName}
                    <Tag sx={{ fontSize: '2vw', ml: 10, color: 'tercero.main', transform: 'rotate(-45deg) translateX(-50%) translateY(-20%)' }} />
                </Typography>
                
                <Divider sx={{ width: '180%', transform: 'translateX(-65%)', borderColor: 'tercero.main',borderWidth: 1}} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                    <Typography variant="h6" sx={{ color: 'secondary.main', fontWeight: 900, display:"flex", columnGap:"5%" }}>
                        <Typography variant="h6" sx={{ color: 'tercero.main', fontWeight: 900}}>
                            $
                        </Typography>
                        {price}
                    </Typography>
                    <IconButton color="secondary" aria-label="Add to cart">
                        <AddCircle />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
