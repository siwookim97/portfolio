import Image from "next/image";

import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <div className="sticky print:static top-0 z-10 bg-white dark:bg-BLACK border-b-2 border-solid border-PRIMARY flex justify-between items-center gap-4 px-4 h-14 md:h-20">
      <span className="text-sm md:text-2xl font-semibold text-BLACK dark:text-white truncate">
        {resumeTitle.title}
      </span>
      <Image
        src="/images/echomarketing_logo.png"
        width={1300}
        height={147}
        alt="ECHOMARKETING"
        className="h-5 md:h-8 w-auto shrink-0"
      />
    </div>
  );
};

export default ResumeTitle;
