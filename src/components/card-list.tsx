/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type iTunesCard = {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  content: string;
};

export default function CardList({ cardData }: { cardData: iTunesCard[] }) {
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
      {cardData.length > 0 &&
        cardData.map((card) => (
          <Card key={card.id} className="overflow-hidden">
            <div className="flex items-stretch">
              <div className="bg-muted flex items-center justify-center w-16 sm:w-20">
                <img src={card.icon} alt={`${card.title} App Icon`} />
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
