import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
import { FaClosedCaptioning } from "react-icons/fa";

export const SearchResultsList = ({ input , results }) => {
  
  console.log(results ,'this is the result ');
  return (
    <div className='results-list w-[100%]'>
      {results?.map((result, id) => {
        console.log("this is the results123",results)
      
        return <SearchResult results={results} input={input} result={result._source.description} key={id} className='w-[100%]'/>;
      })}
    </div>
  );
};
