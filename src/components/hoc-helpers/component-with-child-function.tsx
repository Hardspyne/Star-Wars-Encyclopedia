import React from "react";

const componentWithChildFunction = (childFunction: (...args: any[]) => any) =>(Wrapped: React.ComponentType<any>) => {
    return (props: any) => {
        return (<Wrapped {...props}>
            {childFunction}
        </Wrapped>)
    }
};

export default componentWithChildFunction