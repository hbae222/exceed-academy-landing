
import React, { ChangeEvent } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface Plan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  stripe_price_id: string;
}

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedPlan: Plan | null;
  checkoutEmail: string;
  setCheckoutEmail: (email: string) => void;
  createAccount: boolean;
  setCreateAccount: (create: boolean) => void;
  handleCheckoutSubmit: (e: React.FormEvent) => void;
}

const CheckoutDialog: React.FC<CheckoutDialogProps> = ({
  open,
  onOpenChange,
  selectedPlan,
  checkoutEmail,
  setCheckoutEmail,
  createAccount,
  setCreateAccount,
  handleCheckoutSubmit
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to {selectedPlan?.name}</DialogTitle>
          <DialogDescription>
            Enter your email to continue with your subscription for {selectedPlan?.price}/{selectedPlan?.period}.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleCheckoutSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="checkout-email">Email Address</Label>
            <Input 
              id="checkout-email"
              type="email"
              placeholder="your@email.com"
              value={checkoutEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setCheckoutEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="create-account"
              checked={createAccount}
              onCheckedChange={(checked: boolean) => setCreateAccount(checked)}
            />
            <Label htmlFor="create-account" className="text-sm">
              Create an account with this email
            </Label>
          </div>
          
          <DialogFooter className="pt-4">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-exceed-blue hover:bg-exceed-indigo">
              Continue to Checkout
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
