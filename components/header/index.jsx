const RoundedButton = ({ title }) => {
  return (
    <button className="rounded-full border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-purple-500">
      {title}
    </button>
  );
};

const Header = () => {
  return (
    <header className="container mx-auto mt-44 flex flex-col items-center justify-center py-10">
      <div className="space-y-4">
        <h1 className="mx-auto w-fit text-5xl font-bold text-slate-700">
          Find Everything About Frontend.
        </h1>
        <h1 className="animation_gradient_text mx-auto w-fit text-5xl font-bold text-transparent">
          Frontend Resources.
        </h1>
      </div>
    </header>
  );
};

export default Header;
