import React from "react";
import  './page-row.css';

const PageRow = ({left, right, errorIndicator}) => {
    return (<div className="row-page-info">
        {left}
        {right}
        {errorIndicator}
    </div>)
};
export default PageRow;