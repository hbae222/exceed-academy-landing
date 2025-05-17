
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { DollarSign } from "lucide-react";

const pricingSchema = z.object({
  services: z.array(z.string()).nonempty("Please select at least one service"),
  wordCount: z.string().min(1, "Please enter word count"),
  turnaroundTime: z.string().min(1, "Please select turnaround time"),
  educationLevel: z.enum(["university", "phd"], {
    required_error: "Please select education level",
  }),
});

type PricingFormValues = z.infer<typeof pricingSchema>;

const PricingCalculator: React.FC = () => {
  const [price, setPrice] = useState<number>(149);
  const [turnaroundDate, setTurnaroundDate] = useState<string>("");
  
  const defaultValues: PricingFormValues = {
    services: ["proofreading"],
    wordCount: "500",
    turnaroundTime: "7",
    educationLevel: "university",
  };

  const form = useForm<PricingFormValues>({
    resolver: zodResolver(pricingSchema),
    defaultValues,
  });

  const calculatePrice = (data: PricingFormValues) => {
    // Base pricing calculation logic
    let basePrice = 149;
    
    // Adjust price based on word count (simplified example)
    const wordCount = parseInt(data.wordCount);
    if (wordCount > 1000) {
      basePrice += Math.floor(wordCount / 1000) * 25;
    }
    
    // Adjust price based on turnaround time
    if (data.turnaroundTime === "3") {
      basePrice *= 1.25; // 25% express fee
    } else if (data.turnaroundTime === "1") {
      basePrice *= 1.5; // 50% rush fee
    }
    
    // Adjust for education level
    if (data.educationLevel === "phd") {
      basePrice *= 1.2; // 20% more for PhD/MBA level
    }
    
    return Math.round(basePrice);
  };

  const calculateDeliveryDate = (days: string) => {
    const date = new Date();
    date.setDate(date.getDate() + parseInt(days));
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  // Watch form values to recalculate price
  const watchedValues = form.watch();
  
  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      if (value.services && value.wordCount && value.turnaroundTime && value.educationLevel) {
        setPrice(calculatePrice(value as PricingFormValues));
        setTurnaroundDate(calculateDeliveryDate(value.turnaroundTime));
      }
    });
    
    // Set initial values
    setPrice(calculatePrice(defaultValues));
    setTurnaroundDate(calculateDeliveryDate(defaultValues.turnaroundTime));
    
    return () => subscription.unsubscribe();
  }, [form.watch]);

  const onSubmit = (data: PricingFormValues) => {
    console.log(data);
    // Here you would handle the form submission, e.g. redirect to payment page
    alert("Submitting your essay for editing. Total: $" + price);
  };

  return (
    <section id="pricing" className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <p className="text-exceed-blue font-medium mb-2">Pricing</p>
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Improve your writing with professional proofreading and editing services
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          {/* Left side - form */}
          <div className="flex-1">
            <Form {...form}>
              <form className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="proofreading" 
                        checked 
                        disabled
                      />
                      <Label htmlFor="proofreading">Proofreading & Editing Services</Label>
                    </div>
                    
                    <div className="ml-6 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="structure" />
                        <Label htmlFor="structure">Structure Check</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="clarity" />
                        <Label htmlFor="clarity">Clarity Check</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="formatting" />
                        <Label htmlFor="formatting">Paper Formatting</Label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox id="citation" />
                        <Label htmlFor="citation">Citation Editing</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Word Count</h3>
                  <Input 
                    {...form.register("wordCount")}
                    type="number" 
                    defaultValue={500} 
                    min={100}
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Turnaround time</h3>
                  <Select 
                    defaultValue="7"
                    onValueChange={(value) => form.setValue("turnaroundTime", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select turnaround time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 day</SelectItem>
                      <SelectItem value="3">3 days</SelectItem>
                      <SelectItem value="7">7 days</SelectItem>
                      <SelectItem value="14">14 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Education</h3>
                  <RadioGroup 
                    defaultValue="university"
                    onValueChange={(value: "university" | "phd") => 
                      form.setValue("educationLevel", value)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="university" id="university" />
                      <Label htmlFor="university">University/College</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phd" id="phd" />
                      <Label htmlFor="phd">PhD/MBA</Label>
                    </div>
                  </RadioGroup>
                </div>
              </form>
            </Form>
          </div>
          
          {/* Right side - pricing */}
          <div className="flex-1 bg-exceed-blue text-white p-6 rounded-xl flex flex-col">
            <div className="flex justify-end">
              <DollarSign className="text-white opacity-75" size={24} />
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <p className="text-7xl font-bold mb-4">${price}</p>
              <Button 
                onClick={form.handleSubmit(onSubmit)}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md mt-6"
              >
                Submit your essay now
              </Button>
              <p className="text-sm mt-4">
                Turnaround time: {turnaroundDate}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
