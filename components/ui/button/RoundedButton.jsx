import { MdArrowBackIosNew } from 'react-icons/md';

const RoundedButton = ({ setCardTag, title, subMenu, link = `#${title}` }) => {
  const handleSetTagName = () => setCardTag(title);
  console.log(typeof subMenu);
  return (
    <div onClick={handleSetTagName}>
      <button className="flex items-center justify-between whitespace-nowrap rounded-xl border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-morePurple md:mt-3">
        <span>{title}</span>
        {subMenu && <MdArrowBackIosNew className="mt-1 ml-2 -rotate-90" />}
      </button>
    </div>
  );
};

export default RoundedButton;
