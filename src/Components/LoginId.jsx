import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";
import "../style/LoginId.css";

const LoginId = () => {
  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated === false && (
      <div className="LoginId">
        <div className=" container">
          <div className="row">
            <div className="col-md-4 textInfo">
              Inicia sesión para unirte a nuestra comunidad en línea. Ingresa
              tus credenciales y descubre un mundo lleno de conexiones,
              historias emocionantes y nuevas amistades.
            </div>
            <div className="col-md-8">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginId;
