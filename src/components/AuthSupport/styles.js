import styled, { css } from 'styled-components'

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${props => props.theme.colors.backgroundWhite};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  > img {
    height: 32px;
    cursor: pointer;
  }

  > div {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
      color: ${props => props.theme.colors.darkGray};
      margin-right: 16px;
    }
    button {
      font-weight: 700;
      font-size: 14px;
    }
  }
`
export const HowCanHelpConatiner = styled.div`
  background: ${props => props.theme.colors.backgroundWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 24px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }
`
export const SearchConatiner = styled.div`
  display: flex;
  align-items: center;
  min-width: 70%;
  max-width: 920px;
  margin-top: 32px;

  input {
    flex: 1;
    margin-right: 24px;
    height: 62px;
  }

  button {
    height: 62px;
    width: 94px;
    svg {
      font-size: 34px;
    }
  }
`
export const ContactConatiner = styled.div`
  margin: 16px 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  background: ${props => props.theme.colors.backgroundWhite};
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;

  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
  }

  > p {
    margin: 16px 0 32px 0;
    text-align: center;
    font-size: 12px;
    color: ${props => props.theme.colors.grey};
  }

  > * {
    max-width: 684px;
  }

  > button {
    margin-top: 16px;
    height: 50px;
    width: 212px;
  }
`
export const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > div {
    width: calc(50% - 12px);
  }
  margin-bottom: 32px;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`

export const FiterOptionContainer = styled.div`
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding-top: 2px;
  > p {
    padding: 8px 16px 0 16px;
    font-size: 12px;
    color: ${props => props.theme.colors.darkGray};
    margin: 0;
  }
`

export const SelectWrapper = styled.div`
  #select-input {
    border: none;
    width: 100%;

    > div:first-child {
      justify-content: space-between;
    }

    .select-arrow {
      color: ${props => props.theme.colors.main};
      font-size: 20px;
      padding-right: 7px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`
export const Option = styled.div`
  padding: 5px 11px;
  font-size: 14px;
  color: ${props => props.theme.colors.black1};
  font-weight: 500;

  ${({ isPlaceholder }) => isPlaceholder && css`
    color: ${props => props.theme.colors.disabled};
    font-weight: 400;
  `}
`
export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${props => props.theme.colors.backgroundWhite};

  > div {
    &:first-child {
      display: flex;
      align-items: center;
      img {
        height: 32px;
        cursor: pointer;
      }
      span {
        font-size: 14px;
        margin-left: 8px;
        color: #313131;
      }
    }
    &:last-child {
      display: flex;
      align-items: center;

      > * {
        &:not(:last-child) {
          margin-right: 32px;
        }
      }
    }
  }
`
export const LinkItem = styled.div`
  text-decoration: underline;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.main};
  }
`
