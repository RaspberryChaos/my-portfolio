import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ailie McCorkindale" />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://ailie-mccorkindale.vercel.app/"
      />
      <meta name="image" property="og:image" content="/portfolioSS.jpg" />
      <meta property="og:description" content={description} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Ailie McCorkindale - Portfolio",
  keywords: "web development, programming, portfolio",
  description: "Web development portfolio created by Ailie McCorkindale using Next.js, React, HTML, CSS and JavaScript.",
};

export default Meta;
