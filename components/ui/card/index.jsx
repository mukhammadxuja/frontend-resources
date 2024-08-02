import Image from 'next/image';

const Card = (props) => {
  const { image, label, description, link, hashtags, index } = props;

  return (
    <div
      key={index}
      className={`group w-full space-y-3 overflow-x-hidden rounded-xl border-2 border-border bg-transparent p-3 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-4 lg:p-5`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-full items-center">
          <div className="rounded-xl bg-slate-50 p-1 dark:bg-transparent">
            <Image
              src={image}
              className="rounded-lg"
              width={45}
              height={45}
              layout="fixed"
              alt=""
            />
          </div>
          <h4 className="ml-2 w-full text-lg font-semibold text-primary md:ml-3 md:text-xl">
            {label}
          </h4>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-base !leading-tight text-muted line-clamp-2 md:text-base mb-5">
          {description}
          {/* <span className="cursor-pointer underline">more</span> */}
        </p>
        <div className="flex items-center space-x-2">
          {hashtags.slice(0, 1).map((hashtag, index) => (
            <span
              key={index}
              className={`text-[13px flex w-fit select-none items-center whitespace-nowrap rounded-[8px] bg-background px-2 py-1 text-center font-semibold leading-[1.3em] tracking-[-0.1px] text-primary duration-300 hover:bg-opacity-95 active:translate-y-0.5 md:w-fit`}
            >
              #{hashtag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn_primary w-full"
        >
          Go to Page
        </a>
      </div>
    </div>
  );
};

export default Card;
