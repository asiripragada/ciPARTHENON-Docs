import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebarMenu";
import { Redirect } from "react-router-dom";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import { AccessingDashboards } from "../pages/accessingDashboardSection";
import { OrganizeYourDashboards } from "../pages/accessingDashboardSection/Organize_your_dashboards";
import {VisualizeAndShareYourDashboards} from "../pages/accessingDashboardSection/Visualize_and_Share_Your_Dashboards";
import { RebindYourDashboards } from "../pages/accessingDashboardSection/Rebind your dashboards";
// import {DashboardProperties } from "../pages/accessingDashboardsSection/Organize_your_dashboards/Dashboard Properties";
 import {DashboardProperties} from "../pages/accessingDashboardSection/Organize_your_dashboards/Dashboard_Properties";
 import {PreparingYourData} from "../pages/PreparingYourDataSection";
 import {BeforeImportingTheData} from "../pages/PreparingYourDataSection/Before_Importing_the_data";
 import {MyData} from "../pages/PreparingYourDataSection/My_Data";
 import {DataPreview} from "../pages/PreparingYourDataSection/My_Data/Data_Preview";
 import {DataProperties} from "../pages/PreparingYourDataSection/My_Data/Data_Properties";
 import {CreateData} from "../pages/PreparingYourDataSection/Create_Data";
 import {StepsNeedToFollow} from "../pages/PreparingYourDataSection/Create_Data/Steps_need_to_follow";
 import {CreateView} from "../pages/PreparingYourDataSection/Create_View";
 import {MergeData} from "../pages/PreparingYourDataSection/Merge_Data";
 import {StepsToFollow} from "../pages/PreparingYourDataSection/Merge_Data/Steps_to_follow_2";
 import {DataRefreshMethods} from "../pages/PreparingYourDataSection/Data_refresh_methods";
 import {DataTransformation} from "../pages/PreparingYourDataSection/Data_Transformation";
 import {AggregatedColumn} from "../pages/PreparingYourDataSection/Data_Transformation/Aggregated_Column";
 import {CalculatedColumn} from "../pages/PreparingYourDataSection/Data_Transformation/Calculated_Column";
 import {TextSplitter} from "../pages/PreparingYourDataSection/Data_Transformation/Text_Splitter";
 import {Filter} from "../pages/PreparingYourDataSection/Data_Transformation/Filter";
 import {FindAndReplace} from "../pages/PreparingYourDataSection/Data_Transformation/Find_and_Replace";
 import {Grouping} from "../pages/PreparingYourDataSection/Data_Transformation/Grouping";
 import {Normalize} from "../pages/PreparingYourDataSection/Data_Transformation/Normalize";
 import {PivotData} from "../pages/PreparingYourDataSection/Data_Transformation/Pivot_Data";
 import {Standardize} from "../pages/PreparingYourDataSection/Data_Transformation/Standardize";
 import {UnpivotData} from "../pages/PreparingYourDataSection/Data_Transformation/Unpivot_Data";
 import {Update} from "../pages/PreparingYourDataSection/Data_Transformation/Update";
 import {MyConnections} from "../pages/PreparingYourDataSection/My_Connections";
 import {ConnectionProperties} from "../pages/PreparingYourDataSection/My_Connections/Connection Properties";
 import {ConnectionBroker} from "../pages/PreparingYourDataSection/My_Connections/Connection Broker";
 import {DataFusion} from "../pages/PreparingYourDataSection/Data_Fusion";
 import {GettingStarted} from "../pages/gettingStartedSection";
 import {CIPARTHENON} from "../pages/gettingStartedSection/What_is_ciPARTHENON";
 import {DataStream} from "../pages/PreparingYourDataSection/Data_Stream";
 import {BuildingADashboard} from "../pages/buildingDashboardSection";
 import {CreateYourFirstDashboard} from "../pages/buildingDashboardSection/Create_your_first_dashboard";
 import {DashboardBinders} from "../pages/buildingDashboardSection/dashboardBinders";
 import {FilterYourWidgets} from "../pages/buildingDashboardSection/Filter_your_widgets";
 import {GlobalFilter} from "../pages/buildingDashboardSection/Filter_your_widgets/Global_filter";
 import {UsingDateSelectors} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Date_Selectors";
 import {UsingInputs} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Inputs";
 import {UsingNumericInputs} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Inputs/Using_Numeric_Inputs";
 import {UsingTextInput} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Inputs/Using_Text_Input";
 import {CustomColorPalette} from "../pages/buildingDashboardSection/Customer_Color_Palette";
 import {UsingLists} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Lists";
 import {UsingFormula} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Lists/Using_Formula";
 import {UsingWidgets} from "../pages/buildingDashboardSection/Filter_your_widgets/Using_Lists/Using_Widgets";
 import {WorkingWithWidgets} from "../pages/buildingDashboardSection/Working_with_widgets";
 import {Charts} from "../pages/buildingDashboardSection/Working_with_widgets/Charts";
 import {AreaChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Area_Chart";
 import {BarChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Bar_Chart";
 import {BubbleChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Bubble_Chart";
 import {CandlestickChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Candlestick_Chart";
 import {ColumnChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Column_Chart";
 import {GanttChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Gantt_Chart";
 import {LineChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Line_Chart";
 import {PieChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Pie_Chart";
 import {RadarChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Radar_Chart";
 import {ScatterChart} from "../pages/buildingDashboardSection/Working_with_widgets/Charts/Scatter_Chart";
 import {Action} from "../pages/buildingDashboardSection/Working_with_widgets/Action";
 import {Buttons} from "../pages/buildingDashboardSection/Working_with_widgets/Action/Button";
 import {Exportbutton} from "../pages/buildingDashboardSection/Working_with_widgets/Action/Export_Button";
 import {DateCharts} from "../pages/buildingDashboardSection/Working_with_widgets/Date_Charts";
 import {TimeSliderChart} from "../pages/buildingDashboardSection/Working_with_widgets/Date_Charts/Time_Slider_Chart";
 import {DateSelectors} from "../pages/buildingDashboardSection/Working_with_widgets/Date_Selectors";
 import {CalenderDropdown} from "../pages/buildingDashboardSection/Working_with_widgets/Date_Selectors/Calender_Dropdown";
 import {PeriodDropdown} from "../pages/buildingDashboardSection/Working_with_widgets/Date_Selectors/Period_Dropdown";
 import {DatesRangePicker} from "../pages/buildingDashboardSection/Working_with_widgets/Date_Selectors/Date_Range_Picker";
 import {Gauges} from "../pages/buildingDashboardSection/Working_with_widgets/Gauges";
 import {CircularGauge} from "../pages/buildingDashboardSection/Working_with_widgets/Gauges/Circular_Gauge";
 import {DataForms} from "../pages/buildingDashboardSection/Working_with_widgets/Data_Form";
 import {WebsHTMLPlaceholder} from "../pages/buildingDashboardSection/Working_with_widgets/Web_HTML_Placeholder";
 import {Annotations} from "../pages/buildingDashboardSection/Working_with_widgets/Annotations";
 import {Balloon} from "../pages/buildingDashboardSection/Working_with_widgets/Annotations/Ballon";
 import {DateTime} from "../pages/buildingDashboardSection/Working_with_widgets/Annotations/Date_&_Time";
 import {Notes} from "../pages/buildingDashboardSection/Working_with_widgets/Annotations/Note";
 import {Shape} from "../pages/buildingDashboardSection/Working_with_widgets/Annotations/Shape";
 import {Indicators} from "../pages/buildingDashboardSection/Working_with_widgets/Indicators";
 import {NumberIndicator} from "../pages/buildingDashboardSection/Working_with_widgets/Indicators/Number_Indicator";
 import {SymbolIndicator} from "../pages/buildingDashboardSection/Working_with_widgets/Indicators/Symbol_Indicator";
 import {IntroductionToFormulas} from "../pages/introductionToFormulasSection";
 import {ArreyFunctions} from "../pages/introductionToFormulasSection/Array_Functions";
 import {ChartFunctions} from "../pages/introductionToFormulasSection/chartFunction";
 import {DashboardFunctions} from "../pages/introductionToFormulasSection/Dashboard_Functions";
 import {DataFunctions} from "../pages/introductionToFormulasSection/Data_Functions";
 import {DateAndTimeFunctions} from "../pages/introductionToFormulasSection/Date_&_Time_Functions";
 import {DateAndTimeFunctionsExamples} from "../pages/introductionToFormulasSection/Date_&_Time_Functions/Date and Time Functions Examples"
 import {FilterFunctions} from "../pages/introductionToFormulasSection/Filter_Functions";
 import {LogicalFunctions} from "../pages/introductionToFormulasSection/Logical_Functions";
 import {MathematicalFunctions} from "../pages/introductionToFormulasSection/Mathematical_Functions";
 import {ParametersFunctions} from "../pages/introductionToFormulasSection/Parameters_Functions";
 import {StringFunctions} from "../pages/introductionToFormulasSection/String_Functions";
 import {TableFunctions} from "../pages/introductionToFormulasSection/Table_Functions";
 import {TableFunctionsExample1} from "../pages/introductionToFormulasSection/Table_Functions/Table Functions - Example 1";
 import {TableFunctionsExample2} from "../pages/introductionToFormulasSection/Table_Functions/Table Functions - Example 2";
 import {WorkingwithFormulas} from "../pages/introductionToFormulasSection/Working_with_Formulas";
 import {Inputs} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs";
 import {AutoComplete} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Auto-Complete";
 import {ButtonGroup} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Button Group";
 import {SlideSwitch} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Input_Switch";
 import {MultipleTagInput} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Multiple_Tag_Input";
 import {NumericInputs} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Numeric_Inputs";
 import {TextInput} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Text_Inputs";
 import {RadioButton} from "../pages/buildingDashboardSection/Working_with_widgets/Inputs/Radio_Buttons";
 import {Lists} from "../pages/buildingDashboardSection/Working_with_widgets/Lists";
 import {List} from "../pages/buildingDashboardSection/Working_with_widgets/Lists/List";
 import {DropdownList} from "../pages/buildingDashboardSection/Working_with_widgets/Lists/Dropdown_List";
 import {FilterPanel} from "../pages/buildingDashboardSection/Working_with_widgets/Lists/Filter_Panel";
 import {TrendLines} from "../pages/buildingDashboardSection/Working_with_widgets/Trend_Lines";
 import {QuickProperties} from "../pages/buildingDashboardSection/Working_with_widgets/Quick_Properties";
 import {Media} from "../pages/buildingDashboardSection/Working_with_widgets/Media";
 import {Image} from "../pages/buildingDashboardSection/Working_with_widgets/Media/Image";
 import {SliderKnob} from "../pages/buildingDashboardSection/Working_with_widgets/Slider_&_Knobs";
 import {RingKnob} from "../pages/buildingDashboardSection/Working_with_widgets/Slider_&_Knobs/Ring_Knob";
 import {Sliders} from "../pages/buildingDashboardSection/Working_with_widgets/Slider_&_Knobs/Slider";
 import {SpecialChart} from "../pages/buildingDashboardSection/Working_with_widgets/Special_Chart";
 import {FunnelChart} from "../pages/buildingDashboardSection/Working_with_widgets/Special_Chart/Funnel_Chart";
 import {WaterfallChart} from "../pages/buildingDashboardSection/Working_with_widgets/Special_Chart/Waterfall_Chart";
 import {SankeyDiagram} from "../pages/buildingDashboardSection/Working_with_widgets/Special_Chart/Sankey_Diagram";
 import {Social} from "../pages/buildingDashboardSection/Working_with_widgets/Social";
 import {SocialSharing} from "../pages/buildingDashboardSection/Working_with_widgets/Social/Social Sharing";
 import {Maps} from "../pages/buildingDashboardSection/Working_with_widgets/Maps";
 import {RegionMap} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Region_Map";
 import {Cities} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Region_Map/Cities";
 import {Countries} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Region_Map/Countries";
 import {CountryRegions} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Region_Map/Country_Regions";
 import {World} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Region_Map/World";
 import {LocationMap} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Location_Map";
 import {BubbleMap} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Bubble_Map";
 import {InteractivityWithCiparthenonMaps} from "../pages/buildingDashboardSection/Working_with_widgets/Maps/Interactivity_with_ciPARTHENON_Maps";
 import {Text} from "../pages/buildingDashboardSection/Working_with_widgets/Text";
 import {Title} from "../pages/buildingDashboardSection/Working_with_widgets/Text/Title";
 import {Paragraph} from "../pages/buildingDashboardSection/Working_with_widgets/Text/Paragraph";
 import {Tables} from "../pages/buildingDashboardSection/Working_with_widgets/Tables";
 import {DrilldownTable} from "../pages/buildingDashboardSection/Working_with_widgets/Tables/Drilldown table";
 import {SimpleTable} from "../pages/buildingDashboardSection/Working_with_widgets/Tables/Simple Table";
 import {PivotTable} from "../pages/buildingDashboardSection/Working_with_widgets/Tables/Pivot Table";
 import {PivotTableHeatMap} from "../pages/buildingDashboardSection/Working_with_widgets/Tables/Pivot Table/Pivot Table - Heatmap";
// space are not allowed in names 

import {
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlinePrinter,
} from "react-icons/ai";
import { DateRangePicker } from "../pages/buildingDashboardSection/Working_with_widgets/Date_Selectors/Date_Range_Picker";
import { DataForm } from "../pages/buildingDashboardSection/Working_with_widgets/Data_Form";
import { WebHTMLPlaceholder } from "../pages/buildingDashboardSection/Working_with_widgets/Web_HTML_Placeholder";
import { Note } from "@material-ui/icons";
import { Slider } from "@material-ui/core";

export const Layout = (props) => {
  return (
    <div>
      <Header style={{ height: "90px" }} />

      <Container fluid style={{ height: "100%" }}>
        <Row style={{ height: "88vh" }}>
          <Col xs={5} md={5} lg={4} xl={4}>
            <Sidebar />
          </Col>
          <Col xs={7} md={7} lg={8} xl={8} className="right-column">
            <Switch>
            

              <Route
                exact
                path="/AccessingDashboards"
                render={(props) => <AccessingDashboards {...props} />}
              />
              <Route
                exact
                path="/OrganizeYourDashboards"
                render={(props) => <OrganizeYourDashboards {...props} />}
              />
              <Route
                exact
                path="/DashboardProperties"
                render={(props) => <DashboardProperties {...props} />}
              />
              <Route
                exact
                path="/RebindYourDashboards"
                render={(props) => <RebindYourDashboards {...props} />}
              />
              <Route
                exact
                path="/VisualizeAndShareYourDashboards"
                render={(props) => <VisualizeAndShareYourDashboards {...props} />}
              />
              <Route
                exact
                path="/PreparingYourData"
                render={(props) => <PreparingYourData {...props} />}
              />
              <Route
                exact
                path="/BeforeImportingTheData"
                render={(props) => <BeforeImportingTheData {...props} />}
              />
              <Route
                exact
                path="/MyData"
                render={(props) => <MyData {...props} />}
              />
              <Route
                exact
                path="/DataPreview"
                render={(props) => <DataPreview {...props} />}
              />
              <Route
                exact
                path="/DataProperties"
                render={(props) => <DataProperties {...props} />}
              />
              
              <Route
                exact
                path="/CreateData"
                render={(props) => <CreateData {...props} />}
              />
              
              <Route
                exact
                path="/StepsNeedToFollow"
                render={(props) => <StepsNeedToFollow {...props} />}
              />
              
              <Route
                exact
                path="/CreateView"
                render={(props) => <CreateView {...props} />}
              />
              
              <Route
                exact
                path="/MergeData"
                render={(props) => <MergeData {...props} />}
              />
              
              <Route
                exact
                path="/StepsToFollow"
                render={(props) => <StepsToFollow {...props} />}
              />
              
              <Route
                exact
                path="/DataRefreshMethods"
                render={(props) => <DataRefreshMethods {...props} />}
              />

              <Route
                exact
                path="/DataTransformation"
                render={(props) => <DataTransformation {...props} />}
              />

              <Route
                exact
                path="/AggregatedColumn"
                render={(props) => <AggregatedColumn {...props} />}
              />

              <Route
                exact
                path="/CalculatedColumn"
                render={(props) => <CalculatedColumn {...props} />}
              />

              <Route
                exact
                path="/TextSplitter"
                render={(props) => <TextSplitter {...props} />}
              />

              <Route
                exact
                path="/Filter"
                render={(props) => <Filter {...props} />}
              />

              <Route
                exact
                path="/FindAndReplace"
                render={(props) => <FindAndReplace {...props} />}
              />

              <Route
                exact
                path="/Grouping"
                render={(props) => <Grouping {...props} />}
              />

              <Route
                exact
                path="/Normalize"
                render={(props) => <Normalize {...props} />}
              />

               <Route
                exact
                path="/PivotData"
                render={(props) => <PivotData {...props} />}
              />

              <Route
                exact
                path="/UnpivotData"
                render={(props) => <UnpivotData {...props} />}
              />

              <Route
                exact
                path="/Standardize"
                render={(props) => <Standardize {...props} />}
              />

              <Route
                exact
                path="/Update"
                render={(props) => <Update {...props} />}
              />

              <Route
                exact
                path="/MyConnections"
                render={(props) => <MyConnections {...props} />}
              />

              <Route
                exact
                path="/ConnectionBroker"
                render={(props) => <ConnectionBroker {...props} />}
              />

              <Route
                exact
                path="/ConnectionProperties"
                render={(props) => <ConnectionProperties {...props} />}
              />

              <Route
                exact
                path="/DataFusion"
                render={(props) => <DataFusion {...props} />}
              />

              <Route
                exact
                path="/GettingStarted"
                render={(props) => <GettingStarted {...props} />}
              />

              <Route
                exact
                path="/CIPARTHENON"
                render={(props) => <CIPARTHENON {...props} />}
              />

              <Route
                exact
                path="/DataStream"
                render={(props) => <DataStream {...props} />}
              />

              <Route
                exact
                path="/BuildingADashboard"
                render={(props) => <BuildingADashboard {...props} />}
              />

              <Route
                exact
                path="/CreateYourFirstDashboard"
                render={(props) => <CreateYourFirstDashboard {...props} />}
              />

              <Route
                exact
                path="/DashboardBinders"
                render={(props) => <DashboardBinders {...props} />}
              />

              <Route
                exact
                path="/FilterYourWidgets"
                render={(props) => <FilterYourWidgets {...props} />}
              />
              
              <Route
                exact
                path="/GlobalFilter"
                render={(props) => <GlobalFilter {...props} />}
              />

              <Route
                exact
                path="/UsingDateSelectors"
                render={(props) => <UsingDateSelectors {...props} />}
              />

              <Route
                exact
                path="/UsingInputs"
                render={(props) => <UsingInputs {...props} />}
              />

              <Route
                exact
                path="/UsingNumericInputs"
                render={(props) => <UsingNumericInputs {...props} />}
              />

              <Route
                exact
                path="/UsingTextInput"
                render={(props) => <UsingTextInput {...props} />}
              />

              <Route
                exact
                path="/CustomColorPalette"
                render={(props) => <CustomColorPalette {...props} />}
              />

              <Route
                exact
                path="/WorkingWithWidgets"
                render={(props) => <WorkingWithWidgets {...props} />}
              />

              <Route
                exact
                path="/UsingLists"
                render={(props) => <UsingLists {...props} />}
              />

              <Route
                exact
                path="/UsingFormula"
                render={(props) => <UsingFormula {...props} />}
                />

                <Route
                exact
                path="/UsingWidgets"
                render={(props) => <UsingWidgets {...props} />}
                />

                <Route
                exact
                path="/Charts"
                render={(props) => <Charts {...props} />}
                />

                <Route
                exact
                path="/AreaChart"
                render={(props) => <AreaChart {...props} />}
                />

                <Route
                exact
                path="/BarChart"
                render={(props) => <BarChart {...props} />}
                />

                <Route
                exact
                path="/BubbleChart"
                render={(props) => <BubbleChart {...props} />}
                />

                <Route
                exact
                path="/CandlestickChart"
                render={(props) => <CandlestickChart {...props} />}
                />

                <Route
                exact
                path="/ColumnChart"
                render={(props) => <ColumnChart {...props} />}
                />

                <Route
                exact
                path="/GanttChart"
                render={(props) => <GanttChart {...props} />}
                />
                
                <Route
                exact
                path="/LineChart"
                render={(props) => <LineChart {...props} />}
                />

                <Route
                exact
                path="/PieChart"
                render={(props) => <PieChart {...props} />}
                />

                <Route
                exact
                path="/RadarChart"
                render={(props) => <RadarChart {...props} />}
                />

                <Route
                exact
                path="/ScatterChart"
                render={(props) => <ScatterChart {...props} />}
                />

                <Route
                exact
                path="/Action"
                render={(props) => <Action {...props} />}
                />

                <Route
                exact
                path="/Buttons"
                render={(props) => <Buttons {...props} />}
                />

                <Route
                exact
                path="/ExportButton"
                render={(props) => <Exportbutton {...props} />}
                />

                <Route
                exact
                path="/DateCharts"
                render={(props) => <DateCharts {...props} />}
                />

                <Route
                exact
                path="/TimeSliderChart"
                render={(props) => <TimeSliderChart {...props} />}
                />

                <Route
                exact
                path="/DateSelectors"
                render={(props) => <DateSelectors {...props} />}
                />

                <Route
                exact
                path="/CalenderDropdown"
                render={(props) => <CalenderDropdown {...props} />}
                />

                <Route
                exact
                path="/PeriodDropdown"
                render={(props) => <PeriodDropdown {...props} />}
                />

                <Route
                exact
                path="/DatesRangePicker"
                render={(props) => <DatesRangePicker {...props} />}
                />

                <Route
                exact
                path="/Gauges"
                render={(props) => <Gauges {...props} />}
                />

                <Route
                exact
                path="/CircularGauge"
                render={(props) => <CircularGauge {...props} />}
                />

                <Route
                exact
                path="/DataForms"
                render={(props) => <DataForms {...props} />}
                />

                <Route
                exact
                path="/WebsHTMLPlaceholder"
                render={(props) => <WebsHTMLPlaceholder {...props} />}
                />

                <Route
                exact
                path="/Annotations"
                render={(props) => <Annotations {...props} />}
                />

                <Route
                exact
                path="/Balloon"
                render={(props) => <Balloon {...props} />}
                />

                <Route
                exact
                path="/DateTime"
                render={(props) => <DateTime {...props} />}
                />

                <Route
                exact
                path="/Notes"
                render={(props) => <Notes {...props} />}
                />

                <Route
                exact
                path="/Shape"
                render={(props) => <Shape {...props} />}
                />

                <Route
                exact
                path="/Indicators"
                render={(props) => <Indicators {...props} />}
                />

                <Route
                exact
                path="/NumberIndicator"
                render={(props) => <NumberIndicator {...props} />}
                />

                <Route
                exact
                path="/SymbolIndicator"
                render={(props) => <SymbolIndicator {...props} />}
                />

                <Route
                exact
                path="/IntroductionToFormulas"
                render={(props) => <IntroductionToFormulas {...props} />}
                />

                <Route
                exact
                path="/ArreyFunctions"
                render={(props) => <ArreyFunctions {...props} />}
                />

                <Route
                exact
                path="/ChartFunctions"
                render={(props) => <ChartFunctions {...props} />}
                />
              
                <Route
                exact
                path="/DashboardFunctions"
                render={(props) => <DashboardFunctions {...props} />}
                />

                <Route
                exact
                path="/DataFunctions"
                render={(props) => <DataFunctions {...props} />}
                />

                <Route
                exact
                path="/DateAndTimeFunctions"
                render={(props) => <DateAndTimeFunctions {...props} />}
                />

                <Route
                exact
                path="/FilterFunctions"
                render={(props) => <FilterFunctions {...props} />}
                />

                <Route
                exact
                path="/LogicalFunctions"
                render={(props) => <LogicalFunctions {...props} />}
                />

                <Route
                exact
                path="/DateAndTimeFunctionsExamples"
                render={(props) => <DateAndTimeFunctionsExamples {...props} />}
                />

                <Route
                exact
                path="/MathematicalFunctions"
                render={(props) => <MathematicalFunctions {...props} />}
                />

                <Route
                exact
                path="/ParametersFunctions"
                render={(props) => <ParametersFunctions {...props} />}
                />

                <Route
                exact
                path="/StringFunctions"
                render={(props) => <StringFunctions {...props} />}
                /> 

                <Route
                exact
                path="/WorkingwithFormulas"
                render={(props) => <WorkingwithFormulas {...props} />}
                />

                <Route
                exact
                path="/TableFunctions"
                render={(props) => <TableFunctions {...props} />}
                />

                <Route
                exact
                path="/TableFunctionsExample1"
                render={(props) => <TableFunctionsExample1 {...props} />}
                />

                <Route
                exact
                path="/TableFunctionsExample2"
                render={(props) => <TableFunctionsExample2 {...props} />}
                />

                <Route
                exact
                path="/Inputs"
                render={(props) => <Inputs {...props} />}
                />

                <Route
                exact
                path="/AutoComplete"
                render={(props) => <AutoComplete {...props} />}
                />

                <Route
                exact
                path="/ButtonGroup"
                render={(props) => <ButtonGroup {...props} />}
                />

                <Route
                exact
                path="/SlideSwitch"
                render={(props) => <SlideSwitch {...props} />}
                />

                <Route
                exact
                path="/MultipleTagInput"
                render={(props) => <MultipleTagInput {...props} />}
                />

                <Route
                exact
                path="/NumericInputs"
                render={(props) => <NumericInputs {...props} />}
                />

                <Route
                exact
                path="/RadioButton"
                render={(props) => <RadioButton {...props} />}
                />

                <Route
                exact
                path="/TextInput"
                render={(props) => <TextInput {...props} />}
                />


                <Route
                exact
                path="/Lists"
                render={(props) => <Lists {...props} />}
                />

                <Route
                exact
                path="/DropdownList"
                render={(props) => <DropdownList {...props} />}
                />

                <Route
                exact
                path="/List"
                render={(props) => <List {...props} />}
                />

                <Route
                exact
                path="/FilterPanel"
                render={(props) => <FilterPanel {...props} />}
                />

                <Route
                exact
                path="/TrendLines"
                render={(props) => <TrendLines {...props} />}
                />

                <Route
                exact
                path="/QuickProperties"
                render={(props) => <QuickProperties {...props} />}
                />
                
                <Route
                exact
                path="/Media"
                render={(props) => <Media {...props} />}
                />

                <Route
                exact
                path="/Image"
                render={(props) => <Image {...props} />}
                />

                <Route
                exact
                path="/SliderKnob"
                render={(props) => <SliderKnob {...props} />}
                />

                <Route
                exact
                path="/RingKnob"
                render={(props) => <RingKnob {...props} />}
                />

                <Route
                exact
                path="/Sliders"
                render={(props) => <Sliders {...props} />}
                />

                <Route
                exact
                path="/SpecialChart"
                render={(props) => <SpecialChart {...props} />}
                />

                <Route
                exact
                path="/FunnelChart"
                render={(props) => <FunnelChart {...props} />}
                />

                <Route
                exact
                path="/WaterfallChart"
                render={(props) => <WaterfallChart {...props} />}
                />

                <Route
                exact
                path="/SankeyDiagram"
                render={(props) => <SankeyDiagram {...props} />}
                />

                <Route
                exact
                path="/Social"
                render={(props) => <Social {...props} />}
                />

                <Route
                exact
                path="/SocialSharing"
                render={(props) => <SocialSharing {...props} />}
                />

                <Route
                exact
                path="/Maps"
                render={(props) => <Maps {...props} />}
                />

                <Route
                exact
                path="/RegionMap"
                render={(props) => <RegionMap {...props} />}
                />

                <Route
                exact
                path="/Cities"
                render={(props) => <Cities {...props} />}
                />

                <Route
                exact
                path="/Countries"
                render={(props) => <Countries {...props} />}
                />

                <Route
                exact
                path="/CountryRegions"
                render={(props) => <CountryRegions {...props} />}
                />

                <Route
                exact
                path="/World"
                render={(props) => <World {...props} />}
                />

                <Route
                exact
                path="/LocationMap"
                render={(props) => <LocationMap {...props} />}
                />

                <Route
                exact
                path="/BubbleMap"
                render={(props) => <BubbleMap {...props} />}
                />

                <Route
                exact
                path="/InteractivityWithCiparthenonMaps"
                render={(props) => <InteractivityWithCiparthenonMaps {...props} />}
                />

                <Route
                exact
                path="/Text"
                render={(props) => <Text {...props} />}
                />

                <Route
                exact
                path="/Title"
                render={(props) => <Title {...props} />}
                />

                <Route
                exact
                path="/Paragraph"
                render={(props) => <Paragraph {...props} />}
                />

                <Route
                exact
                path="/tutorials"
                render={(props) => <tutorials {...props} />}
              />

              <Route
                exact
                path="/apireference"
                render={(props) => <apireference {...props} />}
              />
              <Route
                exact
                path="/faq"
                render={(props) => <faq {...props} />}
              />
              <Route
                exact
                path="/releasenotes"
                render={(props) => <releasenotes {...props} />}
              />
              <Route
                exact
                path="/Tables"
                render={(props) => <Tables {...props} />}
              />
              <Route
                exact
                path="/DrilldownTable"
                render={(props) => <DrilldownTable{...props} />}
              />
              <Route
                exact
                path="/SimpleTable"
                render={(props) => <SimpleTable {...props} />}
              />
              <Route
                exact
                path="/PivotTable"
                render={(props) => <PivotTable {...props} />}
              />
              <Route
                exact
                path="/PivotTableHeatMap"
                render={(props) => <PivotTableHeatMap {...props} />}
              />
              

                











              
              
              

              
              
            </Switch>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
