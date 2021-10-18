import React from "react";

export const ArreyFunctions = () => {
  return (
    <div className="ArreyFunctions">
      <h1 className="padding-Top">Arrey Functions</h1>
      <p>
        The <span className="bold-text">Arrey </span>functions will help you work with arrays and perform various operations such as extract the first or last value, remove one value from an array, join strings to an array or split array to values. Please check below the available functions:
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyAdd- </span>Adds a value to the end of the array. 
        </li>
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArreyAdd ( ToArray ('Red', 'Blue'), 'Green' ) </span>Returns 'Red', 'Blue', 'Green' in an array.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyAggregate - </span>Will aggregate all values in array based on aggregation type: Sum, Average, Min, Max, Count, DistinctCount.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArreyAggregate( ToArray(1,2,3), 'sum') </span>Returns 6.
        <span className="bold-text">ArreyAggregate( ToArray('Red','Green','Yellow'), 'count') </span>Returns 3.
        <br />
        <br />
        <li>
          <span className="bold-text">Arrey Contains </span>searches entire array for item specified in value (string, number or date) and returns the Index of the first item that it finds matching it. Returns -1 if not found
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayContains( ToArray('Red','Blue','Yellow'), 'Blue') </span>returns 1
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyCount</span> returns the number of elements in the array.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayCount ( ToArray (1,2,3,4,5) ) </span>returns 5.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyFirst</span> Gets  first item in array if it exists.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayFirst( ToArray ('Red', 'Blue', 'Yellow') ) </span>returns 'Red'.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyIndex</span>  returns the item in the array at the index position. If array does not have a an item at the index provided element then it returns nothing.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayIndex( ToArray ('Red', 'Blue', 'Yellow') ,2 ) </span>returns 'Yellow'.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyLast</span> Gets  Last item in array if it exists.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayLast( ToArray ('Red', 'Blue', 'Yellow') ) </span>returns 'Yellow'.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyRemove</span> Add values to the end of Arrey.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayRemove( ToArray ('Red', 'Blue', 'Green'),'Blue' ) </span>Returns 'Red', 'Green' in an array.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreySort</span> Sorts an array by default ascending (true), or descending if false is passed in second parameter.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArraySort( ToArray (5,2,4,1 ) </span>Returns 1 2 4 5.
        <br />
        <br />
        <li>
          <span className="bold-text">ArreyToValues</span> Converts an array into a list of values that can be used in a filter.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ArrayValues( ToArray ('One' ,'Two') </span>Returns One , Two.
        <span className="bold-text">ArrayValues( ToArray ('One' ,'Two'),"") </span>Returns "One" , "Two".
        <span className="bold-text">DataAggregate('MySalesData', 'Quantity', 'sum' , '[Country] IN (' + ArrayToValues(MyArray, '"') + ')') </span>
        <br />
        <br />
        <li>
          <span className="bold-text">JoinFromArrey</span> Returns the string from an Arrey
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">JoinFromArrey( ToArray (1,2,3),'-') </span>Returns 1-2-3.
        <br />
        <br />
        <li>
          <span className="bold-text">SplitToArrey</span> Returns an array from a string.
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">SplitToArrey( 'a|b|c|d','|') </span>Returns a,b,c,d.
        <br />
        <br />
        <li>
          <span className="bold-text">ToArrey</span> creates an array from a list of items (numbers, strings or dates)
        </li>
        <br />
        <span className="bold-text, italic">Example</span>
        <span className="bold-text">ToArrey( 'Red,'Blue','Yellow') </span>
        <br />


      </p>

      

      
    </div>
  );
};
