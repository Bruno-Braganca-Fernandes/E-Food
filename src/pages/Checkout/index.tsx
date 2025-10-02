import { useState } from "react";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import type { CheckoutPayload } from "../../types";
import DeliveryForm from "./components/DeliveryForm";
import PaymentForm from "./components/PaymentForm";
import Confirmation from "./components/Confirmation";
import { RootState } from "../../store";

const initialValues: Omit<CheckoutPayload, "products"> = {
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
      code: 0,
      expires: {
        month: 0,
        year: 0,
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

  const validationSchema = Yup.object().shape({
    delivery: Yup.object().when((_, schema) =>
      step === "delivery"
        ? schema.shape({
            receiver: Yup.string().required(
              "O campo 'quem irá receber' é obrigatório"
            ),
            address: Yup.object().shape({
              description: Yup.string().required(
                "O campo 'endereço' é obrigatório"
              ),
              city: Yup.string().required("O campo 'cidade' é obrigatório"),
              zipCode: Yup.string().required("O campo 'CEP' é obrigatório"),
              number: Yup.string().required("O campo 'número' é obrigatório"),
            }),
          })
        : schema
    ),
    payment: Yup.object().when((_, schema) =>
      step === "payment"
        ? schema.shape({
            card: Yup.object().shape({
              name: Yup.string().required("O nome é obrigatório"),
              number: Yup.string().required("O número é obrigatório"),
              code: Yup.string().required("O CVV é obrigatório"),
              expires: Yup.object().shape({
                month: Yup.string().required("O mês é obrigatório"),
                year: Yup.string().required("O ano é obrigatório"),
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
      onSubmit={(values) => {
        if (step === "delivery") {
          setStep("payment");
        } else {
          const payload: CheckoutPayload = {
            products: items.map((item) => ({
              id: item.id,
              price: item.preco,
            })),
            delivery: values.delivery,
            payment: values.payment,
          };
          console.log("Enviando para a API:", payload);
          setStep("confirmation");
        }
      }}
    >
      {() => (
        <Form>
          {step === "delivery" && <DeliveryForm onBack={backToCart} />}
          {step === "payment" && (
            <PaymentForm onBack={() => setStep("delivery")} />
          )}
          {step === "confirmation" && <Confirmation onFinish={finishOrder} />}
        </Form>
      )}
    </Formik>
  );
};

export default Checkout;
