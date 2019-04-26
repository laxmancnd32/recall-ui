import React from 'react';
import "./page-container.scss";

const PageContainerComponent = props => {

    return (
        <div className={"page-container-component"}>
            {props.children}
        </div>
    );
}

export default PageContainerComponent;
