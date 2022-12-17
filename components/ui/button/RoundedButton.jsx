const RoundedButton = ({ setCardTag, title }) => {
  const handleSetTagName = () => setCardTag(title);
  return (
    <button onClick={handleSetTagName} className="rounded-xl whitespace-nowrap md:mt-3 border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-morePurple">
      {title}
    </button>
  );
};

export default RoundedButton;
