import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { HandPlatter, PackageOpen, Store } from "lucide-react";

const icons = [
  {
    icon: Store,
    text: "My Restaurant",
  },
  {
    icon: PackageOpen,
    text: "Products",
  },
  {
    icon: HandPlatter,
    text: "Orders",
  },
];

const page = () => {
  return (
    <div className="px-2 mt-4 text-sm">
      <div>
        <div className="">
          <div>
            <h1 className="text-4xl">The Bistro Cafe</h1>
            <h3 className="text-gray-500 text-lg">Owner - Arihant Kamde</h3>
          </div>
          <div className="mt-2 text-xs">
            <h3>
              <span className="font-medium text-base">Created</span>{" "}
              <span className="text-gray-600"> 03/02/2015</span>
            </h3>
            <h3>
              <span className="font-medium text-base">Location</span>{" "}
              <span className="text-gray-600">Indrapuri colony, Indore</span>
            </h3>
          </div>
          <div className="mt-4 flex gap-2">
            <Button variant="default" size="sm">
              Visit The Bistro
            </Button>
            <Button variant="destructive" size="sm">
              Stop Traffic
            </Button>
          </div>
        </div>
        <div className="mt-7 ">
          <h1 className="text-3xl">Restro Stats</h1>
        </div>
        <div className="[&>*]:min-w-[230px] [&>*]:w-[90%] sm:[&>*]:max-w-[250px]  flex flex-col items-center sm:flex-row sm:flex-wrap md:justify-between mt-3 gap-4">
          <Card>
            <div className="flex justify-between items-center">
              <CardHeader>
                <h3 className="text-sm text-gray-500">Products online</h3>
                <h1 className="text-5xl">20</h1>
              </CardHeader>
            </div>
            <div className="text-xs">
              <CardFooter className="flex gap-2 items-center">
                <Store className="text-gray-700" size="18" />
                <h3>Live on website</h3>
              </CardFooter>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center">
              <CardHeader>
                <h3 className="text-sm text-gray-500">Online orders</h3>
                <h1 className="text-5xl">45</h1>
              </CardHeader>
            </div>
            <div className="text-xs">
              <CardFooter className="flex gap-2 items-center">
                <PackageOpen className="text-gray-700" size="18" />
                <h3>Online orders generated</h3>
              </CardFooter>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between items-center">
              <CardHeader>
                <h3 className="text-sm text-gray-500">Completed orders</h3>
                <h1 className="text-5xl">34</h1>
              </CardHeader>
            </div>
            <div className="text-xs">
              <CardFooter className="flex gap-2 items-center">
                <HandPlatter className="text-gray-700" size="18" />
                <h3>Orders are completed</h3>
              </CardFooter>
            </div>
          </Card>
        </div>
        <div className="mt-7">
          <h1 className="text-3xl">The Bistro Cafe</h1>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor id
            tempore ipsum, obcaecati possimus quos, et vel numquam illo velit
            voluptatum vitae maxime rerum. Sed!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
