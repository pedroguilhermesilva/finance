import nookies from "nookies";
import { db } from "../firebase";

export type WhereFilterOp =
  | "<"
  | "<="
  | "=="
  | "!="
  | ">="
  | ">"
  | "array-contains"
  | "in"
  | "array-contains-any"
  | "not-in";

export type User = {
  avatar: string;
  id: string;
  name: string;
};

export const readData = async () => {
  const { userInfo } = parseCookies();
  console.log(userInfo);
  try {
    const collection = await db.collection("users");
    return await collection.doc().set({
      name: "Pedro",
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataSearchByOne = async (
  user: User,
  collectionName: string,
  fieldOfCollection: string,
  valueWantFind: string,
  symbol: WhereFilterOp
) => {
  if (user) {
    try {
      let allValues = [];

      const collection = db.collection(collectionName);
      await collection
        .where(fieldOfCollection, symbol, valueWantFind)
        .get()
        .then((doc) => {
          doc.docs.forEach((data) => {
            allValues.push(data.data());
          });
        });
      return allValues.length > 1 ? [] : allValues;
    } catch (error) {
      console.log(error);
    }
  } else {
    return [];
  }
};
