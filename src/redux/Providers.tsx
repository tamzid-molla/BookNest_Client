"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthProvider from "@/auth/AuthProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <AuthProvider>{children}</AuthProvider>
    </Provider>
  );
};

export default Providers;
