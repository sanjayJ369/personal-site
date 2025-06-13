// components/MarkdownRenderer.tsx
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

type Props = {
  content: string;
};

export default function MarkdownRenderer({ content }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ node, ...props }) => (
          <img
            {...props}
            className="border-border border-2 rounded-base align-middle m-auto"
            alt={props.alt || ""}
          />
        ),
        iframe: ({ node, ...props }) => (
          <div className="my-6 aspect-video w-full max-w-3xl">
            <iframe
              {...props}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ),
        h1: ({ node, ...props }) => (
          <h1 {...props} className="text-4xl font-bold mt-8 mb-4" />
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props} className="text-3xl font-bold mt-6 mb-3" />
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props} className="text-2xl font-bold mt-5 mb-2" />
        ),
        h4: ({ node, ...props }) => (
          <h4 {...props} className="text-xl font-bold mt-4 mb-2" />
        ),
        h5: ({ node, ...props }) => (
          <h5 {...props} className="text-lg font-bold mt-4 mb-2" />
        ),
        h6: ({ node, ...props }) => (
          <h6 {...props} className="text-base font-bold mt-4 mb-2" />
        ),
        p: ({ node, ...props }) => <p {...props} className="my-1" />,
        blockquote: ({ node, ...props }) => (
          <blockquote
            {...props}
            className="border-l-4 border-primary pl-4 py-1 my-4 bg-primary/10 rounded-r-md"
          />
        ),
        pre: ({ node, ...props }) => (
          <pre
            {...props}
            className="bg-muted p-4 rounded-lg border-2 border-border my-6 overflow-x-auto"
          />
        ),
        a: ({ node, ...props }) => (
          <a
            {...props}
            className="text-primary font-medium underline underline-offset-4 hover:text-primary/80 transition-colors"
          />
        ),
        ul: ({ node, ...props }) => (
          <ul {...props} className="list-disc pl-6 my-4" />
        ),
        ol: ({ node, ...props }) => (
          <ol {...props} className="list-decimal pl-6 my-4" />
        ),
        li: ({ node, ...props }) => <li {...props} className="m-3" />,
        hr: ({ node, ...props }) => (
          <hr {...props} className="my-8 border-border" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
