import { container } from "@/src/lib/utils/Types";

export default function EducationContainer(props: container) {
  const { children } = props;

  return <div className="px-5 lg:px-0 pt-20">{children}</div>;
}
