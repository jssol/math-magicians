import React, { useState, useEffect } from 'react';
import '../scss/Quote.scss';

const quotes = [
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: 'Stefan Banach',
  },
  {
    quote: 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
    author: 'David Hilbert',
  },
  {
    quote: 'Mathematics is the music of reason.',
    author: 'James Joseph Sylvester',
  },
  {
    quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    author: 'Albert Einstein',
  },
  {
    quote: 'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
    author: 'Richard Courant',
  },
];

const generateQuote = (quotes) => {
  const index = Math.floor(Math.random() * (quotes.length - 0) + 0);
  const quote = quotes[index];
  return quote;
};

const Quote = () => {
  const [state, setState] = useState({
    quote: 'A journey of a thousand miles starts with a single step',
    author: 'Unknown',
  });
  useEffect(() => {
    const quoteInterval = setInterval(() => {
      const quote = generateQuote(quotes);
      setState(quote);
    }, 20000);

    return () => clearInterval(quoteInterval);
  }, []);

  const { quote, author } = state;

  return (
    <section className="QuoteSection">
      <p className="Quote">
        {quote}
      </p>
      <p className="Author">
        {author}
      </p>
    </section>
  );
};

export default Quote;
