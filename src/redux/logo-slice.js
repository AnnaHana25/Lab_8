import { createSlice } from "@reduxjs/toolkit"

const initialState = "./src/logo192.png"

const imageUrl = createSlice({
  name: "imageUrl",
  initialState,
  reducers: {},
})

export default imageUrl.reducer
