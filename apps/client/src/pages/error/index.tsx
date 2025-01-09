import { ErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <div>
      lo sentimos, pero la aplicacion sufrio un error del que no se pudo
      recuperar
      <p>{error.data}</p>
    </div>
  );
}
