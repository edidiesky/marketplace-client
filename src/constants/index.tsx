import {
  ProfilePasswordDataItem,
  RegisterFormDataItem,
  LoginFormDataItem,
  ProfileFormDataItem,
} from "./types";



export const ProfileFormData: ProfileFormDataItem[] = [
  {
    id: 4,
    name: "name",
    type: "text",
    text: "Change your Name",
    label: "Alfred Dow",
    required: true,
  },
  {
    id: 43,
    name: "username",
    type: "text",
    text: "Change your preferred Name",
    label: "JohnDoe123",
    required: true,
  },
  {
    id: 1,
    name: "email",
    type: "email",
    text: "Change your Email",
    label: "hello@example.com",
    required: true,
  },
];
export const LoginFormData: LoginFormDataItem[] = [
  {
    id: 1,
    name: "email",
    type: "email",
    text: "Email",
    label: "hello@example.com",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    text: "Password",
    label: "my password",
    required: true,
  },
];
export const RegisterFormData: RegisterFormDataItem[] = [

  {
    id: 1,
    name: "email",
    type: "email",
    text: "Email",
    label: "hello@example.com",
    required: true,
  },
];
export const PasswordFormData: ProfilePasswordDataItem[] = [
  {
    id: 4,
    name: "password",
    type: "password",
    text: "Change your Password",
    label: "my password",
    required: true,
  },
  {
    id: 43,
    name: "confirmpassword",
    type: "password",
    text: "Change your preferred Password",
    label: "Confirm your password",
    required: true,
  },
];



// --------------------------- form Data List End --------------------

// ------------- API REQUEST ROUTE -----------------
export const BASE_URL = ""
  // process.env.NODE_ENV === "development" ? "http://localhost:4000" : "";

export const MESSAGE_URL = "http://localhost:4000/api/v1/message";
export const USERS_URL = "http://localhost:4000/api/v1/users";
export const AUTH_URL = "http://localhost:4001/api/v1/auth";
export const UPLOAD_URL = "http://localhost:4000/api/v1/upload";
export const STORE_URL = "http://localhost:4004/api/v1/store";
export const PRODUCT_URL = "http://localhost:4002/api/v1/product";
export const CATEGORY_URL = "http://localhost:4008/api/v1/categories";
export const COLOR_URL = "http://localhost:4006/api/v1/colors";
export const SIZE_URL = "http://localhost:4007/api/v1/size";
export const CART_URL = "http://localhost:4000/api/v1/cart";
export const INVENTORY_URL = "http://localhost:4000/api/v1/inventory";
export const WISHLIST_URL = "http://localhost:4000/api/v1/wishlist";
export const PAYMENT_URL = "http://localhost:4000/api/v1/payment";
export const RECOMMENDATION_URL = "http://localhost:4000/api/v1/recommendation";

// ------------- API REQUEST ROUTE END -----------------


// export const BASE_URL =
//   process.env.NODE_ENV === "development" ? "http://192.168.99.100:8000/" : "";

// export const MESSAGE_URL = "message";
// export const USERS_URL = "users";
// export const AUTH_URL = "auth";
// export const UPLOAD_URL = "upload";
// export const STORE_URL = "store";
// export const PRODUCT_URL = "product";
// export const CATEGORY_URL = "categories";
// export const COLOR_URL = "colors";
// export const SIZE_URL = "size";
// export const CART_URL = "cart";
// export const INVENTORY_URL = "inventory";
// export const WISHLIST_URL = "wishlist";
// export const PAYMENT_URL = "payment";
// export const RECOMMENDATION_URL = "recommendation";