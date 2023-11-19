import * as React from "react";

const PaginationButton = ({
  buttonIndex,
  page,
  changePage,
}: {
  buttonIndex: number;
  page: number;
  changePage: (page: number) => void;
}) => {
  return (
    <button
      className={`${
        page === buttonIndex + 1 && "paginationButtonActive"
      } paginationButton`}
      onClick={() => changePage(buttonIndex + 1)}
    >
      {buttonIndex + 1}
    </button>
  );
};

export default PaginationButton;
