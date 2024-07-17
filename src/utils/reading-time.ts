function transformMDXToRawText(mdxContent: string): string {
  let rawText = mdxContent.replace(/<\/?[^>]+(>|$)/g, '');

  rawText = rawText
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  rawText = rawText.trim().replace(/\s+/g, ' ');

  return rawText;
}

export default function calculateReadingTime(mdxContent: string): number {
  const averageReadingSpeed = 225;

  const rawText = transformMDXToRawText(mdxContent);

  const wordCount = rawText.split(/\s+/).length;

  const readingTimeMinutes = wordCount / averageReadingSpeed;

  const roundedReadingTime = Math.ceil(readingTimeMinutes);

  return roundedReadingTime;
}
