import { supabase } from 'api/db/supabase'

import {
  FieldError,
  Form,
  Label,
  Submit,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { Toaster } from '@redwoodjs/web/toast'

import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const SignupPage = () => {
  const [toastMessage, setToastMessage] = React.useState(false)
  const [userData, setUserData] = React.useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function signUpNewUser(state) {
    const { data, error } = await supabase.auth.signUp({
      email: state.Email,
      password: state.Password,
      options: {
        data: {
          name: state.Name,
        },
      },
    })

    const metadata = data
    setUserData(metadata)
    if (error == null) {
      setToastMessage(true)
    }
  }
  async function onSubmit(state) {
    try {
      await signUpNewUser(state)
    } catch (error) {
      console.error('An error occurred during user sign up:', error)
    }
  }

  return (
    <>
      <MetaTags title="Signup" description="Sign Up Page" />
      <Toaster />
      <div className="container	 mx-auto">
        <HeaderWithRulers heading="Sign Up" className="text-white" />
        <Form onSubmit={onSubmit}>
          <Input name="Name" />
          <div className="field relative">
            <Label name="email">Email</Label>
            <TextField
              name="Email"
              errorClassName="input error"
              validation={{
                required: true,
                pattern: {
                  value: /[^@]+@[^\.]+\..+/,
                },
              }}
            />
            <FieldError name="Email" className="error-message" />
          </div>
          <ShowHidePassword
            name="Password"
            {...register('Password', {
              required: true,
              minLength: 8,
            })}
          />
          <Submit
            htmlFor="submit"
            alt="submit button"
            className="
      w-full
    rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
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

export default SignupPage
