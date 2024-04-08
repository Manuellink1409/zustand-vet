export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <p className=" text-center text-white bg-red-800 w-full p-3 mt-2 text-sm">
      {children}
    </p>
  );
}
