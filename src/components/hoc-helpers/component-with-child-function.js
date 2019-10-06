import React from "react";

const componentWithChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (<Wrapped {...props}>
            {fn}
        </Wrapped>)
    }
};

export default componentWithChildFunction