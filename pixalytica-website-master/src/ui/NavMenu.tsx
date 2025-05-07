import styled from "styled-components";
import Dropdown from "./Dropdown";

const StyledNavMenu = styled.ul<{
    direction: "row" | "column";
    gap: string;
}>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
`;


type NavMenuProps = {
    gap?: string;
    type: "nav" | "hamburger"
} & React.HTMLAttributes<HTMLUListElement>;


function NavMenu({ gap = "2rem", type, ...props }: NavMenuProps) {

    const direction = type === "nav" ? "row" : "column";

    return (
        <StyledNavMenu direction={direction} gap={gap} {...props}>
            <Dropdown type={type}>
                <Dropdown.NavLink>Home</Dropdown.NavLink>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.Toggle>Services</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>Web Designing</Dropdown.Item>
                    <Dropdown.Item>SEO</Dropdown.Item>
                    <Dropdown.Item>Dashboard Anayltics</Dropdown.Item>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.NavLink>Our Team</Dropdown.NavLink>
            </Dropdown>
            <Dropdown type={type}>
                <Dropdown.Toggle>About Us</Dropdown.Toggle>
                <Dropdown.List>
                    <Dropdown.Item>About us</Dropdown.Item>
                    <Dropdown.Item>Our team</Dropdown.Item>
                    <Dropdown.Item>Why choose us</Dropdown.Item>
                    <Dropdown.Item>FAQ</Dropdown.Item>
                </Dropdown.List>
            </Dropdown>

        </StyledNavMenu>
    )
}

export default NavMenu