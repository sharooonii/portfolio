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
import { toast, Toaster } from "sonner"; // Import both
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import contactImage from "@/assets/contact-image.jpg"
import { LinkedIn } from "@/components/Homepage/LinkedIn"

const FormSchema = z.object({
  username: z.string().optional(),
  email: z.string().min(1, {
    message: "Please input your email.",
  }).email({
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
    console.log(data);
    
    // Basic success toast
    // toast.success("Message sent successfully!");
    
    // Or toast with more details
    toast.success("Submitted Successfully!", {
      description: "I'll get back to you soon.",
      duration: 8000, // 5 seconds
      action: {
        label: 'close',
        onClick: () => console.log('Closed toast')
      }
    });
    
    // Reset form after submission
    form.reset();
  }

  return (
    <div id="contact-page" className="contact-container">

      <Toaster 
        position="bottom-right"
        className="my-toaster-container"
        toastOptions={{
          className: 'my-toast-class',
        }}
       />
      
      <div className="contact-inner-container">
        <div className="bg-white h-full w-full hidden xl:flex flex-col justify-center p-16 space-y-6">
          <img src={contactImage} alt="Sharon Wong" className="mx-auto max-w-[400px] xl:max-w-[500px]"/>
          <LinkedIn />
        </div>
        <div className="h-full flex flex-col justify-center gap-10 px-10 py-16 xl:p-16">
          <div className="space-y-8">
            <div className="block xl:hidden space-y-6">
              <img src={contactImage} alt="Sharon Wong" className="mx-auto max-w-36"/>
              <LinkedIn />
            </div>
            <h1 className="contact-title">Contact Me</h1>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Form fields... */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="contact-input"/>
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
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input {...field} className="contact-input"/>
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
                    <FormLabel>Message *</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="contact-textarea"/>
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