import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import selfie from "@/assets/selfie.jpg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form"; // Add UseFormReturn import
import { z } from "zod";

import { Button } from "@/components/ShadcnUI/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ShadcnUI/form";
import { RadioGroup, RadioGroupItem } from "@/components/ShadcnUI/radio-group";
import { CheckCircle, AlertCircle } from "lucide-react";

// Define types for better organization
interface FactInfo {
  text: string;
  isFalse: boolean;
  explanation: string;
}

interface QuizResult {
  submitted: boolean;
  correct: boolean;
  factKey?: "languages" | "deloitte" | "cats";
}

// Define our schema for the form
const FormSchema = z.object({
  guess: z.enum(["languages", "deloitte", "cats"], {
    required_error: "Please make a guess!",
  }),
});

// Define the form values type for better type safety
type FormValues = z.infer<typeof FormSchema>;

// Move facts to a separate object for better maintainability
const QUIZ_FACTS: Record<string, FactInfo> = {
  languages: {
    text: "I speak 5 languages - English, Cantonese, Mandarin, Korean, Spanish.",
    isFalse: false,
    explanation: "I'm fluent in all 5 languages - English, Cantonese, Mandarin, Korean, and Spanish."
  },
  deloitte: {
    text: "I recently worked on AI application projects at Deloitte (2025).",
    isFalse: false,
    explanation: "I've been developing AI solutions at Deloitte, as a UI UX Designer and Frontend Developer, focusing on practical applications for business intelligence."
  },
  cats: {
    text: "I like cats more than dogs.",
    isFalse: true, 
    explanation: "While cats are great, I'm actually more of a dog person. I love their loyalty, energy, and companionship."
  }
};

// Create separate components for better organization
const QuizForm: FC<{
  form: UseFormReturn<FormValues>; // Use proper type for form
  onSubmit: (data: FormValues) => void;
  submitted: boolean;
  navigateToAboutPage: () => void;
  resetKey: number;
}> = ({ form, onSubmit, submitted, navigateToAboutPage, resetKey }) => (
  <Form {...form} key={resetKey}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="text-slate-700">
      <FormField
        control={form.control}
        name="guess"
        render={({ field }) => (
          <FormItem className="space-y-2">
            <FormLabel className="text-lg font-medium tracking-wide">
              Which of these facts about me is 
              <span className="font-bold underline ml-1">FALSE</span>?
            </FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
              >
                {Object.entries(QUIZ_FACTS).map(([key, fact]) => (
                  <FormItem key={key} className="flex items-center gap-2">
                    <FormControl>
                      <RadioGroupItem value={key} id={`${key}-${resetKey}`} className="border-slate-800"/>
                    </FormControl>
                    <FormLabel htmlFor={`${key}-${resetKey}`} className="text-base font-normal cursor-pointer">
                      {fact.text}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      {!submitted && (
        <div className="flex gap-2 mt-9">
          <Button 
            type="submit" 
            className="check-button"
          >
            Check Guess
          </Button>
          <Button 
            variant="outline" 
            className="see-button"
            onClick={navigateToAboutPage}
            type="button"
          >
            See More About Me
          </Button>
        </div>
      )}
    </form>
  </Form>
);

const ResultFeedback: FC<{
  result: QuizResult;
  resetQuiz: () => void;
  navigateToAboutPage: () => void;
}> = ({ result, resetQuiz, navigateToAboutPage }) => {
  if (!result.submitted || !result.factKey) return null;
  
  const factDetails = QUIZ_FACTS[result.factKey];
  
  const handleSeeMoreClick = () => {
    resetQuiz(); // Reset the form first
    navigateToAboutPage(); // Then navigate to the about page
  };
  
  return (
    <div className={`border mt-6 p-6 rounded-sm space-y-3
    ${result.correct ? 'bg-green-50/50 border-green-700' : 'bg-red-50/50 border-red-700'}`}>
      <div className="flex items-center gap-2">
        {result.correct ? (
          <CheckCircle className="text-green-700 h-5 w-5" />
        ) : (
          <AlertCircle className="text-red-700 h-5 w-5" />
        )}
        <h3 className={`font-medium ${result.correct ? 'text-green-700' : 'text-red-700'}`}>
          {result.correct ? "Yessss, this is false!" : "Sorry, this is true!"}
        </h3>
      </div>
      
      <p className="mt-2">
        {factDetails.explanation}
      </p>
      
      <div className="flex justify-end">
        {result.correct ? (
          <Button 
            variant="outline" 
            onClick={handleSeeMoreClick}
            className="see-button !border-green-700 !text-green-700 !hover:bg-green-50"
          >
            See More About Me
          </Button>
        ) : (
          <Button 
            onClick={resetQuiz}
            variant="outline"
            className="border-slate-700 text-slate-700 hover:bg-slate-50"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  );
};

export const AboutMe: FC = () => {
  const navigate = useNavigate();
  
  // Add a resetKey to force re-render of the form
  const [resetKey, setResetKey] = useState(0);
  
  // State for tracking quiz results
  const [result, setResult] = useState<QuizResult>({
    submitted: false,
    correct: false
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      guess: undefined,
    }
  });

  // Functions
  const navigateToAboutPage = () => {
    navigate("/about-me");
  };

  const resetQuiz = () => {
    // Reset the form state
    form.reset({
      guess: undefined
    });
    
    // Increment the reset key to force a re-render of the form
    setResetKey(prevKey => prevKey + 1);
    
    // Reset the result state
    setResult({ 
      submitted: false, 
      correct: false 
    });
  };

  const handleSubmit = (data: FormValues) => {
    const selectedFact = QUIZ_FACTS[data.guess];
    setResult({
      submitted: true,
      correct: selectedFact.isFalse,
      factKey: data.guess as QuizResult["factKey"]
    });
  };

  return (
    <div id="about-me" className="bg-nude py-10 md:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-center">
          <div className="md:col-span-2 space-y-6">
            <h1 className="home-title">About Me - Fun Fact Quiz</h1>
            
            {/* Quiz Form Component */}
            <QuizForm 
              form={form} 
              onSubmit={handleSubmit} 
              submitted={result.submitted}
              navigateToAboutPage={navigateToAboutPage}
              resetKey={resetKey}
            />
            
            {/* Result Feedback Component */}
            <ResultFeedback 
              result={result} 
              resetQuiz={resetQuiz} 
              navigateToAboutPage={navigateToAboutPage}
            />
          </div>
          
          <div className="order-first md:order-last">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={selfie} 
                alt="My photo" 
                className="w-full h-auto object-cover shadow-md transform transition-transform hover:scale-105 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};