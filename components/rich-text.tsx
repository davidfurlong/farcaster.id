import {
  convertCastPlainTextToStructured,
  StructuredCastChannel,
  StructuredCastImageUrl,
  StructuredCastMention,
  StructuredCastNewline,
  StructuredCastPlaintext,
  StructuredCastTextcut,
  StructuredCastUnit,
  StructuredCastUrl,
  StructuredCastVideo,
} from "@/lib/structure-cast";

export const structuredCastToReactDOMComponentsConfig: Record<
  StructuredCastUnit["type"],
  (structuredCast: any, i: number, options: {}) => React.ReactElement
> = {
  plaintext: (structuredCast: StructuredCastPlaintext, i: number, options) => (
    <span key={i}>{structuredCast.serializedContent}</span>
  ),
  url: (structuredCast: StructuredCastUrl, i: number, options) => (
    <a
      key={i}
      target="_blank"
      rel="noopener noreferrer"
      href={
        structuredCast.serializedContent.startsWith("http://") ||
        structuredCast.serializedContent.startsWith("https://")
          ? structuredCast.serializedContent
          : `https://${structuredCast.serializedContent}`
      }
      className="text-indigo-700 dark:text-indigo-400"
    >
      {structuredCast.serializedContent}
    </a>
  ),
  videourl: (structuredCast: StructuredCastVideo, i: number, options) => (
    <a
      key={i}
      href={structuredCast.serializedContent}
      className="text-indigo-700 dark:text-indigo-400"
    >
      {structuredCast.serializedContent}
    </a>
  ),
  imageurl: (structuredCast: StructuredCastImageUrl, i: number, options) => (
    <a
      key={i}
      href={structuredCast.serializedContent}
      className="text-indigo-700 dark:text-indigo-400"
    >
      {structuredCast.serializedContent}
    </a>
  ),
  mention: (structuredCast: StructuredCastMention, i: number, options) => (
    <a
      key={i}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://warpcast.com/${structuredCast.serializedContent.replace(
        "@",
        ""
      )}`}
      className="text-indigo-700 dark:text-indigo-400"
    >
      {structuredCast.serializedContent}
    </a>
  ),
  channel: (structuredCast: StructuredCastChannel, i: number, options) => (
    <a
      key={i}
      target="_blank"
      rel="noopener noreferrer"
      href={`https://warpcast.com/~/channel${structuredCast.serializedContent}`}
      className="text-indigo-700 dark:text-indigo-400"
    >
      {structuredCast.serializedContent}
    </a>
  ),
  textcut: (structuredCast: StructuredCastTextcut, i: number, options) => (
    <a
      key={i}
      href={structuredCast.serializedContent}
      className="text-indigo-700 dark:text-indigo-400"
    >
      {structuredCast.serializedContent}
    </a>
  ),
  newline: (_: StructuredCastNewline, i: number, options) => <br key={i} />,
};

export function convertStructuredCastToReactDOMComponents(
  structuredCast: StructuredCastUnit[],
  options: {}
): (React.ReactElement | string)[] {
  return structuredCast.map((structuredCastUnit, i) =>
    structuredCastToReactDOMComponentsConfig[structuredCastUnit.type](
      structuredCastUnit,
      i,
      options
    )
  );
}

export function RichText({ text }: { text: string }) {
  let structuredCast = convertCastPlainTextToStructured({
    text: text,
  });

  return convertStructuredCastToReactDOMComponents(structuredCast, {});
}
