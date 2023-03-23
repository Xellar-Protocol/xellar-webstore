type BarProps = {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
  barClassName?: string;
};

export default function Bar({
  label,
  containerClassName,
  labelClassName,
  barClassName,
}: BarProps) {
  return (
    <div className={containerClassName}>
      <p className={labelClassName}>{label}</p>
      <div className={barClassName} />
    </div>
  );
}
