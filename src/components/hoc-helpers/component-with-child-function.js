import React from "react";

const componentWithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (<Wrapped {...props}>
            {fn}
        </Wrapped>)
    }
};

export default componentWithChildFunction