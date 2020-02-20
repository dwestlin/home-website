import db from "./Database/Firestore";

export const fetchData = (dispatch: any): any => {
  const expenseData: any = [];
  db.collection("expenses")
    .get()
    .then(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        let data = {
          name: doc.data().name,
          id: doc.id,
          amount: doc.data().amount
        };
        expenseData.push(data);
      });
    });
  dispatch({
    type: "FETCH_DATA",
    payload: expenseData
  });
  return expenseData;
};
