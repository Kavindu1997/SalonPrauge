import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

const ServiceCard = ({ data, actionpath, buttonpath }) => {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ maxWidth: 386, mb: 10 }}
      onClick={() => {
        navigate(`/${actionpath}/${data.id}`);
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={data.image}
          alt={data.category}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.details}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Make a Reservation
        </Button>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
