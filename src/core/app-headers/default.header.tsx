import {SidebarTrigger} from '@/components/ui/sidebar';
import {SearchIcon, ChevronDown} from 'lucide-react';
import NotificationImg from '@/assets/icons/Container.svg';
import ChatImg from '@/assets/icons/texts.svg';
import {Button} from '@/components/ui/button';
import headerPic from '@/assets/images/header-img.png';

const DefaultHeader = () => {
  return (
    <>
      <header className="mx-0 flex items-center justify-between px-4 py-2 bg-header w-full">
        <div className="flex-1">
          <SidebarTrigger />
        </div>
        <div className="flex-1 flex justify-end gap-2">
          <div className="relative w-full  md:max-w-md lg:max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-10 pr-4 text-sm border rounded-lg focus:outline-none focus:ring-0"
            />
            <SearchIcon className="absolute w-5 h-5 left-3 top-1/2 transform -translate-y-1/2 text-[#E4E7EC]" />
          </div>

          <div className="flex flex-row-reverse justify-start items-center gap-1">
            <div className="flex justify-start gap-2 items-center">
              <div className="flex items-center justify-center rounded-full w-6 h-6 text-sm">
                <img
                  src={headerPic}
                  alt={'pic'}
                  className="rounded-full object-cover h-full w-100"
                />
              </div>
              <ChevronDown className="h-3 w-3 transition-transform" />
            </div>
            <Button size="icon" variant="link">
              <img src={NotificationImg} alt="" className="w-5 h-5" />
            </Button>
            <Button size="icon" variant="link">
              <img src={ChatImg} alt="" className="w-5 h-5" />
            </Button>
          </div>
        </div>
        {/* <div className="flex-1 flex justify-end space-x-1 lg:space-x-2">
        
        </div> */}
      </header>
    </>
  );
};

export default DefaultHeader;
