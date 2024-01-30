import SlamForm from "../components/Slams/SlamForm";

export default function Slams() {
  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <div className="max-w-[90%] lg:max-w-7xl mx-auto">
        <div className="pt-10">
          <SlamForm />
        </div>
      </div>
    </div>
  );
}
