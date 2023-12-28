import React, { FC, LabelHTMLAttributes } from 'react'
import { classes } from 'src/utils';

const Label: FC<LabelHTMLAttributes<HTMLLabelElement>> = ({className, children, ...props}) => {
  return (
    <label {...props} className={classes("text-text font-semibold", className)}>
     {children}
    </label>
  )
}

export default Label;