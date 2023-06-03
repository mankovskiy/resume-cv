import styled from '@emotion/styled';

export const Img = styled.img`
  width: 100%;
  max-width: 370px;
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  gap: 30px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 60px) / 3);
`;
export const Thumb = styled.div`
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.3s ease-in-out;
  border-radius: 10px;
  overflow: hidden;
  min-width: 370px;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectsWrapNname = styled.div`
  text-align: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: var(--white-color);
  padding: 15px 0 25px 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 31px;
  color: #171718;
`;
