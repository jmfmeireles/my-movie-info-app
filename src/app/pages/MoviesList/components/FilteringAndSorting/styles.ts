import styled from 'styled-components/macro';
import Paper from '@mui/material/Paper';

export const VisibilityButtonsWrapper = styled.div`
  width: 60%;
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (min-width: 500px) {
    display: none;
  }
`;

export const FilterAndSorterWrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const FilterWrapper = styled(Paper)`
  width: 40%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SorterWrapper = styled.form`
  width: 40%;
  .MuiOutlinedInput-root {
    width: 80% !important;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
