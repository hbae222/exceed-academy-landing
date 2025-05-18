
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DollarSign, Upload } from "lucide-react";

const PricingCalculator: React.FC = () => {
  const [wordCount, setWordCount] = useState<number>(0);
  const [essayContent, setEssayContent] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const MAX_WORD_COUNT = 1000;

  const countWords = (text: string) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setEssayContent(text);
    setWordCount(countWords(text));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Here you would handle the submission logic
    alert("Essay submitted. Total cost: $70");
  };

  return (
    <section id="pricing-calculator" className="py-16">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-exceed-navy mb-4">
            Submit an Essay
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          {/* Left side - form */}
          <div className="flex-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Upload Essay</h3>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="mb-2 text-sm text-gray-500">
                    Upload a PDF or Word document
                  </p>
                  <Input 
                    type="file" 
                    className="max-w-xs"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
                <p className="mt-2 text-center text-sm text-gray-500">or</p>
              </div>
              
              <div>
                <Label htmlFor="essay-content">Enter Your Essay Content</Label>
                <Textarea 
                  id="essay-content"
                  placeholder="Type or paste your essay here..."
                  className="min-h-[200px] mt-1"
                  value={essayContent}
                  onChange={handleTextChange}
                />
                <div className={`text-right mt-1 text-sm ${wordCount > MAX_WORD_COUNT ? 'text-red-500' : 'text-gray-500'}`}>
                  {wordCount}/{MAX_WORD_COUNT} words
                </div>
              </div>
              
              <div>
                <Label htmlFor="additional-info">Any Other Information (Major, Tone, Special Requests)</Label>
                <Textarea 
                  id="additional-info" 
                  placeholder="Include any specific instructions or notes for your editor..."
                  className="min-h-[100px] mt-1"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          {/* Right side - pricing */}
          <div className="flex-1 bg-exceed-blue text-white p-6 rounded-xl flex flex-col">
            <div className="flex justify-end">
              <DollarSign className="text-white opacity-75" size={24} />
            </div>
            
            <div className="flex-grow flex flex-col items-center justify-center text-center">
              <p className="text-7xl font-bold mb-4">$70</p>
              <Button 
                onClick={handleSubmit}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md mt-6"
                disabled={wordCount > MAX_WORD_COUNT}
              >
                Submit your essay now
              </Button>
              <p className="text-sm mt-4">
                Turnaround time: 5 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
