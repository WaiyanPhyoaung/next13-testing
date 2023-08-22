export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>[from about layout]</h2>
      {children}
    </div>
  );
}
