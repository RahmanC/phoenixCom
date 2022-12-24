import axios from "axios";
import { FILTER_APPLE_ITEM } from "./../constants/productCategoryReducer";
import { baseUrl } from "./productActions";

export const filterproductCategory = (id) => async (dispatch) => {
  const { data } = await axios.get(`${baseUrl}/api/products/${id}`);

  dispatch({
    type: FILTER_APPLE_ITEM,
    payload: data,
    // {
    //   // product: data.id,
    //   // name: data.productName,
    //   // image: data.imagePath,
    //   // price: data.productPrice,
    //   // brand: data.brand,
    //   // category: data.productCategory,
    // },
  });
};
