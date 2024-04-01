import { service1,service2,service3,check } from '../assets'
import { brainwaveServices ,brainwaveServicesIcons} from '../constants'
import Heading from './Heading'
import Section from './Section'
import Generating from './design/Generating'
import {PhotoChatMessage,Gradient,VideoBar,VideoChatMessage}  from './design/Services'

const Services = () => {
  return (
    <Section id="how-to-use">
         <div className="container">
            <Heading title="Generative AI made for creators.
            " text="Brainwave unclocks the potentail of AI-powered apllications"/>
            <div className="relative">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 
                p-8 border border-n-1/10 rounded-3xl 
                overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className='absolute top-0 left-0 h-full w-full pointer-events-none md:w-3/5 xl:w-auto'>
                        <img className='w-full h-ful object-cover md:object-right'
                        height={730}
                        width={800}
                        src={service1} alt="service1" />
                    </div>
                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 className='mb-4 h4'>Smartes AI</h4>	
                        <p className='body-2 mb-[3rem] text-n-3'> Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!</p>
                  <ul className='body-2'>
                    {brainwaveServices.map((item,index)=>(
                        <li className='flex items-start py-4 border-t border-n-6' key={index}>
                           <img height={24} width={24} src={check} alt="" />
                           <p className='ml-4'>{item}</p>
                        </li>
                    ))}
                  </ul>
                    </div>
                    <Generating className="absolute left-4 right-4 bottom-4
                    border-n-1/10 border lg:left-1/2 
                    lg-right-auto lg:bottom-8 lg:-translate-x-1/2"/>
                </div>
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                   <div className="relative min-h-[39rem] border border-n-1/10 overflow-hidden rounded-3xl">
                     <div className="absolute inset-0">
                       <img src={service2} alt="service2"
                       className='h-full w-full object-cover' 
                       height={750}
                       width={630}/>
                     </div>
                     <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0
                      to-n-8/90 lg:p-15">
                        <h4 className='mb-4 h4'>Photo Editing</h4>	
                        <p className='body-2 mb-[3rem] text-n-3'>
                           Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!</p>
                     </div>
                     <PhotoChatMessage/>
                   </div>
                   <div className="p-4 bg-n-7 rounded-3xl 
                   overflow-hidden lg:min-h-[46rem]">
                     <div className="py-12 px-4 xl:px-8">
                        <h4 className='h4 mb-4'>Video Generation</h4>
                        <p className='body-2 mb-[2rem] text-n-3'>The world's most powerfull AI photo and 
                          Video art generation engine.What will you create?
                        </p>
                        <ul className="flex items-center justify-between">
                          {brainwaveServicesIcons.map((item,index)=>(
                            <li className={`flex items-center justify-center rounded-2xl 
                            ${index === 2 ? 'w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem] ': 'flex w-10 h-10 bg-n-6 md:h-15 md:w-15'}`}>
                                <div className={index === 2 ? 'flex items-center justify-center h-full w-full bg-n-7 rounded-[1rem]' :''}>
                                  <img src={item} alt="item"
                                  width={24} height={24} />
                                </div>
                            </li>
                          ))}
                        </ul>
                     </div>
                     <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                        <img src={service3} alt="calming robot" 
                        className='h-full w-full object-cover'
                        width={520} height={400} />
                        <VideoChatMessage/>
                        <VideoBar/>
                     </div>
                   </div>
                </div>
                <Gradient/>
            </div>
         </div>
    </Section>
  )
}

export default Services