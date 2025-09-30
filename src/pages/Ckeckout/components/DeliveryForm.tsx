import { Field, ErrorMessage, useFormikContext } from "formik";
import { Title, FormGroup, Input, Button, ErrorText } from "../styles";

type Props = {
  onNext: () => void;
  onBack: () => void;
};

const InputField = ({
  name,
  ...props
}: {
  name: string;
  [key: string]: any;
}) => {
  const { errors, touched } = useFormikContext<any>();
  const hasError = touched[name] && errors[name];
  return (
    <Field
      as={Input}
      name={name}
      className={hasError ? "error" : ""}
      {...props}
    />
  );
};

const DeliveryForm = ({ onNext, onBack }: Props) => (
  <>
    <Title>Entrega</Title>
    <FormGroup>
      <label htmlFor="receiver">Quem irá receber</label>
      <InputField name="delivery.receiver" id="receiver" />
      <ErrorMessage name="delivery.receiver" component={ErrorText} />
    </FormGroup>
    <FormGroup>
      <label htmlFor="address">Endereço</label>
      <InputField name="delivery.address.description" id="address" />
      <ErrorMessage name="delivery.address.description" component={ErrorText} />
    </FormGroup>

    <FormGroup>
      <label htmlFor="city">Cidade</label>
      <InputField name="delivery.address.city" id="city" />
      <ErrorMessage name="delivery.address.city" component={ErrorText} />
    </FormGroup>

    <div style={{ display: "flex", gap: "34px" }}>
      <FormGroup style={{ flex: 1 }}>
        <label htmlFor="zipCode">CEP</label>
        <InputField name="delivery.address.zipCode" id="zipCode" />
        <ErrorMessage name="delivery.address.zipCode" component={ErrorText} />
      </FormGroup>
      <FormGroup style={{ flex: 1 }}>
        <label htmlFor="number">Número</label>
        <InputField name="delivery.address.number" id="number" type="number" />
        <ErrorMessage name="delivery.address.number" component={ErrorText} />
      </FormGroup>
    </div>

    <FormGroup>
      <label htmlFor="complement">Complemento (opcional)</label>
      <InputField name="delivery.address.complement" id="complement" />
      <ErrorMessage name="delivery.address.complement" component={ErrorText} />
    </FormGroup>

    <Button type="button" onClick={onNext}>
      Continuar com o pagamento
    </Button>
    <Button type="button" onClick={onBack}>
      Voltar para o carrinho
    </Button>
  </>
);

export default DeliveryForm;
