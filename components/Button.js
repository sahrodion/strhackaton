export default function Button({
  outline,
  children,
  cls_b,
  gradient,
  onClick,
}) {
  return (
    <div
      className={`w-fit px-4 py-3 rounded-full flex items-center justify-center cursor-pointer select-none ${
        outline
          ? "border-blue-100 border-2 border"
          : "bg-blue-100"
      }
      ${
        gradient ? "bg-gradient-to-t from-blue-100 to-transparent" : ""
      } ${cls_b}`}
      onClick={onClick}
    >
      <span className={outline ? `text-blue-100` : "text-white"}>
        {children}
      </span>
    </div>
  );
}
