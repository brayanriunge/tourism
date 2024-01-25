type childrenProp = {
  children: React.ReactNode;
};
export default function Layout({ children }: childrenProp) {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 min-h-screen">
      {children}
    </div>
  );
}
