import { Chip, DialogContent as MUIDialogContent } from '@mui/material';
import styled from 'styled-components/macro';

export const DetailedInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const PosterWrapper = styled.a<{ disabled: boolean }>`
  width: 30%;
  padding: 5px;
  height: 100%;
  margin: 5px auto;
  text-align: center;
  cursor: ${props => (props.disabled ? 'none' : 'pointer')};
  img {
    width: 100%;
    display: block;
    border-style: none;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const DataWrapper = styled.div`
  padding: 5px;
  width: 70%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const GenresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Genre = styled(Chip)`
  margin-right: 10px;
  margin-top: 2px;
`;

export const Plot = styled.p`
  text-align: justify;
  text-justify: inter-word;
`;

export const DirectorsAndWritersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-top: solid 1px ${props => props.theme.textSecondary};
`;

export const DirectorsOrWrittersWrapper = styled.div`
  padding: 10px 0px;
  width: 50%;
  display: flex;
  flex-direction: column;
  > p {
    line-height: 12px;
  }
`;

export const ActorsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: solid 1px ${props => props.theme.textSecondary};
  padding-top: 10px;
`;

export const ActorWrapper = styled.a<{ star: boolean }>`
  color: ${props =>
    props.star ? props.theme.primary : props.theme.textSecondary};
  margin-right: 10px;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const DialogTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  .MuiDialogTitle-root {
    word-break: break-all;
    width: 80%;
    @media (max-width: 1000px) {
      font-size: 2rem !important;
    }
    @media (max-width: 750px) {
      font-size: 1.5rem !important;
    }
    @media (max-width: 500px) {
      font-size: 1rem !important;
    }
  }
`;

export const DialogContent = styled(MUIDialogContent)`
  text-align: center;
  overflow-y: auto;
  img {
    width: 90%;
    display: block;
    margin: auto;
  }
`;
