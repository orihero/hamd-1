import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meals: [],
  paymentType: null,
  curierId: null,
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    clearOrder: () => {
      return initialState;
    },
    addMeal: (state, action) => {
      console.log("====================================");
      console.log({ action });
      console.log("====================================");
      const meals = state.meals.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });

      if (meals.find((item) => item.id == action.payload.id) == undefined) {
        meals.push(action.payload);
      }
      return {
        ...state,
        meals: [...meals],
      };
    },
    increment: (state, action) => {
      const minus = state.meals.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        }
        return item;
      });
      if (minus.find((item) => item.id == action.payload.id) == undefined) {
        minus.push(action.payload);
      }
      return {
        ...state,
        allPlus: [...minus],
      };
    },
    decrement: (state, action) => {
      const plus = state.meals.map((item) => {
        if (item.id == action.payload.id) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });
      if (plus.find((item) => item.id == action.payload.id) == undefined) {
        plus.push(action.payload);
      }
      return {
        ...state,
        allMinus: [...plus],
      };
    },
    setPaymentType: (state, paymentType) => {
      return {
        ...state,
        paymentType,
      };
    },
  },
});
export const { addMeal, setPaymentType, clearOrder, increment, decrement } =
  orderSlice.actions;
export default orderSlice.reducer;
