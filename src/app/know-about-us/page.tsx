import { default as data } from '@/assets/json/about-us.json'

const AboutUs = () => {
  return (
    <div className="flex w-3/4 flex-col gap-20 py-20 pl-16">
      //** This is About Us section
      <div className="flex flex-col gap-4">
        <h1 className="ml-10 text-3xl">{data.aboutUs.title}</h1>
        <h1 className="whitespace-pre-line font-serif font-light">
          {data.aboutUs.desc}
        </h1>
      </div>
      //** This is Our Expertise section
      <div className="flex flex-col gap-4">
        <h1 className="ml-10 text-3xl">{data.ourExpertise.title}</h1>
        <h1 className="whitespace-pre-line font-serif font-light">
          {data.ourExpertise.desc}
        </h1>
        <ul className="flex list-disc flex-col font-serif text-sm font-light">
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
      //** This is Our Process section
      <div className="flex flex-col gap-4">
        <h1 className="ml-10 text-3xl">{data.ourProcess.title}</h1>
        <ul className="flex list-disc flex-col font-serif font-light">
          {data.ourProcess.list.map((item, index) => (
            <li key={index} className="">
              <h1 className="">{item}</h1>
            </li>
          ))}
        </ul>
      </div>
      //** This is Our Clients section
      <div className="flex flex-col gap-4">
        <h1 className="ml-10 text-3xl">{data.ourClients.title}</h1>
        <h1 className="whitespace-pre-line font-serif font-light">
          {data.ourClients.desc}
        </h1>
      </div>
      //** This is Our Location section
      <div className="flex flex-col gap-4">
        <h1 className="ml-10 text-3xl">{data.ourLocation.title}</h1>
        <h1 className="whitespace-pre-line font-serif font-light">
          {data.ourLocation.desc}
        </h1>
      </div>
      //** This is Why Chose Us section
      <div className="flex flex-col gap-4">
        <h1 className="ml-10 text-3xl">{data.whyChoseUs.title}</h1>
        <ul className="flex list-disc flex-col font-serif font-light">
          {data.whyChoseUs.list.map((item, index) => (
            <li key={index} className="">
              <h1 className="">
                <span className="font-bold">{item.title}</span>
                {item.desc}
              </h1>
            </li>
          ))}
        </ul>
        <h1 className="whitespace-pre-line font-serif font-light">
          {data.whyChoseUs.desc}
        </h1>
      </div>
    </div>
  )
}

export default AboutUs
