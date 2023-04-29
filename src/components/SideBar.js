import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function side_bar() {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-auto min-vh-100 bg-light d-flex align-item-center">
                    <ul>
                        <li><a href="/" className="nav-link"><i className='bi-house'/></a></li>
                        <li><a href="/" className="nav-link"><i className='bi-speedometer2'/></a></li>
                        <li><a href="/" className="nav-link"><i className='bi-table'/></a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}