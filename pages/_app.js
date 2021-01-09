import "../styles/globals.css";
import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import UserContext from "../UserContext";
import jwt from "jsonwebtoken";
import axios from "axios";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const Authorization = async () => {
      let token = localStorage.getItem("auth-token");
      let isValidated;
      let userRes;
      let error = "";

      if (!token) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      if (token) {
        try {
          isValidated = await jwt.verify(token, "otta");
        } catch (eror) {
          console.log(error);
        }
      }
      if (isValidated) {
        userRes = await axios.post("/api/getUser", {
          id: isValidated.id,
        });
      } else {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      if (!userRes) {
        return;
      }
      setUserData({
        token: token,
        user: userRes.data.data._id,
      });
    };
    Authorization();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap"
          rel="stylesheet"
        />
        <title>Valentín Ottaviano | Personal website</title>
        <meta
          name="description"
          content="Estudiante de licenciatura en Física y desarrollador web autodidacta. Comprometido con el trabajo bien hecho y la innovación tecnológica."
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
        `,
          }}
        />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
