const RoundedButton = ({ title }) => {
  return (
    <button className="rounded-full border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-purple-500">
      {title}
    </button>
  );
};

const Header = () => {
  return (
    <header className="container mx-auto mt-20 mb-10 flex flex-col md:mb-0 md:mt-32 md:items-center md:justify-center md:py-10 lg:mt-44">
      <div className="space-y-2 lg:space-y-4">
        <h1 className="w-fit text-3xl font-bold text-slate-700 md:mx-auto md:text-4xl lg:text-5xl">
          Find Everything About Frontend.
        </h1>
        <h1 className="animation_gradient_text w-fit text-3xl font-bold text-transparent md:mx-auto md:text-4xl lg:text-5xl">
          Frontend Resources.
        </h1>
      </div>
    </header>
  );
};

export default Header;
