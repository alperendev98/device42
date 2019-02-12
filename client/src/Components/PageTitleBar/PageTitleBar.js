/**
 * Page Title Bar Component
 * Used To Display Page Title & Breadcrumbs
 */
import React from 'react';

const PageTitleBar = ({ title }) => {
    
    return (
        <div className="page-title d-flex justify-content-between align-items-center">
            {title &&
                <div className="page-title-wrap">
                    <i className="ti-angle-left"></i>
                    <h2 className="">{title}</h2>
                </div>
            }
        </div>
    )
};

// default props value
PageTitleBar.defaultProps = {
    enableBreadCrumb: true
}

export default PageTitleBar;
