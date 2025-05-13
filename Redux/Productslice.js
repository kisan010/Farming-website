import { createSlice } from "@reduxjs/toolkit";

const Productslice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addSeed: (state, action) => {
      console.log(state, action);
           let existingProduct=  state.products.find(item=>item.name===action.payload.name);
           if(existingProduct)
           {
             existingProduct.count=existingProduct.count+action.payload.count
           }
           else{
            state.products.push(action.payload)
           }
    },
    removeSeed: (state, action) => {
      state.products = state.products.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { addSeed, removeSeed } = Productslice.actions;
export default Productslice.reducer;
