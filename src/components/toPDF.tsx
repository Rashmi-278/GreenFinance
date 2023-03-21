import React from "react";
// A function that takes a component and converts it to a PDF
export const toPDF = (Component: React.FC) => {     



    // This is the component that will be rendered to PDF
    const PDFComponent = () => {
        return (
            <div>
                <Component />
            </div>
        );
    };

    return PDFComponent;
};