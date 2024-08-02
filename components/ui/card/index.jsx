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
            <div className="flex items-center gap-1">
              <h4 className="ml-2 w-full text-lg font-semibold text-primary md:ml-3 md:text-xl">
                {label}
              </h4>
              {hashtags.includes('popular') && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mt-0.5 h-6 w-6 text-yellow-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {hashtags.includes('premium') && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mt-0.5 h-6 w-6 text-indigo-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              )}
            </div>
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
