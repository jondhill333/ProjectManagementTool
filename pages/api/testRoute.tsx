import dbConnect from "../../util/dbconnect";

dbConnect();

export default async function (req, res) {
  res.json({ test: "test" });
}
