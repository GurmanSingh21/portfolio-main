import { techStack } from '@/data'
import React from 'react'

const TechStack = () => {
    return (
        <section className="py-20">
            <h1 className="heading mb-3">
                My
                <span className="text-purple"> Tech Stack</span>
            </h1>
            <div className="flex p-4 flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                {techStack.map((techStack) => (
                    <React.Fragment key={techStack.id}>
                        <div className='flex md:max-w-60 max-w-32 gap-2'>
                            <img src={techStack.img} alt={techStack.name} />
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default TechStack