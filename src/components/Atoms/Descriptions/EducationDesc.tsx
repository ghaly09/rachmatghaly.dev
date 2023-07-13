interface PropTypes {
  desc?: string;
}

export default function EducationDesc({ desc }: PropTypes) {
  return (
    <div>
      <p className="font-ghaly text-gray-600 dark:text-[#d3d4d6] pt-3">
        {desc}
      </p>
    </div>
  );
}
