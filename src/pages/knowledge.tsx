import Image from 'next/image';

export default function knowledge() {
  return (
    <div className=" container mx-auto mt-20 pb-16">
      <h1 className=" font-bold mb-9 text-2xl">Technologies</h1>

      <div className="inline-flex flex-wrap gap-4">
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/html.png"
            alt=""
            width={80}
            height={80}
            className=" w-12 mx-auto "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/css.png"
            alt=""
            width={80}
            height={80}
            className=" w-14 mx-auto"
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/tailwindcss.png"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/js.png"
            alt=""
            width={80}
            height={80}
            className=" w-14 mx-auto "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/atom.png"
            alt=""
            width={80}
            height={80}
            className=" w-12 mx-auto pt-1"
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/nodejs.jpg"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/express.jpeg"
            alt=""
            width={80}
            height={80}
            className=" w-16 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/apirest.png"
            alt=""
            width={80}
            height={80}
            className=" w-20 h-14 mx-auto   "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/MongoDB.jpeg"
            alt=""
            width={80}
            height={80}
            className=" w-20 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/mysql.jpg"
            alt=""
            width={80}
            height={80}
            className=" w-20 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/sequelize.png"
            alt=""
            width={80}
            height={80}
            className=" w-20 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/git.jpeg"
            alt=""
            width={80}
            height={80}
            className=" w-20 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/github.png"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/bitbucket.jpeg"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/postman.png"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/heroku.webp"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto  "
          />
        </div>
        <div className=" w-32 h-14 bg-slate-600 mr-3 rounded-md">
          <Image
            src="/tech/vscode.png"
            alt=""
            width={80}
            height={80}
            className=" w-16 h-14 mx-auto  "
          />
        </div>
      </div>
    </div>
  );
}
