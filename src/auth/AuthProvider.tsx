"use client";

import { useProfileQuery } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { error, data, isLoading } = useProfileQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setUser(data));
  }, [data, dispatch]);
  return <>{children}</>;
};

export default AuthProvider;
