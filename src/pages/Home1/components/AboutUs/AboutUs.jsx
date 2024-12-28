import PlayButton from './assets/PlayButton.svg'
import imgAboutUs from './assets/imgAboutUs.svg'
export default function AboutUs(){
    return(
        <>
            <div className="max-w-[74.25rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] mx-auto flex pt-[8.375rem] flex-col lg:flex-row justify-between items-center">
                <div className="lg:min-w-[41.5rem] lg:text-left text-center">
                    <h6 className="text-mediumSmall text-darkPink font-semibold">About Us</h6>
                    <h4 className="text-mediumLarge text-darkBlue font-semibold md:text-nowrap pt-[.6875rem]">We are the best beauty clinic</h4>
                    <p className="lg:max-w-[30.1875rem] text-base text-darkGray tracking-tight pt-[1.25rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat. <br/> <br/> Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>

                    <div className='max-w-[26.625rem] flex sm:justify-between pt-[3.1875rem] mx-auto gap-[1.25rem] lg:mx-0'>
                    <button className='w-[12.5rem] h-[3.6475rem] bg-darkPink rounded-xl text-base text-white font-semibold tracking-tight'>Learn More</button>
                    <div className="flex">
                        <img src={PlayButton} alt=" Play Button" className="w-[3.0625rem] h-[3.0625rem] mt-[.3125rem]" />
                        <p className="text-base text-darkGray tracking-tight font-semibold items-center my-auto ml-[11px]">Watch Video</p>
                    </div>
                    </div>
                </div>
                <div className="">
                <img src={imgAboutUs} alt="Img About Us" className="object-cover w-full h-full " />
                </div>
            </div>
        </>
    )
}