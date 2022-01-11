import styled, { css } from "styled-components";
import { usePagination, DOTS } from "../../hooks/usePagination";

const Pagination = (props) => {
  const { totalCount, pageSize, currentPage, changePage, totalPages } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount: 1,
    pageSize,
    totalPages,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <PaginationContainer>
      <PaginationItem
        disabled={currentPage === 1}
        onClick={() => changePage("prev")}
      >
        <Arrow left />
      </PaginationItem>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          const key = `${index}_${new Date().getTime()}`;
          return <PaginationItem key={key}>&#8230;</PaginationItem>;
        }

        return (
          <PaginationItem
            key={pageNumber}
            selected={pageNumber === currentPage}
            onClick={() => changePage(pageNumber - 1)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        disabled={currentPage === totalPages}
        onClick={() => changePage("next")}
      >
        <Arrow right />
      </PaginationItem>
    </PaginationContainer>
  );
};

const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${(props) => props.theme.media.phone} {
    margin-bottom: 25px;
  }
`;

const PaginationItem = styled.li`
  padding: 0 12px;
  height: 32px;
  text-align: center;
  margin: auto 4px;
  color: rgba(0, 0, 0, 0.87);
  display: flex;
  box-sizing: border-box;
  align-items: center;
  letter-spacing: 0.01071em;
  border-radius: 16px;
  line-height: 1.43;
  font-size: 13px;
  min-width: 32px;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `};
  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: ${(props) => props.theme.colors.lightBackground};
    `};
`;

const Arrow = styled.div`
  &::before {
    position: relative;
    content: "";
    display: inline-block;
    width: 0.4em;
    height: 0.4em;
    border-right: 0.12em solid rgba(0, 0, 0, 0.87);
    border-top: 0.12em solid rgba(0, 0, 0, 0.87);
  }
  ${(props) =>
    props.left &&
    css`
      transform: rotate(-135deg) translate(-50%);
    `}
  ${(props) =>
    props.right &&
    css`
      transform: rotate(45deg);
    `}
`;

export default Pagination;
