import Footer from "@/components/Footer";
import styles from "../styles/About.module.scss";
// import styles from "../styles/About.module.css";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About File</title>
        <meta name="description" content="this is the demo about app" />
      </Head>
      {/* <h2>About Page</h2> ----- global style */}
      {/* using an external lib bootsrap lib */}
      <button className="btn btn-success">
        Primary --bootstrap-- external lib
      </button>
      {/* <div className={styles.highlight}>About Page --component level style</div> */}
      <div className={styles.highlightscss}>
        About Page --using saas variable
      </div>
      <h1 className="content">About</h1>
    </>
  );
}

//no same classname name conflict, can be the class in global style as well with same as concern lies with the component only.. css modules won't collide with global classname as well.

About.getLayout = function PageLayout(page: any) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
//   // IF we want the about page to only have the footer after this go to
//   // _app.tsx file and check if getLayout .
