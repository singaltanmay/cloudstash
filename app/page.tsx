import { ArrowRight } from 'lucide-react';
import Link from "@/node_modules/next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="test-5xl font-bold">
            Welcome to DropBox.
            <br />
            Storing everything for you and your business needs. All in one place.
          </h1>

          <p className="pb-20">
            Get the storage you and your teams need with security features like file recovery, password protection, watermarking, and viewer history. Trackable links show when someone has opened a shared file and how long they’ve engaged with it. Plus, you can turn off access for any individual at any time without affecting others’ permissions. Directly edit PDFs and use video tools to streamline feedback and approval processes. Automate manual processes with tools like eSignature templates, which let you reuse documents in seconds.
          </p>

          <Link href='/dashboard' className="flex cursor-pointer bg-blue-500 p-5 w-fit">
            Try it for free!
            <ArrowRight className='ml-10' />
          </Link>
        </div>

        <div className='bg-[#1E1919] dark:bg-slate-800 h-full p-10'>
          <video autoPlay loop muted className='rounded-lg'>
            <source src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </main>
  );
}
