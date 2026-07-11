import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { InformationProps } from "@/types";

const Introduce = ({ markdown }: Pick<InformationProps, "markdown">) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h4: ({ children }) => <h4 className="text-2xl font-semibold leading-none">{children}</h4>,
        ul: ({ children }) => <ul className="flex flex-col gap-2 pb-2 pt-0 ml-4 list-outside list-disc">{children}</ul>,
      }}
    >
      {markdown ?? ""}
    </ReactMarkdown>
  );
};

export default Introduce;
