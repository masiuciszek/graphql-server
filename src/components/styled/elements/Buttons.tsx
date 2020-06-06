/* eslint-disable quotes */
import styled from 'styled-components';
import { Link } from 'gatsby';
import { positionLeft } from '../styled_utils/position';

interface CtaLinkProps {
  absoluteHome?: boolean;
  bg?: string;
  cl?: string;
}
export const CtaLink = styled(Link)<CtaLinkProps>`
  ${(props) => props.absoluteHome && positionLeft(`absolute`, `50`, `66`)};
  width: 12rem;
  font-size: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 16px;
  display: block;
  text-align: center;
  padding: 0.4rem 0.8rem;
  transition: ${(props) => props.theme.transition.quickTransition};
  cursor: pointer;
  background: ${({ theme, bg }) => bg || `none`};
  color: ${({ theme, cl }) => cl || theme.colors.primary};
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.secondaryShadow};
    width: 12.6rem;
  }
`;
export const BtnPrimary = styled.button``;
