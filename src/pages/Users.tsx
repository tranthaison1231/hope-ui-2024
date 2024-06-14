import background from "../assets/images/jumbotron-background.png";
import Filter from "../assets/svgs/filter.svg?react";
import Send from "../assets/svgs/send.svg?react";
import DropDown from "../assets/svgs/drop-down.svg?react";
import StatusUserItem from "../components/StatusUserItem";
import NewUserItem from "../components/NewUserItem";
import UserItem from "../components/UserItem";
import Setting from "../components/Setting";

const PROJECTS_LIST = [
  {
    id: 1,
    name: "Open Project 01",
    status: "Open",
  },
  {
    id: 2,
    name: "Open Project 02",
    status: "In Progress",
  },
  {
    id: 3,
    name: "Open Project 03",
    status: "Closed",
  },
  {
    id: 4,
    name: "Open Project 04",
    status: "In Progress",
  },
  {
    id: 5,
    name: "Open Project 05",
    status: "Open",
  },
  {
    id: 6,
    name: "Open Project 06",
    status: "In Progress",
  },
  {
    id: 7,
    name: "Open Project 07",
    status: "Closed",
  },
  {
    id: 8,
    name: "Open Project 08",
    status: "Review",
  },
  {
    id: 9,
    name: "Open Project 09",
    status: "Open",
  },
  {
    id: 10,
    name: "Open Project 10",
    status: "Open",
  },
];
export default function Users() {
  return (
    <div className="w-full overflow-x-auto">
      <img src={background} alt="jumbotron" />
      <div className="lg:mx-6 sm:mx-2 -mt-6 ">
        <div className=" bg-white relative overflow-hidden rounded-lg px-4 py-2 shadow-lg">
          <div className="flex flex-col items-center justify-between md:flex-row md:space-y-0 md:space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Filter />
              </div>
              <input
                type="search"
                placeholder="Filter by task name..."
                className=" flex items-center justify-center w-full pl-6 py-2 text-sm font-medium rounded-lg md:w-auto focus:outline-none"
              />
            </div>
            <div
              className="inline-flex flex-col w-full md:w-auto md:flex-row
                        children:px-2 children:py-2 children:text-sm children:font-medium children:inline-flex children:items-center children:text-gray-400 hover:children:text-gray-700"
              role="group"
            >
              <button type="button">
                Sort By :
                <DropDown className="ml-2 size-3 " />
              </button>

              <button type="button">
                Group By :
                <DropDown className="ml-2 size-3" />
              </button>
              <button type="button">
                <Send />
                Share
                <DropDown className="ml-2 size-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-x-8 my-8 children:basis-1/4 children:flex children:flex-col children:gap-y-8">
          <div>
            <StatusUserItem className="text-[#232D42]">{`Open project ${
              PROJECTS_LIST.filter((item) => item.status === "Open").length
            }`}</StatusUserItem>
            <NewUserItem />
            {PROJECTS_LIST.filter((item) => item.status === "Open").map(
              (item) => (
                <UserItem key={item.id}>{item.name}</UserItem>
              ),
            )}
          </div>
          <div>
            <StatusUserItem className="text-yellow-400">{`In Progress ${
              PROJECTS_LIST.filter((item) => item.status === "In Progress")
                .length
            }`}</StatusUserItem>
            <NewUserItem />
            {PROJECTS_LIST.filter((item) => item.status === "In Progress").map(
              (item) => (
                <UserItem key={item.id}>{item.name}</UserItem>
              ),
            )}
          </div>
          <div>
            <StatusUserItem className="text-green-400">{`Review ${
              PROJECTS_LIST.filter((item) => item.status === "Review").length
            }`}</StatusUserItem>
            <NewUserItem />
            {PROJECTS_LIST.filter((item) => item.status === "Review").map(
              (item) => (
                <UserItem key={item.id}>{item.name}</UserItem>
              ),
            )}
          </div>
          <div>
            <StatusUserItem className="text-blue-400">{`Closed ${
              PROJECTS_LIST.filter((item) => item.status === "Closed").length
            }`}</StatusUserItem>
            <NewUserItem />
            {PROJECTS_LIST.filter((item) => item.status === "Closed").map(
              (item) => (
                <UserItem key={item.id}>{item.name}</UserItem>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="absolute top-56 right-0 z-20">
        <Setting />
      </div>
    </div>
  );
}
