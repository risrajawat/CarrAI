import { BookOpen, MapPin, MessageSquare, Target } from "lucide-react";

export const features = [
  {
    icon: <BookOpen className="w-10 h-10 mb-4 text-primary"/>,
    title: "Stream Selection",
    description:
      "Get personalized recommendations for PCM, PCB, Humanities, Commerce and Vocational streams.",
  },
  {
    icon: <Target className="w-10 h-10 mb-4 text-primary"/>,
    title: "Carrer Quiz",
    description:
      "Take our comprehensive 20-question assessment to discover your strenghts and interests.",
  },
  {
    icon: <MapPin className="w-10 h-10 mb-4 text-primary"/>,
    title: "Nearby Colleges",
    description:
      "Find government colleges near you with detailed information about courses and eligibility.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 mb-4 text-primary"/>,
    title: "College Chatbot",
    description: "Get instant answers to your questions about colleges, courses, and admission process.",
  },
];