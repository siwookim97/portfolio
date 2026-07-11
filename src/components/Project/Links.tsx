import BlogIcon from "@/assets/images/blog.svg";
import DocsIcon from "@/assets/images/docs.svg";
import GithubIcon from "@/assets/images/github.svg";
import WebIcon from "@/assets/images/web.svg";
import YoutubeIcon from "@/assets/images/youtube.svg";

const Links = ({
  repoUrl,
  webUrl,
  isWebDown,
  docsUrl,
  blogUrl,
  videoUrl,
}: {
  repoUrl: string;
  webUrl: string | undefined;
  isWebDown?: boolean;
  docsUrl: string | undefined;
  blogUrl: string | undefined;
  videoUrl: string | undefined;
}) => {
  return (
    <div className="flex gap-1">
      <a target="_blank" rel="noreferrer" href={repoUrl} className="w-fit">
        <GithubIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
      </a>
      {webUrl && isWebDown && (
        <span title="도메인이 만료되어 접속할 수 없습니다" className="relative w-fit opacity-40">
          <WebIcon className="fill-BLACK dark:fill-white" />
          <span className="absolute left-1/2 top-1/2 h-[1.5px] w-[110%] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-BLACK dark:bg-white" />
        </span>
      )}
      {webUrl && !isWebDown && (
        <a target="_blank" rel="noreferrer" href={webUrl} className="w-fit">
          <WebIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
      {docsUrl && (
        <a target="_blank" rel="noreferrer" href={docsUrl} className="w-fit">
          <DocsIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
      {blogUrl && (
        <a target="_blank" rel="noreferrer" href={blogUrl} className="w-fit">
          <BlogIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
      {videoUrl && (
        <a target="_blank" rel="noreferrer" href={videoUrl} className="w-fit">
          <YoutubeIcon className="hover:text-PRIMARY_HEAVY dark:hover:text-GRAY_HEAVY md:fill-current fill-BLACK dark:fill-white" />
        </a>
      )}
    </div>
  );
};

export default Links;
