//the styles will be automatically applied to all pages becoz of exporting of global css file in app component.
// import styles from "../styles/Contact.module.css";
import styles from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <>
      <h2>Contact Global Style</h2>
      {/* <div className={styles.highlight}>Contact Component level style</div> */}
      <div className={styles.highlightscss}>
        Contact Page --using saas variable
      </div>
    </>
  );
}
