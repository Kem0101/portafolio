import Image from 'next/image';

export default function avatar() {
  return (
    <div className="flex items-center pr-96">
      <Image
        className=" w-12 rounded-full "
        src="/personal/sam.jpg"
        width={40}
        height={40}
        alt=""
      />
    </div>
  );
}
