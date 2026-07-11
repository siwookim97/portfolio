import HyundaiAutoeverLogo from "@/assets/images/hyundai_autoever.svg";
import { DataProps } from "@/types";

const ResumeTitle = ({ resumeTitle }: Pick<DataProps, "resumeTitle">) => {
  return (
    <div className="sticky top-0 z-10 bg-white dark:bg-BLACK border-b-2 border-solid border-[#00448D] flex justify-between items-center gap-4 px-4 h-14 md:h-20">
      <span className="text-sm md:text-2xl font-semibold text-BLACK dark:text-white truncate">
        {resumeTitle.title}
      </span>
      <HyundaiAutoeverLogo className="h-5 md:h-8 w-auto shrink-0" />
    </div>
  );
};

export default ResumeTitle;
