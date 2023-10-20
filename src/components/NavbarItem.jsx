import { useMemo } from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ path, name, icon, active }) => {

    const memorizedClassName = useMemo(() => {
        let className = 'relative flex mb-[10px]'
        return active ? className + ' bg-[#F7A79B] text-[#fff] font-bold' : className
    }, [active])

    return (
        <li className={memorizedClassName}>
            { active && <div className="absolute w-[5px] h-full bg-[#F3553C]"></div> }
            <Link to={path} className="flex w-full px-[50px] py-[13px]">
                <div className="pr-[12px]">
                    { icon }
                </div>
                <div>
                    { name }
                </div>
            </Link>
        </li>
    );
}
 
export default NavbarItem;