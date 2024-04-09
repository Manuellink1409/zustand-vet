import { usePatientStore } from "../store";
import type { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";

type patientDetailsProps = {
  patient: Patient;
};

export default function PatientDetails({ patient }: patientDetailsProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  return (
    <div className="bg-[#292A2C] w-full rounded-lg p-8 text-gray-300 mb-4">
      <PatientDetailItem label="Id" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha de alta" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex lg:flex-row gap-2 flex-col justify-between mt-8">
        <button
          onClick={() => getPatientById(patient.id)}
          className=" bg-sky-800 py-1 px-6 rounded-md transition-colors tracking-wide font-bold hover:bg-sky-700"
        >
          EDITAR
        </button>
        <button
          onClick={() => deletePatient(patient.id)}
          className=" bg-red-800 py-1 px-6 rounded-md font-bold tracking-wide transition-colors hover:bg-red-700"
        >
          ELIMINAR
        </button>
      </div>
    </div>
  );
}
