import Image from 'next/image';

const Card = (props) => {
  const { image, label, description, link, hashtags, index, cardTag } = props;

  return (
    <div
      key={index}
      className={`group h-64 w-full space-y-3 overflow-hidden rounded-xl border-2 border-border bg-transparent p-3 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-4 lg:p-5`}
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex h-16 w-full items-center">
            <div className="rounded-xl bg-slate-50 p-1 dark:bg-transparent">
              <Image
                src={image}
                className="h-full w-full rounded-lg object-cover"
                width={45}
                height={45}
                quality={90}
                loading="lazy"
                alt={`${label} card image`}
              />
            </div>
            <h4 className="ml-2 w-full text-lg font-semibold text-primary md:ml-3 md:text-xl">
              {label}
            </h4>
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-3">
          <p className="text-base !leading-tight text-muted line-clamp-3 md:text-base">
            {description}
          </p>
          <div className="space-y-3">
            {cardTag === 'All' && (
              <div className="flex items-center space-x-2">
                {hashtags.slice(0, 1).map((hashtag, index) => (
                  <span
                    key={index}
                    className={`flex w-fit select-none items-center whitespace-nowrap rounded-[8px] bg-background px-2 py-1 text-center text-[13px] font-semibold leading-[1.3em] tracking-[-0.1px] text-primary duration-300 hover:bg-opacity-95 active:translate-y-0.5 md:w-fit`}
                  >
                    #{hashtag}
                  </span>
                ))}
              </div>
            )}
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
        </div>
      </div>
    </div>
  );
};

export default Card;
