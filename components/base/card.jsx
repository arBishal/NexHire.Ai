export default function Card({ title, subtitle = "", children, ...props }) {
  return (
    <div className="rounded-2xl border border-border-transparent bg-card-bg p-6 flex flex-col gap-4 items-start hover:scale-105 transition-transform duration-300" {...props}>
      <h3 className="text-2xl font-semibold">{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      {children}
    </div>
  );
}
