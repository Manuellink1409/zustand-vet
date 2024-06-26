import { useForm } from "react-hook-form";
import Error from "./Error";
import type { DraftPatient } from "../types";
import { usePatientStore } from "../store";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function PatientForm() {
  const addPatient = usePatientStore((state) => state.addPatient);
  const activeId = usePatientStore((state) => state.activeId);
  const patients = usePatientStore((state) => state.patients);
  const updatePatient = usePatientStore((state) => state.updatePatient);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<DraftPatient>();

  useEffect(() => {
    if (activeId) {
      const activePatient = patients.filter(
        (patient) => patient.id === activeId
      )[0];
      setValue("name", activePatient.name);
      setValue("caretaker", activePatient.caretaker);
      setValue("date", activePatient.date);
      setValue("email", activePatient.email);
      setValue("symptoms", activePatient.symptoms);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId]);

  const registerPatient = (data: DraftPatient) => {
    if (activeId) {
      updatePatient(data);
      toast.success("Paciente actualizado correctamente");
    } else {
      addPatient(data);
      toast.success("Paciente registrado correctamente");
    }
    reset();
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-bold text-gray-200  text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className="text-lg text-gray-300 mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-sky-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-[#292A2C] shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label
            htmlFor="name"
            className="text-sm text-gray-300 uppercase font-bold"
          >
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3 placeholder-gray-400 focus:placeholder-gray-200 text-gray-200 bg-[#242424] border-2 border-[#1e1e1e]"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
            })}
          />
          {errors.name && <Error>{errors.name?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="caretaker"
            className="text-sm text-gray-300 uppercase font-bold"
          >
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3 placeholder-gray-400 focus:placeholder-gray-200 text-gray-200 bg-[#242424] border-2 border-[#1e1e1e]"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El nombre del propietario es obligatorio",
            })}
          />
          {errors.caretaker && <Error>{errors.caretaker?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-sm text-gray-300 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 placeholder-gray-400 focus:placeholder-gray-200 text-gray-200 bg-[#242424] border-2 border-[#1e1e1e]"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El Email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email No Válido",
              },
            })}
          />
          {errors.email && <Error>{errors.email?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="date"
            className="text-sm text-gray-300 uppercase font-bold"
          >
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3 text-gray-400 border-2 border-[#1e1e1e] bg-[#242424]"
            type="date"
            {...register("date", {
              required: "La fecha de alta es obligatoria",
            })}
          />
          {errors.date && <Error>{errors.date?.message}</Error>}
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-sm text-gray-300 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 placeholder-gray-400 focus:placeholder-gray-200 text-gray-200 bg-[#242424] border-2 border-[#1e1e1e]"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los sintomas son obligatorios",
            })}
          />
          {errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
        </div>

        <input
          type="submit"
          className="bg-sky-600 w-full p-3 text-white uppercase font-bold hover:bg-sky-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}
