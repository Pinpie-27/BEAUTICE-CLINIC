import Professtion1 from './assets/Professtion1.svg'
import Professtion2 from './assets/Professtion2.svg'
import Professtion3 from './assets/Professtion3.svg'
import data from './data';
export default function ProfessionalTeams() {
    return (
        <>
         <div className="max-w-[74.25rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] mx-auto pt-[8.8125rem]">
         <div className="max-w-[53rem] mx-auto text-center">
                <h6 className="text-mediumBase text-darkPink font-semibold">Professional Teams</h6>
                <h4 className="text-mediumLarge text-darkBlue font-semibold pt-[.625rem]">The Professional expert</h4>
                <p className="text-base text-darkGray tracking-tight pt-[1.25rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
            </div>
            <div className="max-w-[67.8125rem] mx-auto flex pt-[7.1875rem] flex-wrap xl:justify-between justify-center items-center w-full gap-[1.875rem]">
                <div className="md:min-w-[16.875rem] max-w-[16.875rem] min-h-[27.4375rem] pt-[5.6875rem] bg-white text-center flex flex-col items-center hover:bg-hoverWhite hover:max-w-[26.5rem] hover:min-h-[39.125rem] hover:rounded-smallXl">
                    <img src={Professtion1} alt="Professtion1"/>
                    <h6 className='text-mediumSmall text-darkPink font-semibold pt-[3.3125rem]'>Surgeon</h6>
                    <h5 className='text-mediumBase1 text-darkBlue font-semibold pt-[.875rem]'>Briyan Nevalli</h5>
                    <p className='text-small text-darkGray tracking-tighter pt-[1.25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                
                    <div className='flex pt-[2.625rem] gap-[.28125rem]'>
                        {data.map((item) => (
                            <>
                            <div>
                                <img src={item.url} alt="item.url"/>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="md:min-w-[16.875rem] max-w-[16.875rem] min-h-[27.4375rem] pt-[5.6875rem] bg-white text-center flex flex-col items-center hover:bg-hoverWhite hover:max-w-[26.5rem] hover:min-h-[39.125rem] hover:rounded-smallXl">
                    <img src={Professtion2} alt="Professtion2"/>
                    <h6 className='text-mediumSmall text-darkPink font-semibold pt-[3.3125rem]'>Dermatologist</h6>
                    <h5 className='text-mediumBase1 text-darkBlue font-semibold pt-[.875rem]'>Bella sebastian </h5>
                    <p className='text-small text-darkGray tracking-tighter pt-[1.25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                
                    <div className='flex pt-[2.625rem] gap-[.28125rem]'>
                        {data.map((item) => (
                            <>
                            <div>
                                <img src={item.url} alt="item.url"/>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="md:min-w-[16.875rem] max-w-[16.875rem] min-h-[27.4375rem] pt-[5.6875rem] bg-white text-center flex flex-col items-center hover:bg-hoverWhite hover:max-w-[26.5rem] hover:min-h-[39.125rem] hover:rounded-smallXl">
                    <img src={Professtion3} alt="Professtion3"/>
                    <h6 className='text-mediumSmall text-darkPink font-semibold pt-[3.3125rem]'>Stylist expert</h6>
                    <h5 className='text-mediumBase1 text-darkBlue font-semibold pt-[.875rem]'>Lilly Adams</h5>
                    <p className='text-small text-darkGray tracking-tighter pt-[1.25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</p>
                
                    <div className='flex pt-[2.625rem] gap-[.28125rem]'>
                        {data.map((item) => (
                            <>
                            <div>
                                <img src={item.url} alt="item.url"/>
                            </div>
                            </>
                        ))}
                    </div>
                </div>
                
            </div>
         </div>
        </>
    )
}