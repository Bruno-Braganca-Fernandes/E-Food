import { Field, ErrorMessage } from "formik";
import { Title, FormGroup, Input, Button, ErrorText } from "../styles";

type Props = {
  onBack: () => void;
};

const PaymentForm = ({ onBack }: Props) => (
  <>
    <Title>Pagamento</Title>
    <FormGroup>
      <label htmlFor="cardName">Nome no cartão</label>
      <Field as={Input} name="payment.card.name" id="cardName" />
      <ErrorMessage name="payment.card.name" component={ErrorText} />
    </FormGroup>

    <Button type="submit">Finalizar Pagamento</Button>
    <Button type="button" onClick={onBack}>
      Voltar para a entrega
    </Button>
  </>
);

export default PaymentForm;
