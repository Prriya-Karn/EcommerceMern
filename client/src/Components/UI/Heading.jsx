import { Fragment } from 'react'

export const Heading = ({head,subHead}) => {
    return (
        <Fragment>
            <div className="mb-10 capitalize mt-5 sm:mt-0">
                <h1 className="text-center font-semibold text-black
                        md:text-5xl lg:text-5xl sm:text-3xl text-2xl">{head}</h1>
                <p className="text-center sm:text-sm md:text-xl lg:text-xl md:mt-5 sm:mt-2 mt-2 text-black">
                    {subHead}</p>
            </div>
        </Fragment>

    )
}
