
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { FaSearch } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/searchBar";
import useBreakpoint from "@/hooks/useBreakpoint";

const categories = [
  { name: 'Mobile', icon: '📱' },
  { name: 'Electronics', icon: '📺' },
  { name: 'Vehicle', icon: '🚗' },
  { name: 'Home Tools', icon: '🛠️' },
  { name: 'Sports', icon: '🏏' },
  { name: 'Music', icon: '🎸' }
];

export default function Home() {

  const { isSm, isMd, isLg,isXl} = useBreakpoint();

  return (
    <DefaultLayout>
      <div className="text-center w-full flex flex-col flex-1 justify-center items-center">

          <div className="w-full mx-auto text-center space-y-3 p-0 md:p-2">

            <div className="p-0 md:p-2 flex flex-col">
              <SearchBar />
              <Button size={isSm ? "sm" : isMd ? "md" : isLg ? "lg" : isXl ? "lg" : "sm"} color="primary" className="mt-4 self-end">+ CREATE LISTING</Button>
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="bg-red-50 p-4 rounded-md flex items-center justify-start shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span className="text-3xl mr-4">{category.icon}</span>
                  <div className="text-left">
                    <div className="font-semibold text-lg">{category.name}</div>
                    <div className="text-sm text-gray-600">77,148 add</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </DefaultLayout>
  )
}
