export default function Navbar() {
  const flexBetween = "flex items-center justify-between";
  return (
    <div className={`${flexBetween} fixed z-30 top-0 shadow bg-gray-800 py-6 `}>
      <div className={`${flexBetween} mx-auto w-full`}>
        <div className={`${flexBetween} w-full gap-10`}></div>
      </div>
    </div>
  );
}
