import { Search } from "lucide-react";
import { useCallback, useRef } from "react";

const NavbarSearch = () => {
    const input = useRef()

    const onSearch = useCallback(() => {
        console.log(input.current.value)
    }, [])

    return (
        <div className="relative flex items-center my-[12px] h-[24px] px-[50px]">
            <div className="absolute flex items-center h-full">
                <Search
                    width={18}
                    height={18} 
                    onClick={onSearch}
                    className="cursor-pointer text-[var(--sub-silver)]"
                />
            </div>
            <input 
                type="text"
                className="w-full pl-[30px] outline-none"
                ref={input}
                placeholder="검색"
            />
        </div>
    );
}
 
export default NavbarSearch;