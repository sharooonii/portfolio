"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import contactImage from "@/assets/contact-image.jpg"

const FormSchema = z.object({
  username: z.string().optional(),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(2, {
    message: "Please input your message.",
  }),
})

export const Contact = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      message: ""
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // Your form submission logic here
    console.log(data);
    // Uncomment if you have toast set up:
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
  }

  return (
    <div id="contact-page" className="contact-container">
      <div className="contact-inner-container">
        <div className="bg-white w-full hidden md:block">
          <img src={contactImage} alt="Sharon Wong" className="mx-auto max-w-[500px]"/>
        </div>
        <div className="bg-lpink">
          <h1 className="contact-title">Contact Me</h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                      {...field} 
                      className="contact-input"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                      {...field} 
                      className="contact-input"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                      {...field} 
                      className="contact-textarea"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <Button type="submit" className="submit-button">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}