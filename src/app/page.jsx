import CategorySearch from "./_components/CategorySearch";
import Hero from "./_components/Hero";
import DoctorList from "./_components/DoctorList";
import Api from "./_utils/Api";

export default async function Home() {
  const response = await Api.getDoctors();

  const doctorList = response.data.data;

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
    </div>
  );
}
