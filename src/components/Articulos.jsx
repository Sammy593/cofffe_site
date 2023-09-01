import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

// eslint-disable-next-line react/prop-types
const ArticuloCard = ({ imageUrl, subtitulo, titulo, descripcion }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: "1rem" }}>
      <CardMedia sx={{marginBottom:"5%"}} component="img" height="200" image={imageUrl} alt={titulo} />
      <CardContent>
        <Typography gutterBottom variant="h6">
          {subtitulo}
        </Typography>
        <Typography variant="h5">
          {titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {descripcion}
        </Typography>
        <Button size="small" color="secondary">
          Leer más
        </Button>
      </CardContent>
      <Divider sx={{ backgroundColor: "tercero.main", borderTop: "3px solid", borderTopColor:"tercero.main" }} />
    </Card>
     
  );
};

export default ArticuloCard;