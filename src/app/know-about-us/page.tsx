import { default as data } from '@/assets/json/about-us.json'

const AboutUs = () => {
  return (
    <div className="bg-60-light pb-10">
      <div className="flex flex-col gap-12 p-10 sm:w-11/12 md:w-5/6 md:gap-20 xl:w-3/4 xl:p-20">
        {/* This is About Us section */}
        <div className="flex flex-col gap-4">
          <h1 className="ml-10 text-xl md:text-2xl xl:text-3xl">
            {data.aboutUs.title}
          </h1>
          <h1 className="whitespace-pre-line font-serif text-xs font-light md:text-sm xl:text-base">
            {data.aboutUs.desc}
          </h1>
        </div>
        {/* This is Our Expertise section */}
        <div className="flex flex-col gap-4">
          <h1 className="ml-10 text-xl md:text-2xl xl:text-3xl">
            {data.ourExpertise.title}
          </h1>
          <h1 className="whitespace-pre-line font-serif text-xs font-light md:text-sm xl:text-base">
            {data.ourExpertise.desc}
          </h1>
          <ul className="flex list-disc flex-col font-serif text-xs font-light md:text-sm xl:text-base">
            {data.ourExpertise.list.map((item, index) => (
              <li key={index} className="">
                <h1 className="">
                  <span className="font-bold">{item.title}</span>
                  {item.desc}
                </h1>
              </li>
            ))}
          </ul>
        </div>
        {/* This is Our Process section */}
        <div className="flex flex-col gap-4">
          <h1 className="ml-10 text-xl md:text-2xl xl:text-3xl">
            {data.ourProcess.title}
          </h1>
          <ul className="flex list-disc flex-col font-serif text-xs font-light md:text-sm xl:text-base">
            {data.ourProcess.list.map((item, index) => (
              <li key={index} className="">
                <h1 className="">{item}</h1>
              </li>
            ))}
          </ul>
        </div>
        {/* This is Our Clients section */}
        <div className="flex flex-col gap-4">
          <h1 className="ml-10 text-xl md:text-2xl xl:text-3xl">
            {data.ourClients.title}
          </h1>
          <h1 className="whitespace-pre-line font-serif text-xs font-light md:text-sm xl:text-base">
            {data.ourClients.desc}
          </h1>
        </div>
        {/* This is Our Location section */}
        <div className="flex flex-col gap-4">
          <h1 className="ml-10 text-xl md:text-2xl xl:text-3xl">
            {data.ourLocation.title}
          </h1>
          <h1 className="whitespace-pre-line font-serif text-xs font-light md:text-sm xl:text-base">
            {data.ourLocation.desc}
          </h1>
        </div>
        {/* This is Why Chose Us section */}
        <div className="flex flex-col gap-4">
          <h1 className="ml-10 text-xl md:text-2xl xl:text-3xl">
            {data.whyChoseUs.title}
          </h1>
          <ul className="flex list-disc flex-col font-serif text-xs font-light md:text-sm xl:text-base">
            {data.whyChoseUs.list.map((item, index) => (
              <li key={index} className="">
                <h1 className="">
                  <span className="font-bold">{item.title}</span>
                  {item.desc}
                </h1>
              </li>
            ))}
          </ul>
          <h1 className="whitespace-pre-line font-serif text-xs font-light md:text-sm xl:text-base">
            {data.whyChoseUs.desc}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
