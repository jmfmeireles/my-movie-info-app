import styled from 'styled-components/macro';
import StarIcon from '@mui/icons-material/Star';

export const MoviesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MovieWrapper = styled.a`
  transition: 0.5s ease;
  width: 25%;
  margin-bottom: 30px;
  background-color: ${props => props.theme.backgroundVariant};
  @media (max-width: 1000px) {
    width: 33%;
  }
  @media (max-width: 750px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #333;
    word-break: break-all;
    background-color: transparent;
  }
  :hover {
    box-shadow: 0px 0px 20px #b4b4b4;
    transform: scale(1.02);
  }
`;

export const Panel = styled.div`
  padding: 20px;
  text-align: center;
`;

export const MovieImage = styled.div`
  width: 60%;
  margin: 5px auto;
  cursor: pointer;
  img {
    width: 100%;
    display: block;
    border-style: none;
  }
`;

export const Name = styled.h3`
  margin-top: 20px;
  color: ${props => props.theme.textPrimary};
`;

export const Crew = styled.p`
  margin-top: 2px;
  line-height: 12px;
  color: ${props => props.theme.textSecondary};
`;

export const YearAndRating = styled.div`
  margin: 5px auto;
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;

export const Year = styled.h4`
  color: ${props => props.theme.textPrimary};
`;
export const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: ${props => props.theme.textSecondary};
  * {
    line-height: 2px;
  }
`;

export const Rating = styled(StarIcon)`
  color: ${props => props.theme.primary} !important;
`;
