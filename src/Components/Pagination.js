import React from 'react'

function Pagination({ page, setPage, totalPages }) {
    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }
    const prevPage = () => {
        if (page === 1) return;
        setPage(page - 1);
    }
    const latestPage = () => {
        setPage(totalPages);
    }
    const firstPage = () => {
        setPage(1);
    }
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination d-flex justify-content-center mt-5">
                <li class="page-item">
                    <button className="page-link" aria-label="Previous" onClick={firstPage}>
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={prevPage}>
                        Prev
                    </button>
                </li>
                <li className="page-item"><span className="page-link">{page} of {totalPages}</span></li>
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={nextPage}>
                        Next
                    </button>
                </li>
                <li class="page-item">
                    <button className="page-link" aria-label="Next" onClick={latestPage}>
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination