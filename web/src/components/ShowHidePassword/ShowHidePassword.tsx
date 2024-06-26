import { useState } from 'react'

import { FieldError, Label, PasswordField, TextField } from '@redwoodjs/forms'

import Icon from '../Icon/Icon'

const ShowHidePassword = ({ name }) => {
  const [isPasswordShowing, setIsShowPasswordShowing] = useState(false)

  const toggleShowPassword = () => {
    setIsShowPasswordShowing((prevValue) => !prevValue)
  }

  return (
    <div className="field relative">
      <Label name={name}>{name}</Label>
      {isPasswordShowing ? (
        <>
          <PasswordField
            name={name}
            placeholder=" "
            required
            errorClassName="input error"
            validation={{
              required: true,
              minLength: 6,
            }}
          />{' '}
          <FieldError name={name} className="error-message" />
        </>
      ) : (
        <>
          <TextField
            name={name}
            placeholder=" "
            required
            errorClassName="input error"
            validation={{
              required: true,
              minLength: 6,
            }}
          />
          <FieldError name={name} className="error-message" />
        </>
      )}
      <button
        className="absolute right-6 top-8"
        onClick={toggleShowPassword}
        aria-label="toggle show hide for password"
        alt="toggle show hide for password"
      >
        {isPasswordShowing ? (
          <Icon id="eyeClosed" size={32} />
        ) : (
          <Icon id="eyeOpened" size={32} />
        )}
      </button>
    </div>
  )
}

export default ShowHidePassword
