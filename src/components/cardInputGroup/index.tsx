function CardInputGroup({ title, description, children }: any) {
  return (
    <div className="flex flex-col md:flex-row md:items-center w-full md:justify-between mb-6">
      <div className="md:w-2/4 mb-2 md:mb-0">
        <h5 className="font-semibold text-lg mb-1">{title}</h5>
        <span className="text-gray-400 text-sm">{description}</span>
      </div>
      {children}
    </div>
  );
}

export default CardInputGroup;
