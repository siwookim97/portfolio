import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { pretendard } from "@/styles/fonts";

/**
 * @description SEO를 위해 본인의 정보로 수정해주세요.
 */
const DEFAULT_SEO = {
  title: "김시우 | Back-End Dev",
  description: "안녕하세요, 백엔드 개발자 김시우입니다.",
  canonical: "https://www.naver.com/",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.naver.com/",
    title: "김시우 | Back-End Dev",
    site_name: "김시우 | Back-End Dev",
    images: [
      {
        url: "/share.png",
        width: 285,
        height: 167,
        alt: "김시우 | Back-End Dev",
      },
    ],
  },
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
  ],
  additionalMetaTags: [
    {
      name: "application-name",
      content: "김시우 | Back-End Dev",
    },
    {
      name: "msapplication-tooltip",
      content: "김시우 | Back-End Dev",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <ThemeProvider attribute="class">
        <div className={pretendard.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
