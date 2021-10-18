import React from "react";
import { Table } from "react-bootstrap";

export const BeforeImportingTheData = () => {
  return (
    <div className="BeforeImportingTheData">
      <h1 className="padding-Top">Before Importing the data</h1>
      <p>
      ciPARTHENON is meant to connect to your data sources without you having to do the work.  Depending on where your data is stored we have a connector for it.

If your data is in Excel then Excel is fine, hopefully with your data in rows and the column headers on the first row since it makes it easier to load data that way.

If your data is in text files then the same as Excel, data in rows (comma separated for example) and column header at the top.

As an example of data structure, below are examples of a good and bad data structure:
      </p>

    

    <p><span className="bold-text_Header">Pivoted data (Not Recommened)</span></p>
    <p><span className="bold-text">

      <Table size="sm" responsive bordered>
        <thead>
          <tr>
            <th> </th>
            <th>Jan </th>
            <th>Feb </th>
            <th>March </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sales </td>
            <td>200 </td>
            <td>300 </td>
            <td>260 </td>
          </tr>
          <tr>
            <td>Profit</td>
            <td>120</td>
            <td>230</td>
            <td>300</td>
          </tr>
        </tbody>
        </Table>    

</span></p>
<p> <span className="bold-text_Header">Why is the pivoted data is not a good structure ?</span></p>

<p>Pivot tables do not show the name of the values so ciPARTHENON doesn’t understand (cell B2: is it 200 units, 200 pears, 200 dollars?)

If you need to add another category it is easier with the unpivoted version, you just append it to the end.

If you have multiple values you just add a column. With pivot you need to add 3 columns (one for each month)
</p>

<p> <span className="bold-text_Header">Flat Data (Recommended)</span></p>
<p> <span className="bold-text">
<Table size="sm" responsive bordered>
        <thead>
          <tr>
            <th> </th>
            <th>Month </th>
            <th>Amount </th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sales </td>
            <td>Jan</td>
            <td>200 </td>
            
          </tr>
          <tr>
            <td>Profit</td>
            <td>Jan</td>
            <td>120</td>
            
          </tr>
          <tr>
            <td>Sales</td>
            <td>Feb</td>
            <td>300</td>
            
          </tr>
          <tr>
            <td>Profit</td>
            <td>Feb</td>
            <td>230</td>
            
          </tr>
          <tr>
            <td>Sales</td>
            <td>March</td>
            <td>260</td>
            
          </tr>
          <tr>
            <td>Profit</td>
            <td>March</td>
            <td>300</td>
            
          </tr>
        </tbody>
        </Table> 

</span></p>
     
    </div>
  );
};
