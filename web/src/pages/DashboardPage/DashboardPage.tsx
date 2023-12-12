import { FieldError, Form, Label, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'

import Header from 'src/components/Header/Header'
import Input from 'src/components/Input/Input'
import { MetaTags } from '@redwoodjs/web'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import { supabase } from '../../../../api/db/supabase.ts'
import { useAuth } from 'src/auth'
import { useEffect } from 'react'


const DashboardPage = () => {
  const { currentUser } = useAuth()
  const [newData, setNewData] = React.useState({
    email: '',
    password: '',
    name: '',
  })
  useEffect(() => {
    setNewData({
      email: currentUser.email,
      password: currentUser.password,
      name: currentUser.user_metadata.name,
    })
  }, [currentUser])
  async function updatedDetails() {
    const { data, error } = await supabase.auth.updateUser({
      email: newData.email,
      password: newData.password,
      data: { name: newData.name },
    })
    console.log(data)
  }

  const onSubmit = () => {
    updatedDetails()
  }
  return (
    <>
      <MetaTags title="Dashboard" description="Dashboard page" />

      <div className="container	 mx-auto">
        <Header heading="My Account" className="text-white" />
        <Form onSubmit={onSubmit}>
          <Label
            style={{ color: 'white' }}
            name={currentUser.user_metadata.name}
          >
            {currentUser.user_metadata.name}
          </Label>
          <Input name="Name" />
          <Label style={{ color: 'white' }} name={currentUser.email}>
            {currentUser.email}
          </Label>
          <Input name="Email" />

          <ShowHidePassword name="Password" />
          <Submit
            htmlFor="submit"
            alt="submit button"
            className="
      w-full
    rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Update
          </Submit>
          <div className="align-links	 container mx-auto items-center justify-center">
            <Link to={routes.login()} className="underline">
              Remember your account? Sign in here
            </Link>
            <br />
            <Link to={routes.forgotpassword()} className="underline">
              Forgot Password?
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default DashboardPage
