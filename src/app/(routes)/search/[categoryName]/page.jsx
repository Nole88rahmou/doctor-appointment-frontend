//

// src/app/(routes)/search/[categoryName]/page.jsx
import Api from "../../../_utils/Api";
import DoctorList from "../../../_components/DoctorList";

export default async function CategoryName({ params }) {
  const { categoryName } = params;
  const res = await Api.getDoctorsByCategory(categoryName);
  const doctorsList = res.data.data;

  return (
    <div>
      <DoctorList doctorList={doctorsList} heading={categoryName} />
    </div>
  );
}
