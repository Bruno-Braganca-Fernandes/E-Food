import { ErrorMessage, useFormikContext } from "formik";
import { useSelector } from "react-redux";

import { RootState } from "../../../store";
import {
  Title,
  Button,
  FormGroup,
  Input,
  ErrorText,
  MaskedInput,
} from "../styles";
import type { CheckoutPayload } from "../../../types";

type Props = {
  onBack: () => void;
  disabled?: boolean;
};

const PaymentForm = ({ onBack }: Props) => {
  const formik = useFormikContext<CheckoutPayload>();

  const { items } = useSelector((state: RootState) => state.cart);
  const valorTotal = items
    .reduce((acc, item) => acc + item.preco, 0)
    .toFixed(2);

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
      <Title>Pagamento - Valor a pagar R$ {valorTotal}</Title>

      <FormGroup>
        <label htmlFor="cardName">Nome no cartão</label>
        <Input
          id="cardName"
          name="payment.card.name"
          value={formik.values.payment.card.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={checkInputHasError("payment.card.name") ? "error" : ""}
        />
        <ErrorMessage name="payment.card.name" component={ErrorText} />
      </FormGroup>

      <div style={{ display: "flex", gap: "34px" }}>
        <FormGroup style={{ flex: 2 }}>
          <label htmlFor="cardNumber">Número do cartão</label>
          <MaskedInput
            id="cardNumber"
            name="payment.card.number"
            mask="9999.9999.9999.9999"
            value={formik.values.payment.card.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={checkInputHasError("payment.card.number") ? "error" : ""}
          />
          <ErrorMessage name="payment.card.number" component={ErrorText} />
        </FormGroup>
        <FormGroup style={{ flex: 1 }}>
          <label htmlFor="cardCode">CVV</label>
          <MaskedInput
            id="cardCode"
            name="payment.card.code"
            mask="999"
            value={String(formik.values.payment.card.code)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={checkInputHasError("payment.card.code") ? "error" : ""}
          />
          <ErrorMessage name="payment.card.code" component={ErrorText} />
        </FormGroup>
      </div>

      <div style={{ display: "flex", gap: "34px" }}>
        <FormGroup style={{ flex: 1 }}>
          <label htmlFor="cardMonth">Mês de vencimento</label>
          <MaskedInput
            id="cardMonth"
            name="payment.card.expires.month"
            mask="99"
            value={String(formik.values.payment.card.expires.month)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              checkInputHasError("payment.card.expires.month") ? "error" : ""
            }
          />
          <ErrorMessage
            name="payment.card.expires.month"
            component={ErrorText}
          />
        </FormGroup>
        <FormGroup style={{ flex: 1 }}>
          <label htmlFor="cardYear">Ano de vencimento</label>
          <MaskedInput
            id="cardYear"
            name="payment.card.expires.year"
            mask="99"
            value={String(formik.values.payment.card.expires.year)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              checkInputHasError("payment.card.expires.year") ? "error" : ""
            }
          />
          <ErrorMessage
            name="payment.card.expires.year"
            component={ErrorText}
          />
        </FormGroup>
      </div>

      <Button type="submit">Finalizar pagamento</Button>
      <Button type="button" onClick={onBack}>
        Voltar para a edição de endereço
      </Button>
    </>
  );
};

export default PaymentForm;
