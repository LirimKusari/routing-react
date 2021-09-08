import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "q1", author: "lirim", text: "Learning React is fun!" },
  { id: "q2", author: "limbo", text: "Learning React is fuuuuuuuuuuun!" },
  {
    id: "q3",
    author: "lilo",
    text: "Learning React is fuuuuuuuuuuuun! 🙃",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_DATA}></QuoteList>;
};

export default AllQuotes;
