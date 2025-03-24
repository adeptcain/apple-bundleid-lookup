"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  FileText,
  Mail,
  Globe,
  Bell,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Sample data for the cards
const cardData = [
  {
    id: 1,
    icon: <FileText className="h-full w-full text-primary" />,
    title: "Documentation",
    subtitle: "Read our comprehensive guides and references",
    content: "Access our documentation at https://docs.example.com",
  },
  {
    id: 2,
    icon: <Mail className="h-full w-full text-primary" />,
    title: "Email Templates",
    subtitle: "Professional email templates for your business",
    content: "Download email templates from https://templates.example.com",
  },
  {
    id: 3,
    icon: <Globe className="h-full w-full text-primary" />,
    title: "API Reference",
    subtitle: "Integrate with our powerful API",
    content: "API documentation available at https://api.example.com",
  },
  {
    id: 4,
    icon: <Bell className="h-full w-full text-primary" />,
    title: "Notifications",
    subtitle: "Stay updated with real-time alerts",
    content: "Configure notifications at https://alerts.example.com",
  },
  {
    id: 5,
    icon: <Calendar className="h-full w-full text-primary" />,
    title: "Event Calendar",
    subtitle: "Never miss an important date",
    content: "View upcoming events at https://calendar.example.com",
  },
  {
    id: 6,
    icon: <FileText className="h-full w-full text-primary" />,
    title: "Documentation",
    subtitle: "Read our comprehensive guides and references",
    content: "Access our documentation at https://docs.example.com",
  },
  {
    id: 7,
    icon: <Mail className="h-full w-full text-primary" />,
    title: "Email Templates",
    subtitle: "Professional email templates for your business",
    content: "Download email templates from https://templates.example.com",
  },
  {
    id: 8,
    icon: <Globe className="h-full w-full text-primary" />,
    title: "API Reference",
    subtitle: "Integrate with our powerful API",
    content: "API documentation available at https://api.example.com",
  },
  {
    id: 9,
    icon: <Bell className="h-full w-full text-primary" />,
    title: "Notifications",
    subtitle: "Stay updated with real-time alerts",
    content: "Configure notifications at https://alerts.example.com",
  },
  {
    id: 10,
    icon: <Calendar className="h-full w-full text-primary" />,
    title: "Event Calendar",
    subtitle: "Never miss an important date",
    content: "View upcoming events at https://calendar.example.com",
  },
];

export default function CardList() {
  // State to track which card's content has been copied
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Function to copy card content to clipboard
  const copyToClipboard = (content: string, id: number) => {
    navigator.clipboard.writeText(content).then(() => {
      setCopiedId(id);
      // Reset the copied state after 2 seconds
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <div className="space-y-4">
      {cardData.map((card) => (
        <Card key={card.id} className="overflow-hidden">
          <div className="flex items-stretch">
            <div className="bg-muted p-4 flex items-center justify-center w-16 sm:w-20">
              {card.icon}
            </div>
            <div className="flex-1 p-4 flex flex-col justify-center">
              <h3 className="font-medium text-lg">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.subtitle}</p>
            </div>
            <div className="p-4 flex flex-col items-end">
              <p className="text-muted-foreground text-sm">{card.content}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(card.content, card.id)}
                className="whitespace-nowrap"
              >
                {copiedId === card.id ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied {card.content}
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Bundle ID
                  </>
                )}
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
