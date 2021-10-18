import React from "react";
import image1 from "./images/Picture1.PNG";
import image2 from "./images/Picture2.PNG";
import image3 from "./images/Picture3.PNG";
import image4 from "./images/Picture4.PNG";
import image5 from "./images/Picture5.PNG";
import image6 from "./images/Picture6.PNG";

export const DateAndTimeFunctionsExamples = () => {
  return (
    <div className="DateAndTimeFunctionsExamples">
      <h1 className="padding-Top">Date and Time Functions Examples</h1>
      <p>
      The following are some common date ranges you can set with the date and time functions
      </p>
      <h2 className="padding-Top">Date Between X and Today / Yesterday</h2>
      <p>
      Functions used:
      </p>
      <p>
        <li>
          today()
        </li>
        <li>
          Returns today's date
        </li>
      </p>
      <p>
      <li>
          yesterday()
        </li>
        <li>
          Returns yesterday's date
        </li>
      </p>
      <p>
      To filter your data from X date to:
      <li>
          Today()
        </li>
        <li>
        Date column Between ToArray(date X, today())
        </li>
      </p>

      <img src={image1} className="imageClass" />
      <br />
      <p>
        <li>
        Date column Greater Than or Equal To Date X
        </li>
      </p>
      <p>
        +
      </p>
      <p>
      <li>
      Date column Less Than or Equal To Today()
        </li>
      </p>
      <img src={image2} className="imageClass" />
      <br/>
      <p>
      <li>
          yesterday
        </li>
        <li>
        Date column Between ToArray(date X, yesterday())
        </li>
      </p>
      <h2 className="padding-Top">Current Week</h2>
      <p>
        Functions Used:
      </p>
      <p>
        <li>
          ThisDate()
        </li>
        <p>
        <li>
        This function returns the date for a particular well known date period such as Last Month Same Date for date filters and calculations. It is a shortcut to calculating dates.
        </li>
        </p>
      </p>
      <p>
        Set filter to:
      </p>
      <p>
      <li>
      Date column Between ToArray(ThisDate('CurrentWeekFirstDay'), ThisDate('CurrentWeekLastDay'))
      </li>
      <p>
        <li>
        ThisDate('CurrentWeekFirstDay') returns the <span className="bold-text">first day of the current week</span>
        </li>
        <li>
        ThisDate('CurrentWeekLirstDay') returns the <span className="bold-text">last day of the current week</span>
        </li>
      </p>
      </p>
      <img src={image3} className="imageClass" />
      <br />
      <h2 className="padding-Top">Fiscal Year start in April</h2>
      <p>
        Functions Used:
      </p>
      <p>
        <li>
          Date()
        </li>
        <p>
          <li>
          The function returns a date based on the following input Date(year, month, day, hour, minute, second)
          </li>
        </p>
      </p>
      <p>
        <li>
          Year()
        </li>
        <p>
          <li>
          Returns the year of the date input
          </li>
        </p>
      </p>
      <p>
        <li>
          Today()
        </li>
      </p>
      <p>
      To filter for the fiscal year starting in the current year set filter to:
      </p>
      <p>
        <li>
        Date column Between Toarray(Date(year(today()), 04, 1, 0, 0, 0), Date(year(today())+1, 03, 31, 0, 0, 0))
        </li>
        <p>
          <li>
          Date(year(today()), 04, 1, 0, 0, 0) returns <span className="bold-text">April 1st of the current year</span>
          </li>
          <li>
          Date(year(today())+1, 03, 31, 0, 0, 0) returns <span className="bold-text">March 31st of the next year</span>
          </li>
        </p>
      </p>
      <p>
      To filter for the fiscal year starting in the previous year set filter to:
      </p>
      <p>
        <li>
        Date column Between ToArray(Date(Year(today())-1, 04, 1, 0, 0, 0),Date(Year(Today()), 03, 31, 0, 0, 0))
        </li>
        <p>
          <li>
          Date(Year(today())-1, 04, 1, 0, 0, 0) returns <span className="bold-text">April 1st of the previous year</span>
          </li>
          <li>
          Date(Year(Today()), 03, 31, 0, 0, 0) <span className="bold-text">March 31st of the current year</span>
          </li>
        </p>
      </p>
      <br />
      <p>
      To have the formula evaluate the correct fiscal year to filter for:
      </p>
      <img src={image4} className="imageClass" />
      <p>
        <li>
        If(Month(Today())Less than 4, ToArray(Date(Year(today())-1, 04, 1, 0, 0, 0),Date(Year(Today()), 03, 31, 0, 0, 0)), ToArray(Date(Year(Today()), 04, 1, 0, 0, 0),Date(Year(Today())+1, 03, 31, 0, 0, 0)))
        </li>
        <p>
          <li>
          The formula states if the current month is before April then the fiscal year starts on April 1st of last year and goes to March 31st of the current year
          </li>
          <li>
          Otherwise the fiscal year starts on April 1st of the current year and goes to March 31st of the next year
          </li>
        </p>
        </p>
        <h2 className="padding-Top">Same Week Last Year</h2>
        <br />
        <p>
        Function used:
        </p>
        <p>
          <li>
            DateAdd()
          </li>
          <p>
            <li>
            This function will add a number of date periods to the date provided based on the following input DateAdd(date, interval, intervalType)
            </li>
          </p>
          <li>
            ThisDate()
          </li>
        </p>
        <p>
          Set filter to :
        </p>
        <p>
          <li>
          Date column Between ToArray(DateAdd(ThisDate('CurrentWeekFirstDay'),-52,'Week'), DateAdd(ThisDate('CurrentWeekLastDay'),-52,'Week'))
          </li>
          <p>
            <li>
            DateAdd(ThisDate('CurrentWeekFirstDay'),-52,'Week') returns the <span className="bold-text">first day of the week for the previous year</span>
            </li>
            <li>
            DateAdd(ThisDate('CurrentWeekLastDay'),-52,'Week') returns the <span className="bold-text">last day of the week for the previous year</span>
            </li>
          </p>
        </p>
        <br />
        <h2 className="padding-Top">Year Over Year % Difference</h2>
        <br />
        <p>
          Function Used :
          <p>
            <li>
              ThisDay()
            </li>
            <li>
              Today()
            </li>
          </p>
        </p>
        <p>
        First create a widget to hold the value for the current year to date by setting the filter to:
        </p>
        <p>
          <li>
          Date column Greater Than or Equal to ThisDate('CurrentYearFirstDay')
          </li>
          <li>
          Date column Less Than or Equal to Today()
          </li>
        </p>
        <img src={image5} className="imageClass" />
        <br/>
        <p>
        Next step will be to create a widget that holds the previous year to date value by setting the filter to:
        </p>
        <p>
          <li>
          Date column Greater Than or Equal to ThisDate('LastYearFirstDay')
          </li>
          <li>
          Date column Less Than or Equal to ThisDate('LastYearSameDay')
          </li>
        </p>
        <img src={image6} className="imageClass" />

    </div>
  );
};
