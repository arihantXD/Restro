"use client";

import DataTable from "@/components/custom/DataTable";
import { Button } from "@/components/ui/button";

const page = () => {
  const handleSubmit = () => {};
  return (
    <div className="px-2">
      <div className="mt-5 mb-2 flex  justify-between">
        <h3 className="text-lg font-medium">Products</h3>
        <Button variant="outline" size="sm">
          Create product
        </Button>
      </div>
      <DataTable />
    </div>
  );
};

export default page;
