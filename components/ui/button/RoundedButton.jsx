const RoundedButton = ({ title }) => {
  return (
    <button className="rounded-full border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-purple-500">
      {title}
    </button>
  );
};

export default RoundedButton;
