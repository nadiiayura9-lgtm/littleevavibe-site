npm init -y

npm install express axios crypto cors body-parser
const express = require("express");

const crypto = require("crypto");

const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

// 🔐 ТВОЇ ДАНІ (з WayForPay)

const MERCHANT = "YOUR_MERCHANT_ID";

const SECRET = "YOUR_SECRET_KEY";

// 💳 створення платежу

app.post("/create-payment", (req, res) => {

  const { amount, orderId, products } = req.body;

  let productNames = products.map(p => p.name).join(", ");

  let signatureString =

    MERCHANT + ";" +

    orderId + ";" +

    amount + ";UAH;" +

    productNames + ";" +

    SECRET;

  let signature = crypto

    .createHash("md5")

    .update(signatureString)

    .digest("hex");

  res.json({

    merchantAccount: MERCHANT,

    orderReference: orderId,

    amount,

    currency: "UAH",

    productName: productNames,

    signature

  });

});

app.listen(3000, () => console.log("Server running on 3000"));
