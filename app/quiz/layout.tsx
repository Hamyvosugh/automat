export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="min-h-screen bg-orange-100">
        {children}
      </div>
    )
  }