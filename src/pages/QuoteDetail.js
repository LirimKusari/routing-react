import { useParams } from "react-router";
import { Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_DATA = [
  { id: "q1", author: "lirim", text: "Learning React is fun!" },
  { id: "q2", author: "limbo", text: "Learning React is fuuuuuuuuuuun!" },
  {
    id: "q3",
    author: "lilo",
    text: "Learning React is fuuuuuuuuuuuun! 🙃",
  },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found</p>;
  }
  return (
    <>
      <HighlightedQuote
        text={quote.text}
        author={quote.author}
      ></HighlightedQuote>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};

export default QuoteDetail;
