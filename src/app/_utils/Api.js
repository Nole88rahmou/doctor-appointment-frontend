import axios from "axios";


const axiosGlobal = axios.create({
    baseURL: "http://localhost:1337/api"
});

const getCategory = () => axiosGlobal.get("/categories?populate=*");

const getDoctors = () => axiosGlobal.get("/doctors?populate=*");

const getDoctorsByCategory = (category) => axiosGlobal.get("/doctors?populate=*&filters[category][name][$contains]=" + category)

const getDoctorById = (documentId) => axiosGlobal.get("/doctors/" + documentId + "?populate=*");

const bookAppointment = (data) => axiosGlobal.post("/appointments", data);

const myBookingList = (email) => axiosGlobal.get(`appointments?filters[email][$eq]=${email}&populate[doctor][populate]=image`)

const deleteBooking = (documentId) => axiosGlobal.delete(`/appointments/${documentId}`)

export default {
    getCategory,
    getDoctors,
    getDoctorsByCategory,
    getDoctorById,
    bookAppointment,
    myBookingList,
    deleteBooking
}

