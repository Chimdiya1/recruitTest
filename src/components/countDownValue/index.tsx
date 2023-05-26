
function CountDownValue({ value }: { value: string }) {
  return (
    <div className="bg-slate-700 py-2 flex items-center justify-center mg:text-lg font-semibold rounded mx-[1px] w-5 md:w-7">
      {value}
    </div>
  );
}

export default CountDownValue;
