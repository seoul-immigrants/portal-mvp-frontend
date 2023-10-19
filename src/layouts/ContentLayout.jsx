import SideNavigationBar from "../components/SideNavigationBar";
import NavbarCategory from "../components/NavbarCategory";
import NavbarSearch from "../components/NavbarSearch";
import NavbarItem from "../components/NavbarItem";
import { Award, Heart, HelpCircle, List, MessageCircle, Tag } from "lucide-react";

const ContentLayuot = ({ children }) => {
    return (
        <div className="flex w-full ">
            <SideNavigationBar>
                <NavbarSearch />
                <NavbarCategory 
                    name="MENU"
                />
                <NavbarItem
                    icon={<Award width={18} height={18} />}
                    active={true}
                    path="#" 
                    name="질문과 답변"
                />
                <NavbarItem
                    icon={<List width={18} height={18} />}
                    path="#" 
                    name="자유 게시판"
                />
                <NavbarItem
                    icon={<Tag width={18} height={18} />}
                    path="#" 
                    name="자료실"
                />
                <NavbarCategory 
                    name="PERSONAL NAVIGATOR"
                />
                <NavbarItem
                    icon={<HelpCircle width={18} height={18} />}
                    path="#" 
                    name="내가 질문한 글"
                />
                <NavbarItem
                    icon={<MessageCircle width={18} height={18} />}
                    path="#" 
                    name="내가 답변한 글"
                />
                <NavbarItem
                    icon={<Heart width={18} height={18} />}
                    path="#" 
                    name="내가 좋아한 글"
                />
            </SideNavigationBar>        
            <div className="flex-1">
                { children }
            </div>
            <SideNavigationBar>
            
            </SideNavigationBar>
        </div>
    )
}
 
export default ContentLayuot;