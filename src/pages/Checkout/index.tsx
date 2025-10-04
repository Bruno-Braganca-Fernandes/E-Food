import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { clearCart } from "../../store/reducers/cart";
import { useCheckoutMutation } from "../../services/api";
import type { CheckoutPayload } from "../../types";
import DeliveryForm from "./components/DeliveryForm";
import PaymentForm from "./components/PaymentForm";
import Confirmation from "./components/Confirmation";
import { RootState } from "../../store";

const currentYearTwoDigits = new Date().getFullYear() % 100;

const initialValues = {
  delivery: {
    receiver: "",
    address: {
      description: "",
      city: "",
      zipCode: "",
      number: 0,
      complement: "",
    },
  },
  payment: {
    card: {
      name: "",
      number: "",
      code: "",
      expires: {
        month: "",
        year: "",
      },
    },
  },
};

type Props = {
  backToCart: () => void;
  finishOrder: () => void;
};

const Checkout = ({ backToCart, finishOrder }: Props) => {
  const [step, setStep] = useState<"delivery" | "payment" | "confirmation">(
    "delivery"
  );
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [purchase, { isLoading }] = useCheckoutMutation();

  const [orderId, setOrderId] = useState("");

  const validationSchema = Yup.object().shape({
    delivery: Yup.object().when((_, schema) =>
      step === "delivery"
        ? schema.shape({
            receiver: Yup.string()
              .trim()
              .min(3, "O nome deve ter no mínimo 3 letras")
              .matches(
                /^[a-zA-ZÀ-ú\s]+$/,
                "O campo não deve conter números ou caracteres especiais"
              )
              .required("O campo 'quem irá receber' é obrigatório"),
            address: Yup.object().shape({
              description: Yup.string()
                .trim()
                .min(10, "O endereço deve ter no mínimo 10 caracteres")
                .required("O campo 'endereço' é obrigatório"),
              city: Yup.string()
                .trim()
                .min(3, "A cidade deve ter no mínimo 3 letras")
                .matches(
                  /^[a-zA-ZÀ-ú\s]+$/,
                  "O campo não deve conter números ou caracteres especiais"
                )
                .required("O campo 'cidade' é obrigatório"),
              zipCode: Yup.string()
                .transform((value) => value.replace(/_/g, ""))
                .length(9, "O CEP está incompleto")
                .required("O campo 'CEP' é obrigatório"),
              number: Yup.string().required("O campo 'número' é obrigatório"),
            }),
          })
        : schema
    ),
    payment: Yup.object().when((_, schema) =>
      step === "payment"
        ? schema.shape({
            card: Yup.object().shape({
              name: Yup.string()
                .trim()
                .min(3, "O nome deve ter no mínimo 3 letras")
                .matches(
                  /^[a-zA-ZÀ-ú\s]+$/,
                  "O campo não deve conter números ou caracteres especiais"
                )
                .required("O nome é obrigatório"),
              number: Yup.string().required("O número é obrigatório"),
              code: Yup.string()
                .transform((value) => value.replace(/_/g, ""))
                .length(3, "O CVV deve ter 3 dígitos")
                .required("O CVV é obrigatório"),
              expires: Yup.object().shape({
                month: Yup.number()
                  .transform((value, originalValue) => {
                    if (
                      typeof originalValue === "string" &&
                      (originalValue.trim() === "" ||
                        originalValue.includes("_"))
                    ) {
                      return undefined;
                    }
                    return value;
                  })
                  .min(1, "Mês inválido")
                  .max(12, "Mês inválido")
                  .required("O mês é obrigatório"),
                year: Yup.number()
                  .transform((value, originalValue) => {
                    if (
                      typeof originalValue === "string" &&
                      (originalValue.trim() === "" ||
                        originalValue.includes("_"))
                    ) {
                      return undefined;
                    }
                    return value;
                  })
                  .min(
                    currentYearTwoDigits,
                    `O ano não pode ser anterior a ${new Date().getFullYear()}`
                  )
                  .required("O ano é obrigatório"),
              }),
            }),
          })
        : schema
    ),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        if (step === "delivery") {
          setStep("payment");
        } else {
          try {
            const payload: CheckoutPayload = {
              products: items.map((item) => ({
                id: item.id,
                price: item.preco,
              })),
              delivery: values.delivery,
              payment: {
                card: {
                  name: values.payment.card.name,
                  number: values.payment.card.number,
                  code: Number(values.payment.card.code),
                  expires: {
                    month: Number(values.payment.card.expires.month),
                    year: Number(values.payment.card.expires.year),
                  },
                },
              },
            };
            const response = await purchase(payload);

            if (response.data) {
              setOrderId(response.data.orderId);
              dispatch(clearCart());
              setStep("confirmation");
            }
          } catch (error) {
            console.error("Erro ao finalizar a compra:", error);
            alert("Ocorreu um erro ao finalizar a compra. Tente novamente.");
          }
        }
      }}
      validateOnChange={false}
      validateOnBlur={false}
    >
      {() => (
        <Form>
          {step === "delivery" && (
            <DeliveryForm onBack={backToCart} disabled={isLoading} />
          )}
          {step === "payment" && (
            <PaymentForm
              onBack={() => setStep("delivery")}
              disabled={isLoading}
            />
          )}
          {step === "confirmation" && (
            <Confirmation orderId={orderId} onFinish={finishOrder} />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
