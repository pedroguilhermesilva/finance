import { payments } from "../../../components/TransactionTable/typeTable";

export default function handler(req, res) {
  let data;
  // console.log(req.body);
  const request = req.body;
  // data = [...payments.value];
  // data.push(request);

  payments.value.push(request);
  // console.log(payments.value);
  // transactions.push(req.body)
  res.status(200).json("Transacação criada com sucesso");
}
