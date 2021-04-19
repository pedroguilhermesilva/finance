export default function handler(req, res) {
  console.log(req.body);
  res.status(200).json("Categoria criada com sucesso");
}
