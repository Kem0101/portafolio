import Image from 'next/image';

export default function Footer() {
  return (
    <div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="flex flex-row items-center  justify-between px-5">
        <p className="flex flex-row">
          <span className=" pr-1">© 2023 Personal </span>
          <Image
            src="/personal/web.png"
            alt=""
            width={24}
            height={24}
            className="w-6"
          />{' '}
        </p>
        <div className="flex flex-row px-5">
          <a href="#" className=" px-2">
            {' '}
            <Image
              src="/personal/linkedin.png"
              alt=""
              width={32}
              height={32}
              className=" w-8"
            />{' '}
          </a>
          <a href="#" className=" px-2">
            {' '}
            <Image
              src="/personal/github.png"
              alt=""
              width={32}
              height={32}
              className=" w-8"
            />{' '}
          </a>
          <a href="#" className=" px-2">
            {' '}
            <Image
              src="/personal/gorjeo.png"
              alt=""
              width={32}
              height={32}
              className=" w-8"
            />{' '}
          </a>
          <a href="#">
            {' '}
            <Image
              src="/personal/instagram.png"
              alt=""
              width={32}
              height={32}
              className=" w-8"
            />{' '}
          </a>
        </div>
      </div>
    </div>
  );
}
