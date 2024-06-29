import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify"; // Assuming you're using react-toastify

function Message({ content }) {
  return <p>{content}</p>;
}

function PayPal() {
  const initialOptions = {
    "client-id": "ATVPCZs8COpxYjWJ7H2-ewghyKKyMJVyK9svPmUSWkwXGSeaFS0sDnLEmoooL-uTPb8Kr8sLHIdb-iyM",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  const [message, setMessage] = useState("");

  const options = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  return (
    <div className="AppCheckout">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            shape: "pill",
            layout: "vertical",
          }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "5.50", // Example amount, replace with your actual amount
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            try {
              const order = await actions.order.capture();
              setMessage(
                `Transaction ${order.status}: ${order.id}. See console for all available details.`,
              );
              toast.success("تم الدفع بنجاح، يرجى إرسال نسخة من إيصال الدفع مع بياناتك وطلبك على أرقامنا أو عبر قسم الطلبات الخاص بالموقع", options);
              console.log("Capture result", order);
            } catch (error) {
              console.error(error);
              toast.success("تم الدفع بنجاح، يرجى إرسال نسخة من إيصال الدفع مع بياناتك وطلبك على أرقامنا أو عبر قسم الطلبات الخاص بالموقع", options);
            }
          }}
        >
        </PayPalButtons>
      </PayPalScriptProvider>
      <Message content={message} />
    </div>
  );
}

export default PayPal;
