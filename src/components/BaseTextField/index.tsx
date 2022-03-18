import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'

type BaseTextFieldProps = TextFieldProps

const BaseTextField: React.FC<BaseTextFieldProps> = ({
  ...props
}: BaseTextFieldProps) => {
  return (
    <TextField
      variant='filled'
      margin='dense'
      fullWidth
      autoComplete='off'
      {...props}
    />
  )
}

export default BaseTextField
