import { useForm } from 'react-hook-form';
import ContactAnimations from './assets/ContactAnimations.svg';

export default function ContactUs() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="max-w-[74.25rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] lg:pt-[13.75rem] pt-[1.25rem] mx-auto flex flex-col items-center lg:flex-row lg:justify-between gap-[3.125rem]">
            <div className="pt-[2.3125rem]">
                <img src={ContactAnimations} alt="Contact Animations" />
            </div>
            <div className="sm:min-w-[32.5rem] max-w-[32.5rem]">
                <div className='lg:text-left text-center'>
                    <h6 className='text-mediumSmall text-darkPink font-semibold'>Contact Us</h6>
                    <h4 className='text-mediumLarge text-darkBlue font-semibold pt-[.625rem]'>Send your inquiry to <br />our expert team</h4>
                    <p className='text-base text-darkGray tracking-tight pt-[1.25rem]'>Lorem ipsum dolor sit amet nulla turapis tellus.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center sm:items-start gap-[2.4375rem] pt-[2.9375rem]">
                    <div className="flex gap-[1.9375rem] sm:flex-row flex-col">
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="First name"
                                {...register("firstName", { required: "First name is required", maxLength: 80 })}
                                className="sm:w-[15.138125rem] sm:h-[3.84875rem] max-w-[15.138125rem] min-h-[3.84875rem] pl-[1.5rem] rounded-xs border border-borderButton placeholder:text-base placeholder:tracking-tight placeholder:text-placeHolder"
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                placeholder="Last name"
                                {...register("lastName", { required: "Last name is required", maxLength: 80 })}
                                 className="sm:w-[15.138125rem] sm:h-[3.84875rem] max-w-[15.138125rem] min-h-[3.84875rem] pl-[1.75rem] rounded-xs border border-borderButton placeholder:text-base placeholder:tracking-tight placeholder:text-placeHolder"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
                        </div>
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            {...register("email", { required: "Email is required", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
                            className="sm:w-[32.5rem] sm:h-[3.84875rem] max-w-[32.5rem] min-h-[3.84875rem] pl-[1.5rem] rounded-xs border border-borderButton placeholder:text-base placeholder:tracking-tight placeholder:text-placeHolder"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message || "Invalid email address"}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Subject message"
                            {...register("subject", { required: "Subject is required", maxLength: 100 })}
                            className="sm:w-[32.5rem] sm:h-[3.84875rem] max-w-[32.5rem] min-h-[3.84875rem] pl-[1.5rem] rounded-xs border border-borderButton placeholder:text-base placeholder:tracking-tight placeholder:text-placeHolder"
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                    </div>
                    <div>
                        <textarea
                            placeholder="Your inquiry here"
                            {...register("inquiry", { required: "Inquiry is required", maxLength: 500 })}
                            className="sm:w-[32.5rem] sm:h-[14.966875rem] max-w-[32.5rem] min-h-[14.966875rem] pl-[1.5rem] pt-[1.4375rem] rounded-xs border border-borderButton placeholder:text-base placeholder:tracking-tight placeholder:text-placeHolder"
                        />
                        {errors.inquiry && <p className="text-red-500 text-sm">{errors.inquiry.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-[15.5rem] h-[3.625rem] bg-darkPink rounded-xl text-base text-white font-semibold tracking-tight mt-[.5rem]"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
