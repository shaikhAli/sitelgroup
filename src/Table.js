import React from "react";
import DataTable from "react-data-table-component";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import './Table.css';
import data from './data/records.json';
import ToggleButton from './ToggleButton';

const arrayRecords = Object.values(data);

function getNumberOfPages(rowCount, rowsPerPage) {
    return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
    const results = [];

    for (let i = 1; i < pages; i++) {
        results.push(i);
    }

    return results;
}

const columns = [
    {
        name: "",
        button: true,
        cell: (row) => (
            <i className={"fa fa-" + row.iconType}></i>
        )
    },
    {
        name: "Location",
        selector: (row) => row.location,
        sortable: true,
        center: true,
    },
    {
        name: "Rule",
        selector: (row) => row.rule,
        sortable: true,
        center: true,
    },
    {
        name: "Components/Indication",
        sortable: true,
        center: true,
        cell: (row) => (
            <div>
                {row.components} <i className="fa fa-info-circle component-info"></i>
                <div className="info-details">

                    <div className="info-header">
                        Components
                    </div>

                    <div className="info-content">
                        <div className="components-content-items">
                            <div className="components-content-toggle-items">
                                <label className="components-item-label">Aggravated</label>
                                <ToggleButton
                                    status="1"
                                    className="edit-modal-toggle-btn"
                                />

                            </div>
                            <div className="components-content-toggle-items">

                                <label className="components-item-label">Angry</label>
                                <ToggleButton
                                    status="1"
                                    className="edit-modal-toggle-btn"
                                />

                            </div>
                            <div className="components-content-toggle-items">

                                <label className="components-item-label">Annoyed</label>
                                <ToggleButton
                                    status="1"
                                    className="edit-modal-toggle-btn"
                                />

                            </div>
                            <div className="components-content-toggle-items">

                                <label className="components-item-label">Are you kidding me</label>
                                <ToggleButton
                                    status="1"
                                    className="edit-modal-toggle-btn"
                                />

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        )
    },
    {
        name: "Modified By",
        selector: (row) => row.modifiedBy,
        sortable: true,
        center: true,
    },
    {
        name: "Modified Date",
        selector: (row) => row.modifiedDate,
        sortable: true,
        center: true,
    },
    {
        name: "Created By",
        selector: (row) => row.createdBy,
        sortable: true,
        center: true,
    },
    {
        name: "Effective From",
        selector: (row) => row.effectiveFrom,
        sortable: true,
        center: true,
    },
    {
        name: "Status",
        button: true,
        cell: (row) => (
            <ToggleButton status={row.status} />
        )
    },
    {
        name: "Coach",
        cell: (row) => (
            <ToggleButton status={row.coach} />
        ),
        center: true,
    },
    {
        name: "Action",
        cell: () => (
            <div className="actions-container">
                <i
                    className="edit fa fa-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                ></i>
                <i className="delete fa fa-trash"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                ></i>
                <i className="upload fa fa-upload"></i>

                <div className="modal" tabIndex="-1" id="deleteModal">
                    <div className="modal-dialog">
                        <div className="modal-content delete-modal-contents">

                            <div className="modal-body">
                                <p className="warning-text"><i className="fa fa-warning warning" aria-hidden="true"></i>Modal body text goes here.</p>
                            </div>
                            <div className="delete-modal-container">
                                <button
                                    className="btn-regular delete-btn"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn-regular delete-btn"
                                    data-bs-dismiss="modal"
                                >
                                    Yes, Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal" tabIndex="-1" id="editModal">
                    <div className="modal-dialog">
                        <div className="modal-content edit-modal-contents">
                            <div className="modal-header edit-modal-header">
                                <h5 className="modal-title">Edit Rule</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body edit-modal-body">
                                <div className="edit-modal-content">
                                    <div className="edit-modal-content-location">
                                        <div className="edit-modal-content-location-input">
                                            <label className="label"> Location</label>
                                            <select className="details location-dropdown">
                                                {arrayRecords.map((key) => {
                                                    return <option key={key.id} >{key.components}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="edit-modal-content-rule">
                                        <div className="edit-modal-content-rule-input">
                                            <label className="label"> Rule</label>
                                            <select className="details rule-dropdown">
                                                {arrayRecords.map((key) => {
                                                    return <option key={key.id}>{key.rule}</option>
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="edit-modal-content-description">
                                        <div className="edit-modal-content-description-input">
                                            <label className="label"> Description</label>
                                            <textarea className="description-textarea"
                                                defaultValue={"This rule is to identify the customers satisfaction overall."}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="edit-modal-content-components">
                                        <div className="edit-modal-content-components-input">
                                            <label className="label"> Components:</label>
                                            <div className="components-content">
                                                <div className="components-content-items">
                                                    <div className="components-content-toggle-items">
                                                        <label className="components-item-label">Aggravated</label>
                                                        <ToggleButton
                                                            status="1"
                                                            className="edit-modal-toggle-btn"
                                                        />

                                                    </div>
                                                    <div className="components-content-toggle-items">

                                                        <label className="components-item-label">Angry</label>
                                                        <ToggleButton
                                                            status="1"
                                                            className="edit-modal-toggle-btn"
                                                        />

                                                    </div>
                                                    <div className="components-content-toggle-items">

                                                        <label className="components-item-label">Annoyed</label>
                                                        <ToggleButton
                                                            status="1"
                                                            className="edit-modal-toggle-btn"
                                                        />

                                                    </div>
                                                    <div className="components-content-toggle-items">

                                                        <label className="components-item-label">Are you kidding me</label>
                                                        <ToggleButton
                                                            status="1"
                                                            className="edit-modal-toggle-btn"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="edit-modal-content-action-buttons">
                                        <button className="btn-regular">Save</button>
                                        <button className="btn-regular">Save As</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
    }
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
    rowsPerPage,
    rowCount,
    onChangePage,
    onChangeRowsPerPage, // available but not used here
    currentPage
}) => {
    const handleBackButtonClick = () => {
        onChangePage(currentPage - 1);
    };

    const handleNextButtonClick = () => {
        onChangePage(currentPage + 1);
    };

    const handlePageNumber = (e) => {
        onChangePage(Number(e.target.value));
    };

    const pages = getNumberOfPages(rowCount, rowsPerPage);
    const pageItems = toPages(pages);
    const nextDisabled = currentPage === pageItems.length;
    const previosDisabled = currentPage === 1;

    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleBackButtonClick}
                        disabled={previosDisabled}
                        aria-disabled={previosDisabled}
                        aria-label="previous page"
                    >
                        Previous
                    </button>
                </li>
                {pageItems.map((page) => {
                    const className =
                        page === currentPage ? "page-item active" : "page-item";

                    return (
                        <li key={page} className={className}>
                            <button
                                className="page-link"
                                onClick={handlePageNumber}
                                value={page}
                            >
                                {page}
                            </button>
                        </li>
                    );
                })}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={handleNextButtonClick}
                        disabled={nextDisabled}
                        aria-disabled={nextDisabled}
                        aria-label="next page"
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

const customStyles = {
    rows: {
        style: {
            border: '2px solid #CCCCCC',
            borderLeft: 'none',
            borderRight: 'none'
        },
    },
    headCells: {
        style: {
            border: '2px solid #CCCCCC',
            borderBottom: 'none',
            borderTop: 'none',
            height: '60px',
            fontSize: '18px',
            color: '#5B9BD5',
            fontWeight: '500'
        },
    },
    cells: {
        style: {
            textAlign: 'center !important',
            alignItem: 'center !important',
            fontSize: '16px',
            color: 'black'
        },
    },
};

const Table = () => {

    return (
        <div className="table-container">
            <DataTable
                className="table-container"
                columns={columns}
                data={data}
                defaultSortFieldID={1}
                pagination
                paginationComponent={BootyPagination}
                customStyles={customStyles}
            />
        </div>
    );
}

export default Table;