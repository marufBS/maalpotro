import useBreakpoint from '@/hooks/useBreakpoint';
import { Input } from '@heroui/input';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SearchIcon = ({ path }: { path: string }) => {
    const navigate = useNavigate();
    const { isSm, isMd, isLg, isXl } = useBreakpoint();
    return (
        <div onClick={() => {
            navigate(path);
        }} className="border border-gray-300 bg-red-500 rounded-full flex items-center justify-center p-2 md:p-3">
            <FaSearch size={isSm ? 30 : isMd ? 24 : isLg ? 28 : isXl ? 32 : 14} color='white' />
        </div>
    )
}

export default function SearchBar() {
    return (
        <Input radius="full" className="md:px-10 mb-10" classNames={
            {
                inputWrapper: "md:h-16 pr-1",
                input: "md:text-2xl pl-5",
            }
        } endContent={<SearchIcon path="/products" />} placeholder="What are you looking for?" />
    )
}