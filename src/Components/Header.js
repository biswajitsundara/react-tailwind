const Header = () => {
  return (
    <div className="flex justify-between lg:bg-blue-200 shadow-lg sm:bg-amber-100">
      <div>
        <img
          src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
          className="w-24"
          alt=""
        />
      </div>

      <div className="">
        <ul className="flex items-center gap-5 p-4 m-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
