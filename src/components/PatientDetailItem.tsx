type PatientDetailItemProps = {
  label: string;
  data: string;
};

export default function PatientDetailItem({
  label,
  data,
}: PatientDetailItemProps) {
  return (
    <p className=" mb-2">
      <span className=" text-sky-700 font-bold uppercase">{label}: </span>{" "}
      {data}
    </p>
  );
}
