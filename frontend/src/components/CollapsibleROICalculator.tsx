import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Calculator, 
  ChevronDown, 
  ChevronUp, 
  DollarSign,
  TrendingUp,
  ArrowRight
} from "lucide-react";

const CollapsibleROICalculator = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputs, setInputs] = useState({
    monthlyRevenue: 150000,
    currentStaffCost: 8000,
    missedCallsPercent: 25
  });

  const [quickResults, setQuickResults] = useState({
    annualSavings: 0,
    roiPercent: 0,
    paybackMonths: 0
  });

  useEffect(() => {
    calculateQuickROI();
  }, [inputs]);

  const calculateQuickROI = () => {
    const missedRevenue = (inputs.monthlyRevenue * inputs.missedCallsPercent / 100) * 12;
    const currentAnnualCost = inputs.currentStaffCost * 12 * 1.4;
    const ourServiceCost = currentAnnualCost * 0.45;
    const totalSavings = (currentAnnualCost - ourServiceCost) + missedRevenue;
    const roiPercent = ((totalSavings - ourServiceCost) / ourServiceCost) * 100;
    const paybackMonths = ourServiceCost / (totalSavings / 12);

    setQuickResults({
      annualSavings: Math.round(totalSavings),
      roiPercent: Math.round(roiPercent),
      paybackMonths: Math.round(paybackMonths * 10) / 10
    });
  };

  const handleInputChange = (field: string, value: number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="py-16 bg-luxury-gradient">
      <div className="container mx-auto px-4">
        {/* Preview Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">ROI Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Calculate Your</span>
            <span className="block text-foreground">Potential Savings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Most transportation companies see positive ROI within 3-6 months. Calculate your potential savings now.
          </p>
        </div>

        {/* Quick Calculator Preview */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-luxury mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                  <Label htmlFor="monthlyRevenue" className="text-foreground">Monthly Revenue</Label>
                  <Input
                    id="monthlyRevenue"
                    type="number"
                    value={inputs.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="currentStaffCost" className="text-foreground">Monthly Staff Cost</Label>
                  <Input
                    id="currentStaffCost"
                    type="number"
                    value={inputs.currentStaffCost}
                    onChange={(e) => handleInputChange('currentStaffCost', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="missedCallsPercent" className="text-foreground">Missed Calls %</Label>
                  <Input
                    id="missedCallsPercent"
                    type="number"
                    max="50"
                    value={inputs.missedCallsPercent}
                    onChange={(e) => handleInputChange('missedCallsPercent', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Quick Results */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {formatCurrency(quickResults.annualSavings)}
                  </div>
                  <div className="text-muted-foreground">Annual Savings</div>
                </div>
                <div className="text-center p-6 bg-green-500/5 rounded-2xl border border-green-500/20">
                  <div className="text-3xl font-bold text-green-500 mb-2">
                    {quickResults.roiPercent}%
                  </div>
                  <div className="text-muted-foreground">Return on Investment</div>
                </div>
                <div className="text-center p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-500 mb-2">
                    {quickResults.paybackMonths}
                  </div>
                  <div className="text-muted-foreground">Months to Payback</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Expand/Collapse Button */}
          <div className="text-center mb-8">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="outline"
              className="btn-outline-luxury group"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less Details
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  View Detailed Analysis
                </>
              )}
            </Button>
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="animate-fade-in space-y-8">
              {/* Detailed Breakdown */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground flex items-center">
                    <TrendingUp className="w-6 h-6 text-primary mr-2" />
                    Detailed Cost Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                      <h5 className="font-semibold text-foreground mb-4">Current In-House Costs</h5>
                      <div className="text-2xl font-bold text-red-500 mb-2">
                        {formatCurrency(inputs.currentStaffCost * 12 * 1.4)}
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Salaries & benefits</li>
                        <li>• Management overhead</li>
                        <li>• Training & turnover</li>
                        <li>• Missed opportunities</li>
                      </ul>
                    </div>

                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                      <h5 className="font-semibold text-foreground mb-4">With VAssist Pro</h5>
                      <div className="text-2xl font-bold text-green-500 mb-2">
                        {formatCurrency(inputs.currentStaffCost * 12 * 1.4 * 0.45)}
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Professional service</li>
                        <li>• No management needed</li>
                        <li>• Expert team included</li>
                        <li>• Capture all opportunities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Benefits */}
              <Card className="card-luxury">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Additional Benefits Not Calculated Above</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Operational Benefits</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 24/7 coverage without overtime costs</li>
                        <li>• No sick days or vacation coverage needed</li>
                        <li>• Instant scalability during peak seasons</li>
                        <li>• Professional industry expertise</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">Growth Benefits</h5>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Improved customer satisfaction</li>
                        <li>• Enhanced brand reputation</li>
                        <li>• Focus on core business growth</li>
                        <li>• Technology optimization included</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="bg-white border border-primary/20 rounded-3xl p-8 w-full shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-[1.02] hover:border-primary/40 group cursor-pointer">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Saving?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a consultation to get a personalized ROI analysis for your specific business.
            </p>
            <Button className="btn-luxury">
              Get Custom ROI Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollapsibleROICalculator;
