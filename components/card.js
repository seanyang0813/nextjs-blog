import Image from 'next/image'

export default function Card({ content, children }) {
  return (
  <a href={content.link} target="_blank" className="text-black">
    <div className="inline-block mx-5 max-w-xs rounded overflow-hidden shadow-lg my-2">
    <div>
      <Image width={content.width} height={content.height} src={content.image} alt="code documentation"></Image>
    </div>
      
    <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{content.title}</div>
        <p className="text-grey-darker text-base">
          {children}
        </p>
    </div>
    </div>
  </a>)
}