import { Title, Button, ConfirmationText } from "../styles";

type Props = {
  onFinish: () => void;
  orderId: string;
};

const Confirmation = ({ onFinish, orderId }: Props) => {
  return (
    <>
      <Title>Pedido realizado - {orderId}</Title>

      <ConfirmationText>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </ConfirmationText>
      <ConfirmationText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </ConfirmationText>
      <ConfirmationText>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </ConfirmationText>
      <ConfirmationText>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </ConfirmationText>

      <Button type="button" onClick={onFinish}>
        Concluir
      </Button>
    </>
  );
};

export default Confirmation;
