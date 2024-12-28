import Amination1 from "./assets/Animation1.svg"
import Amination2 from "./assets/Animation2.svg"
import Amination3 from "./assets/Animation3.svg"
export default function CoreServices() {
    return (
        <>
        <div className="max-w-[74.25rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] mx-auto">
            <div className="max-w-[53rem] mx-auto text-center pt-[8.125rem]">
                <h6 className="text-mediumBase text-darkPink font-semibold">Main Services</h6>
                <h4 className="text-mediumLarge text-darkBlue font-semibold pt-[.625rem]">Learn services to focus <br/> on your beauty</h4>
                <p className="text-base text-darkGray tracking-tight pt-[18px]">Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
            </div>

            <div className="flex flex-wrap xl:justify-between justify-center items-center w-full gap-[1.875rem]">
                <div className="md:min-w-[21.4375rem] max-w-[21.4375rem] min-h-[28.625rem] bg-white rounded-smallXl mt-[5.375rem] text-center flex flex-col items-center hover:bg-hoverWhite">
                    <img className="mt-[58px]" src={Amination1} alt="Amination1"/>
                    <h6 className="text-mediumBase1 text-darkBlue font-semibold pt-[3.625rem]">Beauty consultation</h6>
                    <p className="max-w-[17.125rem] text-small text-darkGray tracking-tighter pt-[1.25rem]">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
                <div className="md:min-w-[21.4375rem] max-w-[21.4375rem] min-h-[28.625rem] bg-white rounded-smallXl mt-[5.375rem] text-center flex flex-col items-center hover:bg-hoverWhite">
                    <img className="mt-[3.625rem]" src={Amination2} alt="Amination2"/>
                    <h6 className="text-mediumBase1 text-darkBlue font-semibold pt-[3.625rem]">Skin treatments</h6>
                    <p className="max-w-[17.125rem] text-small text-darkGray tracking-tighter pt-[1.25rem]">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
                <div className="md:min-w-[21.4375rem] max-w-[21.4375rem] min-h-[28.625rem] bg-white rounded-smallXl mt-[5.375rem] text-center flex flex-col items-center hover:bg-hoverWhite">
                    <img className="mt-[3.625rem]" src={Amination3} alt="Amination3"/>
                    <h6 className="text-mediumBase1 text-darkBlue font-semibold pt-[3.625rem]">Beauty product</h6>
                    <p className="max-w-[17.125rem] text-small text-darkGray tracking-tighter pt-[1.25rem]">Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>
            </div>
        </div>
        </>
    )
}