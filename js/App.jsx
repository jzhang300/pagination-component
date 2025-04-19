import React from "react";

// merge request trigger
// Demo of ICL React component
// import Button from "Indeed/Button";
import Toggle from "Indeed/Toggle";
import Pagination from "./Pagination/Pagination";
import PaginationPage from "./Pagination/PaginationPage";
import PaginationArrow from "./Pagination/PaginationArrow";

// If you want to use Janus typography classes
// import "@indeed/frontend-style-janus/dist/design/Typography.css";

export default class App extends React.Component {
  // babel-plugin-transform-class-properties lets you declare class properties directly in class
  // Don't need constructor any more!
  state = {
    // text: "If you're seeing this, Webpack successfully compiled."
    hasBorder: true,
    currentPage: 1
  };

  // Don't need to manually bind! Use arrow functions in class context.
  onClickHandler = () => {
    console.log(this.state.text);
  };

  render() {
    return (
      <div id="app-inner" onClick={this.onClickHandler}>
        <h1>
          <span>
            <b>Pagination</b> explorations
          </span>
        </h1>
        <Toggle
          isChecked={this.state.hasBorder}
          onChange={() => {
            this.setState({ hasBorder: !this.state.hasBorder });
          }}
          labelText="Toggle borders"
          labelPosition="inline"
        />
        <div className="app-row">
          <div>
            <h2>
              <b>Interactions</b>
            </h2>
            <Pagination
              hasBorder={this.state.hasBorder}
              size="md"
              label="Pagination"
              totalPages={100}
              currentPage={this.state.currentPage}
              renderPage={({ page, currentPage }) => (
                <PaginationPage
                  label={`Page ${page}. ${currentPage === page ? "current link" : ""}`}
                  href={`?page=${page}&resultsPerPage=20`}
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      currentPage: page
                    });
                  }}
                >
                  {page}
                </PaginationPage>
              )}
              renderArrow={({ page, type }) => (
                <PaginationArrow
                  label={type === "next" ? "Go to next page." : "Go to previous page."}
                  href={`?page=${page}&resultsPerPage=20`}
                  onClick={e => {
                    e.preventDefault();
                    this.setState({
                      currentPage: page
                    });
                  }}
                />
              )}
            />
          </div>
        </div>
        <div className="app-row">
          <PaginationSection size="sm" hasBorder={this.state.hasBorder} />
          <PaginationSection size="md" hasBorder={this.state.hasBorder} />
        </div>
      </div>
    );
  }
}

const PaginationSection = ({ size, hasBorder }) => (
  <div className="app-column">
    <h2>
      <b>{size === "sm" ? "Small" : "Medium"}</b> Size
    </h2>
    <h3>
      <b>6 or less</b> pages
    </h3>
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={1} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={2} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={4} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={5} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={6} currentPage={1} />
    <h3>
      <b>7 or more</b> pages
    </h3>
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={2} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={3} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={4} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={5} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={6} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={7} currentPage={7} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={2} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={3} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={4} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={5} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={6} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={7} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={8} currentPage={8} />
    <h3>
      <b>1XXX</b> total pages
    </h3>
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={10} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={100} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={100} currentPage={3} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={100} currentPage={50} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={100} currentPage={98} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={1000} currentPage={1} />
    <Pagination hasBorder={hasBorder} size={size} label="Pagination" totalPages={100000} currentPage={1} />
  </div>
);
