import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import DeliveryForm from "./components/DeliveryForm";
import PaymentForm from "./components/PaymentForm";
import Confirmation from "./components/Confirmation";

type Props = {
  backToCart: () => void;
  finishOrder: () => void;
};

const Checkout = ({ backToCart, finishOrder }: Props) => {
  const [step, setStep] = useState<"delivery" | "payment" | "confirmation">(
    "delivery"
  );

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
              name: Yup.string().required("Obrigatório"),
            }),
          })
        : schema
    ),
  });

  return (
    <Formik
      initialValues={{
        delivery: {
          receiver: "",
          address: {
            description: "",
            city: "",
            zipCode: "",
            number: "",
            complement: "",
          },
        },
        payment: { card: { name: "" } },
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("Dados a serem enviados para a API:", values);

        setStep("confirmation");
      }}
    >
      {() => (
        <Form>
          {step === "delivery" && (
            <DeliveryForm
              onNext={() => setStep("payment")}
              onBack={backToCart}
            />
          )}
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
