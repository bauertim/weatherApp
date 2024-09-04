import { useFormContext } from "../context/FormContext";
import { useDataContext } from "../context/DataContext";
import SmallCityBox from "./SmallCityBox";

const PreviousSearch = () => {
  const { searchList } = useDataContext();
  return (
    <div>
      <div className="bg-blue-500 sm:w-[600px] mx-auto flex flex-col py-3 rounded-lg">
        <h2 className="text-sm text-gray-200 text-light px-3 mb-1">
          Recently viewed cities
        </h2>
        <ul>
          {searchList.slice(0, 5).map((search, index) => (
            <SmallCityBox
              key={index + search.name}
              search={search}
              index={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PreviousSearch;
