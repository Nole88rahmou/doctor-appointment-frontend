import Api from "../../../../_utils/Api";
import Link from "next/link";
import Image from "next/image";

async function DoctorSuggestions() {
  const response = await Api.getDoctors();

  const doctorList = response.data.data;

  return (
    <div>
      <div className="grid-cols-1 md:grid-cols-3 p-3">
        <h1 className="font-bold text-[18px]">Suggestions</h1>
        {doctorList?.slice(0, 5).map((doctor, index) => {
          return (
            <Link key={index} href={`/details/${doctor?.documentId}`}>
              <div className="border-[1px] p-3 rounded-lg m-3 flex gap-4">
                <Image
                  src={`http://localhost:1337${doctor?.image[0]?.url}`}
                  alt="doctor-image"
                  width={500}
                  height={500}
                  className="h-[200px] w-[150px] object-cover "
                />
                <div className="items-baseline flex flex-col">
                  <h2 className="text-lime-600 mt-3 bg-lime-200 rounded-full p-2">
                    {doctor?.category?.name}
                  </h2>
                  <h2 className="mt-2">
                    <span className="text-lime-600">Name: </span>
                    {doctor?.name}
                  </h2>
                  <h2 className="mt-2">
                    <span className="text-lime-600">Year Of Experience: </span>
                    {doctor?.year_of_experience}
                  </h2>
                  <h2 className="border-[1px] p-3 border-lime-600 mt-5 hover:bg-lime-300 cursor-pointer hover:scale-110 transition-all ease-in-out duration-300">
                    Book Now
                  </h2>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DoctorSuggestions;
