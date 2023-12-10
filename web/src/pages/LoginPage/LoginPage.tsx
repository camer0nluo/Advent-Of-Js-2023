import { supabase } from 'api/db/supabase'

import { Form, Submit, SubmitHandler } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import Input from 'src/components/Input/Input'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'
import { CREATE_USER_MUTATION } from 'src/components/UserCell/UserCell'

interface FormValues {
  name: string
  email: string
  message: string
}

const LoginPage = () => {
  const [isInvalid, setisInvalid] = React.useState(false)
  const onSubmit: SubmitHandler<FormValues> = (inputs) => {
    signIn(inputs)
    onLogin()
  }
  const onLogin = () => {
    navigate(routes.event())
  }

  const [createUserQuery, { loading }] = useMutation(CREATE_USER_MUTATION, {
    onCompleted: (data) => {
      toast.success('User was successfully created.')
    },
    onError: (error) => {
      console.error({ error })
      toast.error(error.message)
    },
  })

  async function signIn(state) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: state.Email,
        password: state.Password,
      })

      if (error) {
        toast.error('User is not successfully created.')
        console.error('Sign-in error:', error.message)
        setisInvalid(true)
      } else {
        getUser(data.user.id)
        createUserQuery({
          variables: {
            email: data.user.email,
            firstName: data.user.user_metadata.name,
            user_id: data.user.id,
            role: 'USER',
          },
        })
        setisInvalid(false)
        onLogin()
      }
    } catch (e) {
      console.error('Unexpected error during sign-in:', e.message)
    }
  }

  return (
    <>
      <MetaTags title="Login" description="Login page" />
      <div className="container	 mx-auto items-center justify-center">
        <HeaderWithRulers heading="Login" className="text-white" />
        <Form onSubmit={onSubmit}>
          <Input name="Email" isInvalid={isInvalid} />
          <ShowHidePassword name="Password" />
          <Submit
            className="
        w-full
      rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
          </Submit>
          <div className="align-links	 container mx-auto items-center justify-center	">
            {/* <Link to={routes.signup()} className="underline">
              Need an account?
            </Link>
            <br />
            <Link to={routes.forgotpassword()} className="underline">
              Forgot Password?
            </Link> */}
          </div>
        </Form>
      </div>
    </>
  )
}

export default LoginPage
