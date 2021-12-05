import styled from 'styled-components/macro';
import StarIcon from '@mui/icons-material/Star';

export const Title = styled.h2`
  margin-top: 10px;
  color: ${props => props.theme.textPrimary};
`;

export const SubHeaderInfo = styled.div`
  margin-top: 20px;
  justify-content: space-between;
  align-items: flex-end;
  display: flex;
  flex-direction: row;
`;

export const GeneralInfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const GeneralInfoText = styled.h4`
  color: ${props => props.theme.textSecondary};
`;

export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto 0px;
  width: 40%;
  justify-content: flex-end;
`;

export const RatingIcon = styled(StarIcon)`
  color: ${props => props.theme.primary} !important;
  height: 100%;
  margin: auto 10px;
  font-size: 40px !important;
`;
export const RatingInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Rate = styled.h4`
  color: ${props => props.theme.textSecondary};
  > span {
    font-weight: bold;
  }
`;

export const RateVotes = styled.h5`
  color: ${props => props.theme.textSecondary};
`;
