import React from "react";
import './page-row.css';
import PropTypes from 'prop-types';


type PageRowPropsType = {
    left: any,
    right: any,
    errorIndicator?: any
};

const PageRow: React.FC<PageRowPropsType> = ({left, right, errorIndicator}) => {
    return (<div className="row-page-info">
        {left}
        {right}
        {errorIndicator}
    </div>)
};

PageRow.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node,
    errorIndicator: PropTypes.node
};

export default PageRow;