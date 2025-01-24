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
import { TypeOf, z } from "zod";
import { restaurantSchema } from "@/schemas/RestaurantSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  Select,
} from "@/components/ui/select";
import axios from "axios";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const restaurantForm = useForm<z.infer<typeof restaurantSchema>>({
    resolver: zodResolver(restaurantSchema),
    defaultValues: {
      name: "The Bistro",
      address: "Indrapuri Colony, Indore",
      ownerEmail: "kamdearihant01@gamil.com",
      ownerName: "Arihant Kamde",
    },
  });
  const handleSubmit = async (data: z.infer<typeof restaurantSchema>) => {
    try {
      const result = await axios.post("/api/restaurants", data);
      console.log(result != null, result.status === 201);

      if (result && result.status === 201) {
        toast({
          title: "Restro registered successfully",
          className: "w-[350px] flex justify-center mx-auto max-w-full",
          duration: 2000,
        });
        router.push("/dashboard");
      } else {
        toast({
          title: "Setup failed, data is incorrect",
          className: "w-[350px] flex justify-center mx-auto max-w-full",
          duration: 2000,
        });
      }
    } catch (error) {
      toast({
        title: "Setup failed, internal issue",
        className: "w-[350px] flex justify-center mx-auto max-w-full",
        duration: 2000,
      });
    }
  };
  return (
    <div className="px-2 mt-4 max-w-[700px] mx-auto">
      <div className="my-2 ">
        <h1 className="text-pink-600">Setup My Restro</h1>
        <p className="text-xs">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto
          praesentium, rem asperiores accusantium consequuntur explicabo!
        </p>
      </div>
      <div className="my-6 text-sm">
        <div className="">
          <h3 className="text-lg">Restaurant Information</h3>
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
                        <Select onValueChange={field.onChange}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Restro type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cafe">Cafe</SelectItem>
                            <SelectItem value="restaurant">
                              Restaurant
                            </SelectItem>
                            <SelectItem value="bistro">Bistro</SelectItem>
                          </SelectContent>
                          <FormMessage />
                        </Select>
                      </FormItem>
                    );
                  }}
                />
                <div className="py-6 space-y-4">
                  <div className="text-lg">
                    <h3 className="">Owner Information</h3>
                  </div>
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
                className="mt-4 w-full"
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
