import styled from "styled-components";

const StyledBrand = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  flex-direction: row;

  .brand-icon {
   color: var(--color-brand);
}
`;

const StyledBrandName = styled.h1`
  font-size: 2.4rem;
`;

const StyledImg = styled.img`
  height: 80px;
  width: 80px;
`;

function Brand() {
  return (
    <StyledBrand>
        <StyledImg src="/logo.svg"/>
        <StyledBrandName>PIXALYTICA</StyledBrandName>
    </StyledBrand>
  )
}

export default Brand