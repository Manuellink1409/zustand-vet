import { usePatientStore } from "../store";
import PatientDetails from "./PatientDetails";

export default function PatientsList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5">
      {patients.length === 0 ? (
        <>
          <h2 className="font-bold text-gray-200 text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg text-gray-300 mt-5 text-center mb-10">
            Comienza agregando pacientes y {""}
            <span className="text-sky-600 font-bold">
              y apareceran en este lugar
            </span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-bold text-gray-200 mb-10 text-3xl text-center">
            Lista De Pacientes
          </h2>
          {patients.map((patient) => (
            <PatientDetails key={patient.id} patient={patient} />
          ))}
        </>
      )}
    </div>
  );
}
