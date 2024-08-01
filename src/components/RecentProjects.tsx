import { FC } from 'react'
import { CardBody, CardContainer, CardItem } from '@/components/3DCard'
import Image from 'next/image'
import { Icons } from './Icons'
import Link from 'next/link'

type Project = {
  id: number
  title: string
  description: string
  imageUrl: string
  techStack: string[]
}

interface RecentProjectsProps {}
const RecentProjects: FC<RecentProjectsProps> = ({}) => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Pro Connect',
      description: 'Service provider platform like Fiver',
      imageUrl: '/pro-connect.png',
      techStack: [
        'React',
        'TS',
        'TailwindCSS',
        'Java',
        'SQL',
        'Docker',
        'Stripe',
      ],
    },
    {
      id: 2,
      title: 'Red Pill Chat',
      description: 'Real time messaging app',
      imageUrl: '/red-pill-chat.png',
      techStack: ['TS', 'NextJS', 'TailwindCSS', 'Redis'],
    },
    {
      id: 3,
      title: 'Prompt Hub',
      description: 'AI prompt sharing platform',
      imageUrl: '/prompt-hub.png',
      techStack: ['TS', 'NextJS', 'TailwindCSS'],
    },
    {
      id: 4,
      title: 'Dine AR',
      description: 'Restaurant management system',
      imageUrl: '/dinear.png',
      techStack: ['React', 'TS', 'NodeJS', 'SQL', 'Stripe'],
    },
  ]
  return (
    <div className='my-20 space-y-16'>
      <h3 className='text-white text-center w-full text-5xl font-semibold'>
        A small selection of{' '}
        <span className='text-indigo-500'>recent projects</span>
      </h3>
      <div className='flex justify-center items-center gap-16 flex-wrap px-20'>
        {projects.length > 0
          ? projects.map((project) => (
              <CardContainer className='inter-var text-white' key={project.id}>
                <CardBody className=' relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-border w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                  <CardItem translateZ='50' className='text-xl font-bold'>
                    {project.title}
                  </CardItem>
                  <CardItem
                    as='p'
                    translateZ='60'
                    className=' text-sm max-w-sm text-indigo-200 mt-2'
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ='100' className='w-full mt-4'>
                    <Image
                      src={project.imageUrl}
                      height='1000'
                      width='1000'
                      className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                      alt='thumbnail'
                    />
                  </CardItem>
                  <div className='flex justify-between items-center mt-20'>
                    <CardItem
                      translateZ={20}
                      className='flex items-center px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
                    >
                      {/* TODO... fix later */}
                      {project.techStack.length
                        ? project.techStack.map((tech, index) => {
                            const icon = Icons[tech]
                            return (
                              <div
                                className='rounded-full border-white/[.2] border custom-gradient lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                                key={tech}
                                style={{
                                  transform: `translateX(-${5 * index + 2}px)`
                                }}
                              >
                                {icon()}
                              </div>
                            )
                          })
                        : null}
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      target='__blank'
                      href={''}
                      className='flex items-center justify-center px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
                    >
                      Visit repo <Icons.ChevronsRight />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            ))
          : null}
      </div>
    </div>
  )
}

export default RecentProjects
