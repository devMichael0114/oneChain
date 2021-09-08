import React from 'react'
import { useHistory } from 'react-router-dom'
import { useTheme } from 'styled-components'
import { Button, Input, Select, TextArea } from '../Shared'
import BsSearch from '@meronex/icons/bs/BsSearch'

import {
  HeaderContainer,
  HowCanHelpConatiner,
  SearchConatiner,
  ContactConatiner,
  InputWrapper,
  ContactItem,
  FiterOptionContainer,
  SelectWrapper,
  Option,
  FooterContainer,
  LinkItem
} from './styles'

export const AuthSupport = () => {
  const theme = useTheme()
  const history = useHistory()

  const topicOptions = [
    { value: '1', content: <Option>topic 1</Option> },
    { value: '2', content: <Option>topic 2</Option> },
    { value: '3', content: <Option>topic 3</Option> }
  ]

  return (
    <>
      <HeaderContainer>
        <img
          src={theme.images.logos.logoMain}
          alt='logo'
          onClick={() => history.push('/')}
        />
        <div>
          <span>Already have a account?</span>
          <Button
            naked
            isUnderline
            color='main'
            onClick={() => history.push('/')}
          >
            Sign In
          </Button>
        </div>
      </HeaderContainer>
      <HowCanHelpConatiner>
        <h1>How can we help you?</h1>
        <SearchConatiner>
          <Input
            placeholder='Search help articles...'
          />
          <Button
            color='main'
          >
            <BsSearch />
          </Button>
        </SearchConatiner>
      </HowCanHelpConatiner>
      <ContactConatiner>
        <h1>Contact us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in nunc ultrices nunc urna. Sapien velit ultrices.
        </p>
        <ContactItem>
          <InputWrapper>
            <label>Full name</label>
            <Input
              placeholder='Your name...'
            />
          </InputWrapper>
          <InputWrapper>
            <label>Email address</label>
            <Input
              placeholder='Email...'
            />
          </InputWrapper>
        </ContactItem>
        <ContactItem>
          <FiterOptionContainer>
            <p>Topic</p>
            <SelectWrapper>
              <Select
                options={topicOptions}
                placeholder={<Option isPlaceholder>Select topic</Option>}
                notReload
                onChange={val => console.log(val)}
              />
            </SelectWrapper>
          </FiterOptionContainer>
          <FiterOptionContainer>
            <p>Topic</p>
            <SelectWrapper>
              <Select
                options={topicOptions}
                placeholder={<Option isPlaceholder>Select topic</Option>}
                notReload
                onChange={val => console.log(val)}
              />
            </SelectWrapper>
          </FiterOptionContainer>
        </ContactItem>
        <InputWrapper>
          <label>Messages</label>
          <TextArea
            rows={6}
            placeholder='Write your message...'
          />
        </InputWrapper>
        <Button
          color='main'
        >
          Send messages
        </Button>
      </ContactConatiner>

      <FooterContainer>
        <div>
          <img
            src={theme.images.logos.logoMain}
            alt='logo'
            onClick={() => history.push('/')}
          />
          <span>© Copyright ONEchain. All rights reserved. </span>
        </div>
        <div>
          <LinkItem>Terms & Conditions</LinkItem>
          <LinkItem>Privacy policy</LinkItem>
          <LinkItem>Cookie use</LinkItem>
        </div>
      </FooterContainer>
    </>
  )
}
