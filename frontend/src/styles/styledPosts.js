import styled from "styled-components"

export const Post = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, minmax(235px, 1fr));
  }
`
export const Card = styled.div`
  padding-right: 0;
  border-right: none;
  img {
    margin-bottom: 0;
  }
  &:last-child {
    border-right: none;
  }
  @media (min-width: 720px) {
    border-right: 1px solid rgb(226, 226, 226);
    padding-right: 1rem;
  }
`
export const Headline = styled.p`
  font-weight: 600;
  color: #121212;
  font-size: 0.95rem;
`
export const FooterText = styled.p`
  color: #999999;
  font-size: 0.8rem;
`