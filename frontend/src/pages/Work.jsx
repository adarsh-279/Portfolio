import inamigos_logo from '../assets/images/inamigos_logo.webp'

const Work = () => {
  return (
    <div className="w-full border-2 border-[#7a7a7a52] dark:border-[#1F2937] rounded-lg font-[inter]">
      <div className="w-full flex flex-col">
        <div className="w-full p-4 flex justify-around items-start">
          <img
            className="rounded-full w-12"
            src={inamigos_logo}
          />
          <div className="w-full ml-4 dark:text-white flex flex-col">
            <h1 className="text-xs opacity-60">Oct 24 - Oct 24</h1>
            <h1 className="text-md font-semibold">InAmigos Foundation</h1>
            <h1 className="text-sm opacity-60 mb-2">Virtual Volunteer</h1>
            <h1 className="text-sm opacity-60">
              • Organized donation drives and successfully raised funds for the
              welfare of stray dogs.
            </h1>
            <h1 className="text-sm opacity-60">
              • Enhanced communication skills and managed social media outreach
              to increase engagement.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work