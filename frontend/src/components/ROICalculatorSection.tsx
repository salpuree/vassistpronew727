import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  Clock,
  Users,
  Phone,
  Mail,
  CheckCircle,
  ArrowRight,
  Download
} from "lucide-react";

const ROICalculatorSection = () => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: 150000,
    currentStaffCost: 8000,
    missedCallsPercent: 25,
    avgBookingValue: 300,
    callsPerMonth: 500,
    emailsPerMonth: 200,
    hoursPerWeek: 50
  });

  const [calculations, setCalculations] = useState({
    missedRevenue: 0,
    currentAnnualStaffCost: 0,
    ourServiceCost: 0,
    potentialRevenue: 0,
    totalSavings: 0,
    roiPercent: 0,
    paybackMonths: 0
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    // Calculate missed revenue from missed calls
    const missedCalls = (inputs.callsPerMonth * inputs.missedCallsPercent) / 100;
    const missedRevenue = missedCalls * inputs.avgBookingValue * 0.6; // 60% conversion rate
    
    // Calculate current annual staff costs (including benefits, management, etc.)
    const currentAnnualStaffCost = inputs.currentStaffCost * 12 * 1.4; // 40% additional for benefits/overhead
    
    // Estimate our service cost (typically 40-60% less than in-house)
    const ourServiceCost = currentAnnualStaffCost * 0.45; // 45% of current cost
    
    // Calculate potential additional revenue from better service
    const potentialRevenue = missedRevenue * 12; // Annual missed revenue captured
    
    // Calculate total annual savings
    const staffSavings = currentAnnualStaffCost - ourServiceCost;
    const totalSavings = staffSavings + potentialRevenue;
    
    // Calculate ROI and payback period
    const investment = ourServiceCost;
    const roiPercent = ((totalSavings - investment) / investment) * 100;
    const paybackMonths = investment / (totalSavings / 12);

    setCalculations({
      missedRevenue: Math.round(missedRevenue),
      currentAnnualStaffCost: Math.round(currentAnnualStaffCost),
      ourServiceCost: Math.round(ourServiceCost),
      potentialRevenue: Math.round(potentialRevenue),
      totalSavings: Math.round(totalSavings),
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

  const costsBreakdown = [
    {
      category: "In-House Staff Costs",
      current: calculations.currentAnnualStaffCost,
      withUs: calculations.ourServiceCost,
      items: [
        "Salaries & Benefits",
        "Training & Management",
        "Equipment & Software",
        "Coverage & Backup Staff",
        "Recruitment & Turnover"
      ]
    }
  ];

  const benefitsData = [
    {
      icon: Phone,
      title: "Never Miss a Call",
      description: "Capture 100% of incoming opportunities",
      impact: `+${formatCurrency(calculations.potentialRevenue)} annually`
    },
    {
      icon: Clock,
      title: "24/7 Coverage",
      description: "Round-the-clock availability without overtime",
      impact: "40% of bookings happen outside business hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Transportation industry specialists",
      impact: "No training or management overhead"
    },
    {
      icon: Mail,
      title: "Email Management",
      description: "Professional email handling & response",
      impact: "< 15 minute response times guaranteed"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Calculator className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">ROI Calculator</span>
          </div>
          <h2 className="mb-6">
            <span className="text-gradient">Calculate Your Savings</span>
            <span className="block text-foreground">& Return on Investment</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how much you could save and earn by partnering with VAssist Pro. 
            Most transportation companies see positive ROI within 3-6 months.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Inputs */}
          <div className="space-y-6">
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <DollarSign className="w-6 h-6 text-primary mr-2" />
                  Your Business Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
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
                  <Label htmlFor="currentStaffCost" className="text-foreground">Current Monthly Staff Cost</Label>
                  <Input
                    id="currentStaffCost"
                    type="number"
                    value={inputs.currentStaffCost}
                    onChange={(e) => handleInputChange('currentStaffCost', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-foreground">Missed Calls Percentage: {inputs.missedCallsPercent}%</Label>
                  <Slider
                    value={[inputs.missedCallsPercent]}
                    onValueChange={(value) => handleInputChange('missedCallsPercent', value[0])}
                    max={50}
                    min={0}
                    step={5}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="avgBookingValue" className="text-foreground">Average Booking Value</Label>
                  <Input
                    id="avgBookingValue"
                    type="number"
                    value={inputs.avgBookingValue}
                    onChange={(e) => handleInputChange('avgBookingValue', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="callsPerMonth" className="text-foreground">Calls Per Month</Label>
                  <Input
                    id="callsPerMonth"
                    type="number"
                    value={inputs.callsPerMonth}
                    onChange={(e) => handleInputChange('callsPerMonth', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="emailsPerMonth" className="text-foreground">Emails Per Month</Label>
                  <Input
                    id="emailsPerMonth"
                    type="number"
                    value={inputs.emailsPerMonth}
                    onChange={(e) => handleInputChange('emailsPerMonth', Number(e.target.value))}
                    className="mt-2"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* ROI Summary */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <TrendingUp className="w-6 h-6 text-primary mr-2" />
                  Your ROI Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <div className="text-3xl font-bold text-gradient mb-2">
                      {formatCurrency(calculations.totalSavings)}
                    </div>
                    <div className="text-muted-foreground">Annual Savings</div>
                  </div>
                  <div className="text-center p-6 bg-green-500/5 rounded-2xl border border-green-500/20">
                    <div className="text-3xl font-bold text-green-500 mb-2">
                      {calculations.roiPercent}%
                    </div>
                    <div className="text-muted-foreground">Return on Investment</div>
                  </div>
                  <div className="text-center p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                    <div className="text-3xl font-bold text-blue-500 mb-2">
                      {calculations.paybackMonths}
                    </div>
                    <div className="text-muted-foreground">Months to Payback</div>
                  </div>
                </div>

                {/* Cost Comparison */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">Annual Cost Comparison</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-6">
                      <h5 className="font-semibold text-foreground mb-4 flex items-center">
                        <Users className="w-5 h-5 text-red-500 mr-2" />
                        Current In-House Costs
                      </h5>
                      <div className="text-2xl font-bold text-red-500 mb-2">
                        {formatCurrency(calculations.currentAnnualStaffCost)}
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Salaries & benefits</li>
                        <li>• Management overhead</li>
                        <li>• Training & turnover</li>
                        <li>• Equipment & software</li>
                        <li>• Missed opportunities</li>
                      </ul>
                    </div>

                    <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                      <h5 className="font-semibold text-foreground mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        With VAssist Pro
                      </h5>
                      <div className="text-2xl font-bold text-green-500 mb-2">
                        {formatCurrency(calculations.ourServiceCost)}
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Professional service</li>
                        <li>• No management needed</li>
                        <li>• Expert team included</li>
                        <li>• Technology included</li>
                        <li>• Capture all opportunities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Breakdown */}
            <Card className="card-luxury">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Additional Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefitsData.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                        <benefit.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-1">{benefit.title}</h5>
                        <p className="text-sm text-muted-foreground mb-2">{benefit.description}</p>
                        <div className="text-sm font-semibold text-primary">{benefit.impact}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Saving?
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              These calculations are based on industry averages and typical client results. 
              Schedule a consultation to get a personalized ROI analysis for your specific business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-luxury text-lg px-8 py-3">
                Get Custom ROI Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="btn-outline-luxury text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Download ROI Report
              </Button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                * Results based on average client performance. Individual results may vary based on business size, 
                market conditions, and implementation effectiveness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;