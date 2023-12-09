import { supabase } from 'api/db/supabase'
import { FileUploader } from 'react-drag-drop-files'

import { FileField, Form, Input, Label, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Header from 'src/components/Header/Header'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const fileTypes = ['JPEG', 'PNG', 'GIF']

const RsvpAcceptPage = () => {
  const onSubmit = (inputs) => {
    signUpNewUser(inputs)
  }

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
    if (error == null) {
      setToastMessage(true)
    }
  }
  const [file, setFile] = React.useState(null)
  const handleChange = (file) => {
    setFile(file)
  }
  return (
    <>
      <MetaTags title="RsvpAccept" description="RsvpAccept page" />
      <div className="container	 mx-auto">
        <Header heading="Awesome!" className="heading-space text-white" />
        <HeaderWithRulers heading="Sign up" className="text-white" />
        <Form onSubmit={onSubmit}>
          <ShowHidePassword name="Password" />
          <div
            className="field date-field file-uploader-container relative"
            style={{
              background: 'white',
            }}
          >
            <Label name="avatar">Avatar</Label>
            <FileUploader
              multiple={true}
              style={{ textAlign: 'left', textColor: 'white' }}
              handleChange={handleChange}
              name="file"
              classes="file-uploader"
              hoverTitle="Drop files here"
              types={fileTypes}
            />
          </div>
          <Submit
            className="
      w-full
    rounded-full bg-supernova py-5 font-handwriting text-3xl uppercase text-black"
          >
            Submit
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default RsvpAcceptPage
