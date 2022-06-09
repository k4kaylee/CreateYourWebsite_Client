import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const Pages = observer(() => {
    const { course } = useContext(Context)
    const pageCount = Math.ceil(course.totalCount / course.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className="pagination" style={{ marginTop: "20px" }}>
            {pages.map(page =>
                <a
                    key={page}
                    active={course.page === page}
                    onClick={() => course.setPage(page)}
                >
                    {page}
                </a>

            )}
        </div>
    );
}
)

export default Pages;