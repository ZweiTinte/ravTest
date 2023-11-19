import * as React from "react";
import PaginationButton from "../atoms/PaginationButton";

const Pagination = ({
  pages,
  page,
  changePage,
}: {
  pages: number;
  page: number;
  changePage: (page: number) => void;
}) => {
  return (
    <div className="paginationArea">
      {[...Array(pages).keys()].map((i) => {
        return (
          <PaginationButton
            key={i}
            buttonIndex={i}
            page={page}
            changePage={changePage}
          />
        );
      })}
    </div>
  );
};

export default Pagination;
