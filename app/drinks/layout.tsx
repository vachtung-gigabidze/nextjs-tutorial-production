import React from 'react'

const DrinksLayout = ({ children } :any) => {
    return (
        <div className='max-w-xl'>
            <div className="mockup-code mb-8">
                <pre data-prefix="$">
                    <code> npx</code>
                </pre>
            </div>
            {children}
        </div>
    )
}

export default DrinksLayout