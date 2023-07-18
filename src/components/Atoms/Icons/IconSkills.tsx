import Image from "next/image";

interface PropTypes {
  style: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
}

export default function IconSkill({
  style,
  src,
  width,
  height,
  alt,
  title,
}: PropTypes) {
  return (
    <div className={style}>
      {" "}
      <Image src={src} width={width} height={height} alt={alt} title={title} />
    </div>
  );
}
