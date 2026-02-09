import { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

export interface QAItem {
  id: string;
  question: string;
  answer: string;
  askedBy: string;
  date: string;
}

interface ProductQAProps {
  questions: QAItem[];
}

const ProductQA = ({ questions }: ProductQAProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-6">
        Questions & Answers
      </h2>
      <div className="space-y-4">
        {questions.map((qa) => (
          <div key={qa.id} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
            <button
              onClick={() => setExpandedId(expandedId === qa.id ? null : qa.id)}
              className="w-full flex items-start gap-4 p-5 text-left hover:bg-muted/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">{qa.question}</p>
                <span className="text-xs text-muted-foreground">
                  Asked by {qa.askedBy} • {qa.date}
                </span>
              </div>
              {expandedId === qa.id ? (
                <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
              )}
            </button>
            {expandedId === qa.id && (
              <div className="px-5 pb-5 pl-[4.25rem]">
                <div className="bg-muted/50 rounded-xl p-4">
                  <span className="text-xs font-semibold text-primary mb-1 block">MJ PrintLab</span>
                  <p className="text-sm text-muted-foreground">{qa.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductQA;
