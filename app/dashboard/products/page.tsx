"use client";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "@/schemas/ProductSchema";

const page = () => {
  const restaurantForm = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "The Bistro",
      description: "kamdearihant01@gamil.com",
      price: 1,
      category: "",
      image: "Indrapuri Colony, Indore",
    },
  });
  const handleSubmit = () => {};
  return (
    <div className="px-2 mt-4">
      <div className="my-2">
        <h3 className="text-xs">Step 1</h3>
        <h1 className="">Setup my Restro</h1>
      </div>
      <div className="my-4 text-sm">
        <div className="">
          <h3 className="">Restaurant Information</h3>
          <Form {...restaurantForm}>
            <form onSubmit={restaurantForm.handleSubmit(handleSubmit)}>
              <div className="space-y-4 mt-2">
                <FormField
                  control={restaurantForm.control}
                  name="name"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Restaurant Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="text"
                            placeholder="Restaurant name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={restaurantForm.control}
                  name="address"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} type="text" placeholder="Address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={restaurantForm.control}
                  name="type"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <Input {...field} type="text" placeholder="Type" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <div className="space-y-2">
                  <h3 className="mt-7 block">Owner Information</h3>
                  <FormField
                    control={restaurantForm.control}
                    name="ownerName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Owner Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Owner name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <FormField
                    control={restaurantForm.control}
                    name="ownerEmail"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Owner Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="text"
                              placeholder="Owner name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>
              <Button
                onSubmit={restaurantForm.handleSubmit(handleSubmit)}
                className="mt-5 w-full"
                variant="default"
                type="submit"
              >
                Setup Restro
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
