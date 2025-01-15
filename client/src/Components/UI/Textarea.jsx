import { Fragment } from 'react'

export const Textarea = ({logData,type,name,value,placeholder}) => {
  return (
    <Fragment>
    <textarea type={type} value={value} name={name} placeholder={placeholder}
    onChange={logData}
    className="text-black placeholder-black border-2 mb-3 rounded-sm
         w-full h-24 md:text-xl mt-1 p-4
         md:w-full
          lg:mt-1 lg:h-32 lg:p-5
          md:mt-1  md:h-32 md:p-5"/>
    </Fragment>
  )
}
