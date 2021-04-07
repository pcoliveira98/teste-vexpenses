import React from 'react';

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export default function Pagination({ limit, total, offset, setOffset }) {
    const currentPage = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - MAX_LEFT, 1);

    return (
        <ul>{Array.from({ length: MAX_ITEMS })
            .map((_, index) => index + firstPage)
            .map((page) =>
                <li>
                    <button onClick={() => setOffset((page - 1) * limit)}>{page}</button>
                </li>
            )}
        </ul>
    )
}