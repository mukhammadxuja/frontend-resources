const RoundedButton = ({ title }) => {
  return (
    <button className="rounded-xl border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-morePurple">
      {title}
    </button>
  );
};

export default RoundedButton;
