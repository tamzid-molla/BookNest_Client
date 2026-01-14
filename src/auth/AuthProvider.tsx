"use client";

import { useProfileQuery } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

interface IStyle {
          position: string;
          top: number;
          left: number;
          width: string;
          height: string;
          display: string;
          justifyContent: string;
          alignItems: string;
          backgroundColor: string;
          zIndex: number ;
    }

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { error, data, isLoading } = useProfileQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) dispatch(setUser(data));
  }, [data, dispatch]);

  if (isLoading) {
      const overlayStyle : IStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
      zIndex: 9999, // Ensure it's above all other content
    };

    return <div style={overlayStyle}>
      <ClipLoader color="#36D7B7" size={50} aria-label="Loading Spinner" />
    </div>
  }

  return <>{children}</>;
};

export default AuthProvider;
