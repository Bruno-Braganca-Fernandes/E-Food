import { Title, Button, ConfirmationText } from "../styles";

type Props = {
  onFinish: () => void;
};

const Confirmation = ({ onFinish }: Props) => (
  <>
    <Title>Pedido Realizado!</Title>
    <ConfirmationText>
      Obrigado pela sua compra. Estamos preparando seu pedido e ele chegará em
      breve.
    </ConfirmationText>
    <Button type="button" onClick={onFinish}>
      Concluir
    </Button>
  </>
);

export default Confirmation;
