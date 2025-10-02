import { ErrorMessage, useFormikContext } from "formik";
import {
  Title,
  FormGroup,
  Input,
  Button,
  ErrorText,
  MaskedInput,
} from "../styles";
import type { CheckoutPayload } from "../../../types";

type Props = {
  onBack: () => void;
};

const DeliveryForm = ({ onBack }: Props) => {
  const formik = useFormikContext<CheckoutPayload>();

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName
      .split(".")
      .reduce((obj, key) => obj?.[key], formik.touched as any);
    const hasError = fieldName
      .split(".")
      .reduce((obj, key) => obj?.[key], formik.errors as any);
    return isTouched && hasError;
  };

  return (
    <>
      <Title>Entrega</Title>
      <FormGroup>
        <label htmlFor="receiver">Quem irá receber</label>
        <Input
          id="receiver"
          name="delivery.receiver"
          value={formik.values.delivery.receiver}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={checkInputHasError("receiver") ? "error" : ""}
        />
        <ErrorMessage name="delivery.receiver" component={ErrorText} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="address">Endereço</label>
        <Input
          id="address"
          name="delivery.address.description"
          value={formik.values.delivery.address.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={checkInputHasError("description") ? "error" : ""}
        />
        <ErrorMessage
          name="delivery.address.description"
          component={ErrorText}
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="city">Cidade</label>
        <Input
          id="city"
          name="delivery.address.city"
          value={formik.values.delivery.address.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={checkInputHasError("city") ? "error" : ""}
        />
        <ErrorMessage name="delivery.address.city" component={ErrorText} />
      </FormGroup>

      <div style={{ display: "flex", gap: "34px" }}>
        <FormGroup style={{ flex: 1 }}>
          <label htmlFor="zipCode">CEP</label>
          <MaskedInput
            id="zipCode"
            name="delivery.address.zipCode"
            mask="99999-999"
            value={formik.values.delivery.address.zipCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={checkInputHasError("zipCode") ? "error" : ""}
          />
          <ErrorMessage name="delivery.address.zipCode" component={ErrorText} />
        </FormGroup>

        <FormGroup style={{ flex: 1 }}>
          <label htmlFor="number">Número</label>
          <Input
            id="number"
            name="delivery.address.number"
            type="number"
            value={formik.values.delivery.address.number as any}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={checkInputHasError("number") ? "error" : ""}
          />
          <ErrorMessage name="delivery.address.number" component={ErrorText} />
        </FormGroup>
      </div>

      <FormGroup>
        <label htmlFor="complement">Complemento (opcional)</label>
        <Input
          id="complement"
          name="delivery.address.complement"
          value={formik.values.delivery.address.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </FormGroup>

      <Button type="submit">Continuar com o pagamento</Button>
      <Button type="button" onClick={onBack}>
        Voltar para o carrinho
      </Button>
    </>
  );
};

export default DeliveryForm;
