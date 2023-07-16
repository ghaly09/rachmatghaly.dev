import Link from "next/link";

interface prop {
  directLink: string;
  lineEffect: string;
}

export default function SeeMore({ directLink, lineEffect }: prop) {
  return (
    <div className={lineEffect}>
      <Link
        id="readMore"
        target="_blank"
        rel="noreferrer noopener"
        href={directLink}
        className="text-gray-600 dark:text-white text-sm font-semibold hover-underline-animation"
      >
        See More{" "}
        <span>
          <i
            className="fa-solid fa-arrow-right-long text-[12px]"
            aria-hidden="true"
          ></i>
        </span>
      </Link>
    </div>
  );
}
