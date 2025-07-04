import { marked } from "marked";

const VisorMarkdown = ({ contenido }) => {
  return (
    <div
      className="prose max-w-none prose-headings:text-[#06402B] prose-a:text-[#06402B] prose-a:hover:text-[#FFA726]"
      dangerouslySetInnerHTML={{ __html: marked(contenido) }}
    />
  );
};

export default VisorMarkdown;
