const Quote = () => {
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Experience is the name everyone gives to their mistakes."
  ];
  const index = new Date().getDate() % quotes.length;
  return <blockquote>"{quotes[index]}"</blockquote>;
};

export default Quote;
