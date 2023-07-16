import { container } from "@/src/lib/Types";

export default function ContactContainer(props: container) {
  const { children } = props;

  return <div className="px-5 lg:px-0 pt-20">{children}</div>;
}
