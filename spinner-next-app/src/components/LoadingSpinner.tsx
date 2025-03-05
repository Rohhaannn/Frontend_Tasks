import styles from "./LoadingSpinner.module.css";

interface LoadingSpinnerProps {
  color?: string;
  size?: "small" | "medium" | "large" | "extralarge"; 
  text?: string;
}

export default function LoadingSpinner({
  color,
  size,
  text
}: LoadingSpinnerProps) {
  return (
    <div className={styles.spinnerWrapper}>
      <div
        className={`${styles.loadingSpinner} ${styles[`loadingSpinner--${size}`]}`}
        style={{ borderTopColor: color }}
      ></div>
      {text && <span className={styles.spinnerText}>{text}</span>}
    </div>
  );
}
