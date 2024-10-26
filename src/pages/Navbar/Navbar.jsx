import { Button } from "@/components/ui/button";
import {
  AvatarIcon,
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import SideBar from "../SideBar/SideBar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
//import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
//import { useSelector } from "react-redux";

const Navbar = () => {
//   const navigate = useNavigate();
//   const { auth } = useSelector((store) => store);

//   const handleNavigate=()=>{
//     if(auth.user){
//       auth.user.role==="ROLE_ADMIN"?navigate("/admin/withdrawal"):navigate("/profile")
//     }
//   }
  return (
    <>
      <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Sheet className="">
            <SheetTrigger>
              <Button
                className="rounded-full h-11 w-11"
                variant="ghost"
                size="icon"
              >
                <DragHandleHorizontalIcon className=" h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-72  border-r-0 flexs flex-col  justify-center"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <div className="text-3xl flex justify-center  items-center gap-1">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="https://pixabay.com/get/gbfd623c36e7d7d215c1026827f672b781efb2f031d9731c1c8a577924313ab6a18e2e5e5dc9c2c91a86c7aa6deb00177.jpg" />
                    </Avatar>
                    <div>
                      <span className="font-bold text-orange-700">Ecce</span>
                      <span>Bit</span>
                    </div>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <SideBar />
            </SheetContent>
          </Sheet>

          <p
            onClick={() => navigate("/")}
            className="text-sm lg:text-base cursor-pointer"
          >
            Zosh Treading
          </p>
          <div className="p-0 ml-9">
            <Button
              variant="outline"
              onClick={() => navigate("/search")}
              className="flex items-center gap-3"
            >
              {" "}
              <MagnifyingGlassIcon className="left-2 top-3 " />
              <span>Search</span>
            </Button>
          </div>
        </div>
        <div>
          {/* <Avatar className="cursor-pointer" onClick={handleNavigate}>
            {!auth.user ? (
              <AvatarIcon className=" h-8 w-8" />
            ) : (
              <AvatarFallback>{auth.user?.fullName[0].toUpperCase()}</AvatarFallback>
            )}
          </Avatar> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
