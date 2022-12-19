import Link from 'next/link';

const RoundedButton = ({ setCardTag, title, link = `#${title}` }) => {
  const handleSetTagName = () => setCardTag(title);
  return (
    <Link href={link}>
      <button
        onClick={handleSetTagName}
        className="whitespace-nowrap rounded-xl border-2 border-slate-300 px-8 py-2 font-semibold text-slate-700 duration-200 hover:border-morePurple md:mt-3"
      >
        {title}
      </button>
    </Link>
  );
};

export default RoundedButton;
