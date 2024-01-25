import Navbar from "./Navbar";

type childrenProp = {
  children: React.ReactNode;
};
export default function Layout({ children }: childrenProp) {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-yellow-500 min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
