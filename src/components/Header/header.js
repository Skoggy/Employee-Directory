import React from "react";

import styled from 'styled-components'

const HeaderStyles = styled.div`
.jumbotron {
    background: #0000CD;
    color: white;
    text-align:center;
}
`;

function Header() {
    return (
        <HeaderStyles>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Employee Directory</h1>

                </div>
            </div>
        </HeaderStyles>
    );
}


export default Header;