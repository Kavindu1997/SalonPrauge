import {
  SectionHeader,
  ConfirmationContainer,
  ConfirmationContent,
  ConfirmationDesc,
  ConfirmationSmDesc,
  ConfirmationImg,
  ConfirmationFooter,
} from "../../styles/bookingTheme";

const Confirmation = () => {
  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        <SectionHeader variant="h3" color="secondary">
          Thank you for your reservation!
        </SectionHeader>
        <ConfirmationDesc variant="body2" color="secondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          dolorum labore eaque sequi, esse assumenda et aperiam quasi ex dolorem
          ad eum architecto neque facere nemo, ipsa repellendus maiores laborum.
        </ConfirmationDesc>
        <ConfirmationSmDesc variant="body2" color="primary">
          For further information contact us
        </ConfirmationSmDesc>
        <ConfirmationImg src="/assets/contact.png" alt="contact" />
        <ConfirmationFooter variant="body2" color="secondary">
          (487) 1070 1087
        </ConfirmationFooter>
        <ConfirmationFooter variant="body2" color="secondary">
          sales.salonprauge@sp.com
        </ConfirmationFooter>
      </ConfirmationContent>
    </ConfirmationContainer>
  );
};

export default Confirmation;
