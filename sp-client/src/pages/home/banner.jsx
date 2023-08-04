import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  OutlinedButton,
  BannerContainer,
  BannerInner,
  BannerContent,
  BannerHead,
  BannerQuote,
  BannerFoot,
} from "../../styles/homeTheme";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <BannerContainer>
        <BannerInner>
          <BannerContent>
            <BannerHead variant="h3" color="secondary">
              Always make room for beauty in your life
            </BannerHead>
            <BannerQuote variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio a
              molestias sunt culpa voluptates enim libero commodi totam,
              similique natus placeat in? Blanditiis, accusamus. Deleniti quis
              veritatis expedita maiores rem.
            </BannerQuote>

            <BannerFoot>
              <OutlinedButton
                onClick={() => {
                  navigate("/bookingdetail");
                }}
              >
                Book now
              </OutlinedButton>
            </BannerFoot>
          </BannerContent>
        </BannerInner>
      </BannerContainer>
    </Box>
  );
};

export default Banner;
