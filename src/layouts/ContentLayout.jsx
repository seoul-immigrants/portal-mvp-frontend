import SideNavigationBar from "../components/SideNavigationBar";

const ContentLayuot = ({ children }) => {
    return (
        <div className="flex w-full">
            <SideNavigationBar />        
            <div className="flex-1">
                { children }
            </div>
            <SideNavigationBar />
        </div>
    )
}
 
export default ContentLayuot;