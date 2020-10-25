import { combineReducers } from "redux";
import {products,productR} from "./products_r";
import {cart} from "./cartR";

import {authR} from "./AuthR";

export default combineReducers({
products,
authR,
productR,
cart
});