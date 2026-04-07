import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  savedRooms: [],
  loginmodal: false,
  registermodal: false,
  isCategoryModal:false,
  isDeleteModal:false,
  isSizeModal:false,
  isColorModal:false,
  isProductModal:false,
  sizeId:null,
  productId:null,
  categoryId:null,
  colorId:null,
  deleteId:null
};

export const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    onLoginModal: (state, _action) => {
      state.loginmodal = true;
    },
    offLoginModal: (state, _action) => {
      state.loginmodal = false;
    },

    onRegisterModal: (state, _action) => {
      state.registermodal = true;;
    },
    offRegisterModal: (state, _action) => {
      state.registermodal = false;
    },
    onCategoryModal: (state, action) => {
      state.isCategoryModal = true;
      state.categoryId = action.payload
    },
    offCategoryModal: (state, action) => {
      state.isCategoryModal = false;
      state.categoryId = null
    },
    onSizeModal: (state, action) => {
      state.isSizeModal = true;
      state.sizeId = action.payload
    },
    offSizeModal: (state, action) => {
      state.isSizeModal = false;
      state.sizeId = null
    },
    onColorModal: (state, action) => {
      state.isColorModal = true;
      state.colorId = action.payload
    },
    offColorModal: (state, action) => {
      state.isColorModal = false;
      state.colorId = null
    },
    onProductModal: (state, action) => {
      state.isProductModal = true;
      state.productId = action.payload
    },
    offProductModal: (state, action) => {
      state.isProductModal = false;
      state.productId = null
    },

    onDeleteModal: (state, action) => {
      state.isDeleteModal = true;
      state.deleteId = action.payload
    },
    offDeleteModal: (state, action) => {
      state.isDeleteModal = false;
      state.deleteId = null
    },
  },
});

export const {
  onLoginModal,
  offLoginModal,
  onRegisterModal,
  offRegisterModal,
  onCategoryModal,
  offCategoryModal,
  onSizeModal,
  offSizeModal,
  onColorModal,
  offColorModal,
  onDeleteModal,
  offDeleteModal,
  onProductModal,
  offProductModal,
} = modalSlice.actions;

export default modalSlice.reducer;
