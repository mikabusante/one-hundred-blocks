import React from 'react'
import styled from 'styled-components'

const SignUp = () => {
  return (
    <Wrapper>
      <Text>
        <Logo>Two of Cups</Logo>
        <Tagline>Find your community.</Tagline>
        <Description>
          Two of Cups is a platform for finding people who will be with you
          every step of the way.
        </Description>
      </Text>

      <Form onSubmit={e => e.preventDefault()}>
        <fieldset>
          <Legend>Sign Up</Legend>

          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" name="first-name" required="" type="text" />

          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" name="last-name" required="" type="text" />

          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" required="" type="email" />

          <Label htmlFor="password">Password</Label>
          <Input name="password" type="password" />
        </fieldset>

        <CheckboxFieldset>
          <CheckboxInput name="confirm" type="checkbox" />
          <CheckboxLabel htmlFor="confirm">
            I agree that this is a form that doesn't do anything.
          </CheckboxLabel>
        </CheckboxFieldset>

        <SubmitButton type="submit">Create my account</SubmitButton>
      </Form>
    </Wrapper>
  )
}

export default SignUp

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0beb1;
`

const Text = styled.div`
  align-self: flex-start;
  color: white;
  margin-top: 5%;
  padding-left: 5%;
`

const Logo = styled.h2`
  font-size: 3.3rem;
`

const Tagline = styled.h3`
  font-size: 5rem;
  margin-top: 60%;
`

const Description = styled.p`
  font-size: 2.2rem;
  margin-top: 1rem;
  max-width: 28ch;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: max-content;
  height: 100%;
  padding: 0 5%;
  background: white;
`

const Legend = styled.legend`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`
const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  line-height: 3rem;
`

const CheckboxFieldset = styled.fieldset`
  display: flex;
  align-items: flex-start;
  margin: 1rem 0 2rem 0;
`

const CheckboxInput = styled.input`
  margin-right: 1.5rem;
`

const CheckboxLabel = styled(Label)`
  max-width: 25ch;
  font-size: 1.4rem;
  line-height: 1.8rem;
`

const Input = styled.input`
  margin-bottom: 2rem;
  height: 4rem;
  width: 25rem;
  padding: 0 1.4rem;
  font-size: 1.6rem;

  :focus {
    border: 1px solid black;
  }
`

const SubmitButton = styled.button`
  height: 5rem;
  background: none;
  border: 1px solid #f0beb1;

  :hover {
    background: #f0beb1;
    color: white;
  }
`
