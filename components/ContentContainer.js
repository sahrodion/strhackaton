export default function ContentContainer({ children, cls }) {
  return <div className={`w-11/12 max-w-[2560px] ${cls}`}>{children}</div>;
}
