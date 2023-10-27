import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import store from "../../redux/store";
import { Provider } from "react-redux";
import "../../styles/globals.css"; // Asegúrate de mantener esta importación

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un retraso para la pantalla de carga (por ejemplo, 5 segundos)
    setTimeout(() => {
      setIsLoading(false); // Cuando finaliza la carga, ocultamos la pantalla de carga
    }, 5000); // Puedes ajustar el tiempo de carga aquí
  }, []);

  return (
    <Provider store={store}>
      {isLoading ? (
        // Muestra la pantalla de carga aquí
        <div className="loading-screen">
          <img src="../../../img/preloader.jpg" alt="Cargando..." />
        </div>
      ) : (
        // Renderiza el componente Layout y el contenido principal
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Provider>
  );
}

export default MyApp;
