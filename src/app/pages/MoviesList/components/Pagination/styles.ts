import styled from 'styled-components/macro';
import { Pagination as MUIPagination } from '@mui/material';

export const Pagination = styled(MUIPagination)`
  .MuiPagination-ul {
    justify-content: center !important;
  }
  .MuiPaginationItem-page,
  .MuiPaginationItem-previousNext {
    color: ${props => props.theme.primary} !important;
    border: solid 1px ${props => props.theme.primary} !important;
  }
  .MuiPaginationItem-ellipsis {
    color: ${props => props.theme.primary} !important;
  }
`;
