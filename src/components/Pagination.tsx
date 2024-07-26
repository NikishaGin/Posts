import React from 'react';
import {getPagesArray} from "../utils/pages";

type PropsType ={
    totalPages: number
    page: number
    changePage: (page: number) => void
}


export const Pagination = (props: PropsType) => {

    let pagesArray = getPagesArray(props.totalPages)

    return (
        <div className={'page__wrapper'}>
            {pagesArray.map((el) => {
                return <span
                    key={el}
                    className={props.page === el ? 'page page__current' : 'page'}
                    onClick={()=>props.changePage(el)}
                >
                        {el}
                    </span>
            })}
        </div>
    );
};

