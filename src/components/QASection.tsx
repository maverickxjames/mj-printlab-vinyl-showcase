import { MessageCircleQuestion, MessageCircle } from 'lucide-react';
import { QA } from '@/data/products';

interface QASectionProps {
  questions: QA[];
}

const QASection = ({ questions }: QASectionProps) => {
  return (
    <section className="py-12 border-t border-border">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
        Questions & Answers
      </h2>

      {questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((qa) => (
            <div key={qa.id} className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              {/* Question */}
              <div className="p-6 flex gap-4">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircleQuestion className="w-4.5 h-4.5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">Question</span>
                  </div>
                  <p className="font-semibold text-foreground">{qa.question}</p>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    Asked by {qa.askedBy} • {qa.date}
                  </span>
                </div>
              </div>

              {/* Answer */}
              <div className="p-6 pt-0 ml-[52px]">
                <div className="bg-muted/50 rounded-xl p-4 border border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                    <span className="text-xs font-semibold text-secondary">{qa.answeredBy}</span>
                    <span className="text-xs text-muted-foreground">• {qa.answerDate}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{qa.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-card rounded-2xl border border-border/50">
          <MessageCircleQuestion className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No questions yet. Have a question? Contact us!</p>
        </div>
      )}
    </section>
  );
};

export default QASection;
