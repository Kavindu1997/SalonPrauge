import { Box } from "@mui/material";
import {
  AboutContainer,
  AboutImage,
  AboutContent,
  SectionHeader,
  SectionContent,
  SectionFooter,
} from "../../styles/homeTheme";

const FooterBanner = () => {
  return (
    <Box id="about">
      <AboutContainer>
        <AboutImage src="/assets/banner.png" alt="aboutbanner" />
        <AboutContent>
          <SectionHeader variant="h3" color="secondary">
            About us
          </SectionHeader>
          <SectionContent variant="body2" color="secondary">
            Named “Best Salon” by Main Line Magazine & The Philadelphia
            Inquirer, Prauge Salon & Style Bar has been committed to “raising
            the bar ” since opening our doors in 2014. Our mission is simple,
            give every guest an excellent experience by providing them with a
            warm, inviting culture & results that surpass expectations. At Privé
            we are passionate about making people feel good while looking their
            best. Attending advanced education allows us to keep up with the
            latest trends and provide each guest with a unique & customizable
            result. For your convenience, we are open 7 days a week & offers
            online booking 24 hours a day.
          </SectionContent>
          <SectionFooter variant="body2" color="primary">
            Schedule your reservation today!
          </SectionFooter>
        </AboutContent>
      </AboutContainer>
    </Box>
  );
};

export default FooterBanner;
