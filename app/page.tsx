import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="">
      <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
        <h1 className="test-5xl font-bold">
          Welcome to CloudStash.
          <br/>
          Storing everything for you and your business needs. All in one place.
        </h1>

        <p className="pb-20">
        Get the storage you and your teams need with security features like file recovery, password protection, watermarking, and viewer history. Trackable links show when someone has opened a shared file and how long they’ve engaged with it. Plus, you can turn off access for any individual at any time without affecting others’ permissions. Directly edit PDFs and use video tools to streamline feedback and approval processes. Automate manual processes with tools like eSignature templates, which let you reuse documents in seconds.
        </p>
      </div>
    </main>
  );
}
