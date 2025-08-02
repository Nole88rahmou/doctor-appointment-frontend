import DoctorDetails from "./_components/DoctorDetails";
import Api from "../../../_utils/Api";
import DoctorSuggestions from "./_components/DoctorSuggestions";

export default async function Details({ params }) {
  const { id } = params;
  const res = await Api.getDoctorById(id);
  const doctor = res.data.data;

  return (
    <div className="p-5 md:px-20">
      <h2 className="font-bold text-[22px]">Details</h2>

      <div className="grid md:grid-cols-4 grid-cols-1">
        {/* Doctor Details */}
        <div className="col-span-3">
          <DoctorDetails doctor={doctor} />
        </div>

        {/* Doctor Suggestions (à compléter plus tard) */}
        <div>
          <DoctorSuggestions />
        </div>
      </div>
    </div>
  );
}
