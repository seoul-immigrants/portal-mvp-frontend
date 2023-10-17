import SideNavigationBar from "../components/SideNavigationBar";

const menus = [
    {
        name: "MENU",
        type: "search",
        element: ""
    },
    {
        type: "bar"
    },
    {
        name: "질문과 답변",
        type: "menu"
    },
    {
        name: "자유게시판",
        type: "menu"
    },
    {
        name: "자료실",
        type: "menu"
    },
    {
        name: "PERSONAL NAVIGATOR",
        type: "bar",
        element: ""
    }
]

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