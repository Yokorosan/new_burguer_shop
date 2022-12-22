import { StyledImg } from "../../styles/image";

export const Img = ({ src, alt }) => {
  return <StyledImg src={src} alt={alt} location={"header"} />;
};
