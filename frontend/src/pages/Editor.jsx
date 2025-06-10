import { useParams } from "react-router-dom";
import NewsletterEditorv2 from "../components/NewsletterEditorv2";

export default function Editor() {
  const { key } = useParams();
  return <NewsletterEditorv2 draftKey={key} />;
}
