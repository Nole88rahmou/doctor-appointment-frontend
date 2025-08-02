import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import BookAppointment from "../../BookAppointment";

function DoctorDetails({ doctor }) {
  // if (
  //   !doctor ||
  //   !doctor.image ||
  //   doctor.image.length === 0 ||
  //   !doctor.image[0].url
  // ) {
  //   return (
  //     <p className="text-center text-gray-500">
  //       Chargement du profil du docteur..m. !!
  //     </p>
  //   );
  // }

  return (
    <div className=" grid grid-cols-1 gap-8 md:grid-cols-3 border border-gray-300 shadow-md p-10 rounded-lg">
      {/* Doctor Image */}
      <div>
        <Image
          src={`http://localhost:1337${doctor?.image[0]?.url}`}
          alt="doctor-image"
          width={300}
          height={100}
        />
      </div>

      {/* Doctor Info */}
      <div className="flex flex-col gap-4 col-span-2">
        <h1 className="text-xl font-bold">{doctor.name}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex items-center content-center gap-1 ">
            <WorkIcon className="text-gray-500" />
            <h1 className="text-gray-500  mt-1">
              {doctor.year_of_experience} Years Of Experience
            </h1>
          </div>
          <div className="flex gap-1 items-center content-center ">
            <LocationOnIcon className="text-gray-500" />
            <h1 className="text-gray-500  mt-1">{doctor.address}</h1>
          </div>
          <h1 className="text-lime-600 px-3 bg-lime-200 rounded-full p-2 w-fit">
            {doctor.category.name}
          </h1>
        </div>

        <BookAppointment doctor={doctor} />
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">About</h1>
          <h2 className="text-gray-500">{doctor.about}</h2>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
