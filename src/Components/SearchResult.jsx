import React from 'react';
import "./SearchResult.css";

export const highlightText = (name, input) => {
  if (!input) {
    return name;
  }

  const lowerCaseName = name ? name.toLowerCase() : '';
  const lowerCaseInput = input.toLowerCase();

  const firstIndex = lowerCaseName.indexOf(lowerCaseInput);
  
  if (firstIndex === -1) {
    return <div>No results found for "{input}"</div>;
  }
  else{
    const part1 = name.substring(0, firstIndex);
    const part2 = name.substring(firstIndex + input.length);
    const parteq = name.substring(firstIndex, firstIndex + input.length);
  
    return (
      <div>
        {part1}<b className='input'>{parteq}</b>{part2}
      </div>
    );

  }


};


export const SearchResult = ({ results,result, input }) => {
  console.log("this is the result1 ",results)
  console.log(input)
  return (
    <div className="search-result">
      {highlightText(result, input)}
    </div>
  );
};
