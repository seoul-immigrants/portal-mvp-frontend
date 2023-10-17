const SideNavigationBar = ({ children }) => {
    return (
        <aside className="min-w-[310px] bg-white py-[40px] px-[50px]">
            { children }
        </aside>
    )
}
 
export default SideNavigationBar;