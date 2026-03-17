import "./MyLabel.css";

export interface MyLabelProps {
  /**
   * Text to be displayed in the label
   * **/
  label: string;

  /**
   * Label size
   * **/
  size: "normal" | "h1" | "h2" | "h3";

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
  backgroundColor?: string;
}

export const MyLabel = ({
  label,
  size,
  allCaps = false,
  color,
  backgroundColor,
}: MyLabelProps) => {
  return (
    <span className={`${size} ${color} label`} style={{ backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
