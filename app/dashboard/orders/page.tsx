import DataTable from "@/components/custom/DataTable";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { PackageOpen } from "lucide-react";

const page = () => {
  return (
    <div className="px-2">
      <div className="mt-5">
        <h3 className="text-lg font-medium">Orders</h3>
      </div>
      <div className="text-sm my-4 flex gap-4">
        <div className="border px-3 py-2 rounded-sm w-[130px] shadow-sm">
          <h3 className="text-gray-500">Total orders</h3>
          <h3 className="font-medium text-xl">12</h3>
        </div>
        <div className="border px-3 py-2 rounded-sm w-[130px] shadow-sm">
          <h3 className="text-gray-500">Delivered</h3>
          <h3 className="font-medium text-xl">7</h3>
        </div>
        <div className="border px-3 py-2 rounded-sm w-[130px] shadow-sm">
          <h3 className="text-gray-500">Pending</h3>
          <h3 className="font-medium text-xl">3</h3>
        </div>
        <div className="border px-3 py-2 rounded-sm w-[130px] shadow-sm">
          <h3 className="text-gray-500">Failed</h3>
          <h3 className="font-medium text-xl">6</h3>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default page;
