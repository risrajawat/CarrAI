import { UserPlus, ClipboardList, CheckCircle, Rocket, MapPin, MessageSquareText } from "lucide-react";

export const howItWorks = [
  {
    title: "Get Started",
    description: "Open CarrAI and click “Get Started”. Quick signup using Clerk gets you into a safe personal account.",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Complete Profile",
    description: "Fill your class, location and interests. This helps CarrAI tailor recommendations to you.",
    icon: <ClipboardList className="w-8 h-8 text-primary"/>,
  },
  {
    title: "Take the Quiz (20 Qs)",
    description:
      "A quick 20-question, 100-point aptitude & interest quiz to discover your best-fit streams.",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
  },
  {
    title: "Personalized Matches",
    description: "Get stream suggestions (PCM/PCB/Arts/Commerce/etc.), course recommendations and a score-backed explanation.",
    icon: <Rocket className="w-8 h-8 text-primary" />,
  },
  {
    title: "Nearby Colleges & Details",
    description: "Explore nearby government colleges based on your location. Each college shows courses, eligibility and scholarships.",
    icon: <MapPin className="w-8 h-8 text-primary" />,
  },
  {
    title: "Ask the College Bot",
    description: "Open the college’s chatbot to ask specific questions — admissions, fees, hostel, placements — instantly.",
    icon: <MessageSquareText className="w-8 h-8 text-primary" />,
  },
];
