export const Hamburger = () => {
  return (
    <button className="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light text-white">
      <svg
        className="h-3 w-3 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  );
};
