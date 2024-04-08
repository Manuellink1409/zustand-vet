import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";
function App() {
  return (
    <>
      {/* <h1 className="font-black text-5xl text-white">Pacientes</h1> */}
      <h1 className=" text-5xl font-black text-center text-gray-50">
        Seguimiento de Pacientes{" "}
        <span className=" text-sky-600">Veterinaria</span>
      </h1>

      <div className="mt-12 md:flex">
        <PatientForm />
        <PatientsList />
      </div>
    </>
  );
}

export default App;
