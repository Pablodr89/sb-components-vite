import "./MyLabel.css";

interface Props {
  /**
   * Text to be displayed in the label
   * **/
  label: string;

  /**
   * Label size
   * **/
  size?: "normal" | "h1" | "h2" | "h3";

  /**
   * Capitalize text
   * **/
  allCaps?: boolean;

  /**
   * Color of the label text
   * **/
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Color of the label text with custom value
   * **/
  fontColor?: string;
}

export default function MyLabel({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
}: Props) {
  return (
    <span className={`${size} ${color} label`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
}
