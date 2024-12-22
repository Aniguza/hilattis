import { Navigate } from "react-router-dom";

export const RutasProtegidas = ({ isAllowed, children }) => {
  const canAccess = isAllowed || localStorage.getItem("canAccess") === "true";

  if (!canAccess) {
    // Si el acceso no está permitido, redirigir al inicio
    return <Navigate to="/" replace />;
  }

  return children;
};
