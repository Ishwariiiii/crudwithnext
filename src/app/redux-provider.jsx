"use client"

import store from "@/Redux/store"
import { Provider } from "react-redux"


export function ReduxProvider ({children} ) {
  return <Provider store={store}>{children}</Provider>
}
