import React from "react";
import { useHistory } from "react-router-dom";

export const DateAndTimeFunctions = () => {
  let history = useHistory();
  return (
    <div className="mainPage">
      <h1 className="padding-Top">Date & Time Functions</h1>
      <p>
        The <span className="bold-text">Date & Time</span> functions help you perform operations with date values. You can filter your widgets on yesterday's data or compare current period with previous period. You can build dynamic functions using now(), today() etc. You can find below all the available functions:
      </p>
      <br />
      <p>
        <li>
          <span className="bold-text">Date </span>will return the specified date. for example if you have Date ( 2016,1,1) will return January 1, 2016.
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">DateAdd </span>will add a number that will be added to the date, In the example DateAdd ( ToDate('2015-01-25'), 2, 'Year') you will add two years, the result is 2017, alternatively you can also add numbers to other Date Parts such as days, weeks, months etc
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">DateDiff </span>will return the difference between two dates . DateDiff ( ToDate('2016-02-09'), ToDate('2016-02-10'), 'Day') will return 1 which is the difference between the two dates in days.
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">Day </span>will return the Date Part of a specified date. Day ( Date ( 2016,1,20 ) ) will return 20.
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">FormatDateTime </span>will convert the date that you specified into a specific format FormatDateTime( ToDate('2015-01-25'), 'yyy-MM-dd') returns 2015-01-25.
        Month will return the Date Part of a specified date. Month ( Date ( 2016,1,20 ) ) will return 1.
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">Now </span>will return the date& current time. The syntax is Now ( )
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">SameDayLastMonth </span>returns the same date but one month ago. The syntax is SameDayLastMonth ( )
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">SameDayLastYear </span>in the same way as the previous function, it will return the same date but last year. The syntax is SameDayLastYear()
        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">ToDate </span>will convert a string into a date. Syntax: ToDate('2015-01-25')

        </li>
      </p>
      <p>
        <li>
        <span className="bold-text">Today </span>returns the current date. The syntax is Today()
       </li>
      </p>
      <p>
        <li>
        <span className="bold-text">ToTime </span>converts a time span into a time format, for example if you have 160 seconds and you want to be converted, then the function ToTime(160, 'seconds') returns 0:02:40.
       </li>
      </p>
      <p>
        <li>
        <span className="bold-text">Year </span>will return the year for specified date, for example Year ( Date ( 2016,1,18 ) ) will return 2016.
       </li>
      </p>
      <p>
        <li>
        <span className="bold-text">Yesterday </span> the yesterday function returns the yesterday date. Yesterday() will return 2016-02-08T15:48:11.3056130Z, ToDate(FormatDateTime(Yesterday(),'yyyy-MM-dd')) will return 20116-03-24T00:00:00.0000000Z
       </li>
      </p>
      <br />
      <h2 className="second-heading">In This Section</h2>
      <br />
      <div>
      <li>
          <span
            className="pageLink"
            onClick={() => history.push("/DateAndTimeFunctionsExamples")}
          >
          Date and Time Functions Examples
          </span>
        </li>
        </div>




      
      
    </div>
  );
};
