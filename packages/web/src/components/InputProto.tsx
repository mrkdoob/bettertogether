import React from "react"
import {
  FormLabel,
  Input as CInput,
  InputProps,
} from "@chakra-ui/core"

interface Props extends InputProps {
  name: string
  label: string
}

export const InputProto = ({ label, ...props }: Props) => {
  return (<>
    <FormLabel htmlFor={props.name}>{label}</FormLabel>
    <CInput variant="filled" {...props} mb={4} /></>
  )
}
