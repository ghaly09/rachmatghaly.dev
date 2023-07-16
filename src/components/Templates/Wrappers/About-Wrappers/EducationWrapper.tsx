import { wrapper } from "@/src/lib/Types";

export default function EducationWrapper(props: wrapper) {
  const { children } = props;

  return <div className="px-5 lg:px-0 pt-28">{children}</div>;
}
