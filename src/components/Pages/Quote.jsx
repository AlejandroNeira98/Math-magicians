import React from 'react';

function Quote() {
  const css = { fontSize: '2rem', margin: '10% 10% 0 10%' };
  return (
    <>
      <div style={css}>
        Mathematics is not about numbers, equations, computations,
        or algorithms: is about understanding
      </div>
      <div style={css}>
        -William Paul Thurston
      </div>
    </>
  );
}

export default Quote;
