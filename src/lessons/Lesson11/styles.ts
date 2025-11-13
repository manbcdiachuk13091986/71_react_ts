import type { CSSProperties } from "react";
export const Lesson11Wrapper: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
//   textAlign: "center",
  height: "100vh", 
  margin: "30px",
};

export const SpinnerContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  justifyContent: "center",
  margin: "20px",
};

export const Spinner = {
  border: "6px solid #f3f3f3",
  borderTop: "6px solid #3498db",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  animation: "spin 1s linear infinite",
};

export const ErrorText = {
  color: "red",
  fontWeight: "bold",
};

export const ImageStyle = {
  width: "400px",
  borderRadius: "10px",
  boxShadow: "0 0 10px #eecacaff",
};

export const ButtonContainer = {
  marginTop: "20px",
};

export const ButtonStyle: CSSProperties = {
  padding: " 20px",
  backgroundColor: "#1b72abff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px",
  transition: "background-color 0.3s ease",
};

export const SpinnerKeyframes = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
