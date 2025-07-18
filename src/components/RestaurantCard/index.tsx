import Tag from "../Tag";
import {
  Card,
  Image,
  Info,
  Title,
  Description,
  Rating,
  TopRow,
  ImageContainer,
  TagList,
} from "./style";
import star from "../../assets/images/estrela.png";

interface Props {
  image: string;
  title: string;
  description: string;
  rating: number;
  category: string[];
  link: string;
}

const RestaurantCard = ({
  image,
  title,
  description,
  rating,
  category,
  link,
}: Props) => (
  <Card>
    <ImageContainer>
      <Image src={image} alt={title} />
      <TagList>
        {category.map((item) => (
          <Tag key={item} variant="text">
            {item}
          </Tag>
        ))}
      </TagList>
    </ImageContainer>
    <Info>
      <TopRow>
        <Title>{title}</Title>
        <Rating>
          {rating.toFixed(1)} <img src={star} alt="Estrela" />{" "}
        </Rating>
      </TopRow>

      <Description>{description}</Description>

      <Tag variant="link" href={link}>
        Saiba mais
      </Tag>
    </Info>
  </Card>
);
export default RestaurantCard;
